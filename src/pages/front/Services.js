import React from 'react';
import CustomNavbar from "../../components/front/CustomNavbar";
import Breadcrumb from "../../components/front/Breadcrumb";
import HRService from "../../components/front/HRService";
import PrototypeService from "../../components/front/PrototypeService";
import FooterTwo from "../../components/front/FooterTwo";
import FooterData from "../../components/front/FooterData";


const Service = () => {
    const ServiceDataA = {
        STitle: 'Wamya Services are the best !',
        HRService: [
            {
                id: '1',
                HRtitles : 'Reports & Analytics',
                HRdescription: 'reports & analytics provide you\n' +
                    'with the graphical representation of key\n' +
                    'business insights which helps you take\n' +
                    'insight-driven business decisions.\n',
                Hicon: 'stats-up',
                rclass : 'pr_70',
                iclass: 'icon_one',
            },
            {
                id: '2',
                HRtitles : 'Auto Dispatch',
                HRdescription: 'advanced auto-dispatch system\n' +
                    'helps you to go through hot-shot\n' +
                    'assignments with the utmost ease. It also\n' +
                    'minimizes labor costs and service time by\n' +
                    'assigning the most suitable driver for the\n' +
                    'right task at the right time.',
                Hicon: 'dashboard',
                rclass : 'pl_50 pr_20',
                iclass: 'icon_two',
            },
            {
                id: '3',
                HRtitles : 'REAL-TIME Status Update',
                HRdescription: 'makes your delivery process\n' +
                    'transparent by providing real-time status\n' +
                    'updates of the shipments to the customers.',
                Hicon: 'location-pin',
                rclass : 'pl_70',
                iclass: 'icon_three',
            },
            {
                id: '4',
                HRtitles : 'Proof Of Delivery',
                HRdescription: 'software enables you to\n' +
                    'complete the delivery with the help of in-app\n' +
                    'signatures, photos, notes, and barcodes.\n',
                Hicon: 'ticket',
                rclass : 'pr_70',
                iclass: 'icon_four',
            },
            {
                id: '5',
                HRtitles : 'Automatic Notification',
                HRdescription: 'Send automatic SMS notifications to your\n' +
                    'customers and let them know when their\n' +
                    'delivery started when it\'s estimated to arrive,\n' +
                    'and when it will be arriving.\n',
                Hicon: 'mobile',
                rclass : 'pl_50 pr_20',
                iclass: 'icon_five',
            },
            {
                id: '6',
                HRtitles : 'Route Optimization',
                HRdescription: 'Wamya integrated route optimization\n' +
                    'feature considers traffic, location, capacity,\n' +
                    'and time to discover the most efficient\n' +
                    'routes.',
                Hicon: 'location-arrow',
                rclass : 'pl_70',
                iclass: 'icon_six',
            }
        ]
    }

    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our services" Pdescription="you can find here our services and our advanced features"/>
            <HRService ServiceData={ServiceDataA}/>
            <PrototypeService/>
            <FooterTwo fClass="pt_150" FooterData={FooterData}/>
        </div>
    )
}
export default Service;