import React, {Component} from 'react';
import HRServiceItems from './HRServiceItems';

class HRService extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <section className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90">Wamya is built for customers , companies and particular drivers like you.<br/> We've fast enough and we deliver your package with love
                    </h2>
                    <hr/>
                    <br/>
                    <center>
                    <h4>Advanced Features</h4>
                    </center>
                    <br/> <hr/>
                    <br/>

                    <div className="row p_service_info">
                            {
                                ServiceData.HRService.map(item => {
                                    return(
                                        <HRServiceItems HRtitle={item.HRtitles} HRdescription={item.HRdescription}  Hicon={item.Hicon} rclass={item.rclass} iclass={item.iclass} key={item.id}/>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>
        )
    }
}
export default HRService;