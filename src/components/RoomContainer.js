import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import {RoomConsumer} from '../context';



/*export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value =>{

                const {loading,sortedRooms,rooms} = value;
                console.log(value);

                if(loading){
                    return <Loading/>
                }
                return(
                    <div>
                        Hello from room container
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                );
            }}
        </RoomConsumer>  
    );
}*/


/*here we use higher order component*/
function RoomContainer({context}){

    const {loading,sortedRooms,rooms}=context;

    if(loading){
        return <Loading/>;
    }
    return(
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    );
}
export default withRoomConsumer(RoomContainer);