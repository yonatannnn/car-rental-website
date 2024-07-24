import React from 'react';
import '../cars/cars.css';
import Car from './car/car';

const Cars = () => {
    const carData = [
        { image: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '#', name: 'Car 1' },
        { image: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '#', name: 'Car 2' },
        { image: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '#', name: 'Car 3' },
        { image: 'https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '#', name: 'Car 4' },
    ];

    return ( 
        <div className="cars">
            <p className="offer-text">OFFER</p>
            <div className="car-list">
                {carData.slice(0, 3).map((car, index) => (
                    <Car key={index} image={car.image} link={car.link} name={car.name} />
                ))}
            </div>
            {carData.length > 3 && (
                <button className="view-more-button">View More</button>
            )}
        </div>
     );
}
 
export default Cars;
