import React from 'react';
import '../car/car.css';

const Car = ({ image, link, name }) => {
    return ( 
        <div className="car-card">
            <a href={link}>
                <img src={image} alt={name} className="car-image" />
            </a>
            <p className="car-name">{name}</p>
        </div>
     );
}
 
export default Car;
