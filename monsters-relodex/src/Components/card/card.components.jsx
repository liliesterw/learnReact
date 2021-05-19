import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" 
        src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} />
        <h1> {props.monster.name} </h1>
        <h3> {props.monster.email} </h3>
        <h3> {props.monster.phone} </h3>
    </div>
)