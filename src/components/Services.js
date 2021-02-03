import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaBeer,FaSpa} from "react-icons/fa";

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"No amount of physical contact could match the healing powers of a well made cocktail."
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you are climbing it."
            },
            {
                icon:<FaBeer/>,
                title:"strongest Beer",
                info:"A fine beer may be judged with only one sip,But it's better to be thoroughly sure."
            },
            {
                icon:<FaSpa/>,
                title:"Best Spa",
                info:"Rest and your energy will be restored."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return(
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
                </div> 
            </section>
        )
    }
}
