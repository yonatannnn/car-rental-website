import React from 'react';
import '../about/about.css';
import Info from './infos/infos';

const About = () => {
    return ( 
        <div className="about">
            <p>About the company</p>
            <Info text="Our diverse fleet includes budget, luxury, and eco-friendly vehicles. We offer competitive pricing, flexible terms, and exceptional customer service. Enjoy a seamless booking process with 24/7 support. Trust us for reliable, stylish, and safe transportation." />
            <Info text="Renting a car with us is seamless and stress-free. We offer a diverse fleet, competitive pricing, and flexible terms. Enjoy exceptional customer service, 24/7 support, and an easy booking process. Drive away in comfort and style!" />
        </div>
     );
}
 
export default About;
