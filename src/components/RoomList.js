import React from 'react'
import Room from './Room';

export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <div class="ui massive negative message">
                <div class="header">
                     unfortunately no rooms matched with your search criteria.
                </div>
                </div>
            </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item=>{
                    return <Room key={item.id} room={item}/>;
                })}
            </div>
        </section>
    );
}
