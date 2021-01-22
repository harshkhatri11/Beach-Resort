import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer,FaSpa,FaWifi} from "react-icons/fa";

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Non fugiat pariatur eiusmod magna. Minim irure irure esse eu laboris occaecat."
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Non fugiat pariatur eiusmod magna. Minim irure irure esse eu laboris occaecat."
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"Non fugiat pariatur eiusmod magna. Minim irure irure esse eu laboris occaecat."
            },
            {
                icon:<FaBeer/>,
                title:"strongest Beer",
                info:"Non fugiat pariatur eiusmod magna. Minim irure irure esse eu laboris occaecat."
            },
            {
                icon:<FaSpa/>,
                title:"Best Spa",
                info:"Non fugiat pariatur eiusmod magna. Minim irure irure esse eu laboris occaecat."
            },
            {
                icon:<FaWifi/>,
                title:"Free Wifi",
                info:"Non fugiat pariatur eiusmod magna. Minim irure irure esse eu laboris occaecat."
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
