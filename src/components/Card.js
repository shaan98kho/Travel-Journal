import React from 'react'
import Waypoint from '../images/waypoint-icon.png'
import '../css/component.css'

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={props.item.imgURL} alt="location"/>
            </div>
            <div className='card-details'>
                <div className='card-details--location'>
                    <img src={Waypoint} alt="waypoint"/>
                    <h6>{props.item.location}</h6>
                    <a href={props.item.googleMapsLink}>View on Google Maps</a>
                </div>
                <div className='card-details--title'><h2>{props.item.title}</h2></div>
                <div className='card-details--date'>
                    <p>{props.item.date.start} - {props.item.date.end}</p>
                </div>
                <div className='card-details--description'>
                    <p>{props.item.description}</p>
                    <p> beep</p>

                </div>

            </div>

        </div>
    )


}