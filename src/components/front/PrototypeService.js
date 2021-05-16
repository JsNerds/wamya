import React, {Component} from 'react';
import Sectitle from '../../componentsFront/Title/Sectitle'
import Pserviceslider from './Pserviceslider';

class Sservice extends Component{
    render(){
        return(
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <Sectitle Title="Another Features" TitleP=""
                    tClass="t_color3" sClass="sec_title text-center mb_70"/>
                    <Pserviceslider/>
                </div>
            </section>
        )
    }
}
export default Sservice;