import React, {useEffect,useState, useRef} from 'react';
import * as faceapi from 'face-api.js';
import '../../assets/VideoStyle.css';
import MuiAlert from "@material-ui/lab/Alert";
import {queryServerApi} from "../../utils/queryServerApi";
import {useHistory} from "react-router-dom";



const SignInWithFace = () => {
    const [error,setError] = useState({visible: false,message: "",severity:""});
    const history = useHistory();
    const videoHeight = 400;
    const videoWidth = 640;

    const [initializing,setInitializing] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();



    useEffect(()=>{

        const loadModels = async ()=>{
            const MODEL_URL = process.env.PUBLIC_URL + "/models";
            setInitializing(true);
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
            ]).then(startVideo)
        }
        loadModels();

    },[]);

    const startVideo = () => {
        navigator.getUserMedia(
            { video: {} },
            stream => videoRef.current.srcObject = stream,
            err => console.error(err)
        )
    }

    const loadImage = async () => {

        const [users, err] = await queryServerApi("users/usersAll", null, "GET", false);


        return Promise.all(
        users.map( async user => {
            const descriptions = []
            const imgSrc =  process.env.REACT_APP_API_URL_UPLOADS+"/"+user.img;
                const img = await faceapi.fetchImage(imgSrc);
                const results = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                descriptions.push(results.descriptor);

            return new faceapi.LabeledFaceDescriptors(user.Email, descriptions);
        })

        )


    }


    const login = async (Email) => {
        const [user, err] = await queryServerApi("users/EmailFace?email="+Email, null, "GET", false);
        if(user === "UserNotFound"){
            setError({
                visible: true,
                message:`Username or Email doesn't exist  if you registred recently please activate your account`,
                severity: "error"
            });
        }
        else {

            if(user[0].Role === "Admin")
            {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].Id);
                history.push("/AdminDashborad");
                history.go(0);
            }
            else if (user[0].Role === "Company")
            {
                const [company, err] = await queryServerApi("entreprises/"+user[0].Id, null, "GET", false);
                if(company.Subscribed){
                    localStorage.setItem('username', user[0].Username);
                    localStorage.setItem('role', user[0].Role);
                    localStorage.setItem('id', user[0].Id);
                    localStorage.setItem('img', user[0].img);
                    history.push("/");
                    history.go(0);

                }
                else
                {
                    setError({
                        visible: true,
                        message: "You are not Subscribed Please Update your subscription",
                        subscription: true,
                        id:user[0].Id,
                        severity: 'warning'

                    });

                }
            }
            else {
                localStorage.setItem('username', user[0].Username);
                localStorage.setItem('role', user[0].Role);
                localStorage.setItem('id', user[0].Id);
                localStorage.setItem('img', user[0].img);
                history.push("/");
                history.go(0);

            }
        }
    }

    const handleVideoOnPlay = () => {
        setInterval(async ()=>{
            if(initializing){
                setInitializing(false);
            }

            const labeledFaceDescriptors = await loadImage()
            const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)

            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            const displaySize = { width: videoWidth, height: videoHeight}
            faceapi.matchDimensions(canvasRef.current, displaySize);

            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withFaceDescriptors();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
            //faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
            //faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections)
           // console.log(detections);


            const resultF = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
            resultF.forEach((result, i) => {
                const box = resizedDetections[i].detection.box
                 faceapi.draw.DrawBox(box, { label: result.toString() })
                var resultText=result.toString().split('(')
                var resultClear = resultText[0].replaceAll(" ","")
                console.log(resultClear);

                if(resultClear === "unknown"){
                    setError({
                        visible: true,
                        message: "Unknown user Please stay stable or try another way to sing in",
                        severity: "error"
                    });
                }else {
                    setError({
                        visible: true,
                        message: "Welcome , sign in ...",
                        severity: "success"
                    });
                    login(resultClear);
                }


            })



        },1000)
    }

    return(
        <div className="container">

            {error.visible ? (
                <MuiAlert className="mb-4" severity={error.severity}>
                    <div className="d-flex align-items-center align-content-center">
                       <span>
                             <strong className="d-block">{error.message}</strong>
                        </span>
                    </div>
                </MuiAlert>
                ) :
                (
            <span>
                {initializing ?
                <MuiAlert className="mb-4" severity="info">
                    <div className="d-flex align-items-center align-content-center">
                        <span>
                               <strong className="d-block">Plase wait ...</strong>
                        </span>
                    </div>
                </MuiAlert>
                    :

                <MuiAlert className="mb-4" severity="success">
                    <div className="d-flex align-items-center align-content-center">
                         <span>
                                 <strong className="d-block">Ready!</strong>
                         </span>
                    </div>
                </MuiAlert>
            }
            </span>
                )}
            <div className="display-flex justify-content-center">
                <video ref={videoRef} autoPlay muted width={videoWidth} height={videoHeight} onPlay={handleVideoOnPlay}/>
                <canvas ref={canvasRef} className="position-absolute"/>
            </div>

        </div>
    )
}
export default SignInWithFace;