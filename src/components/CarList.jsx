import React, { useState, useEffect } from 'react';
import { getDB } from '../lib/connect';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = await getDB();
                const collection = db.collection('Voitures');
                const carsData = await collection.find({}).toArray();
                console.log('Data from MongoDB:', carsData);
                setCars(carsData);
            } catch (error) {
                console.error('Error fetching data from MongoDB:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Liste des voitures</h1>
            <ul>
                {cars.map((car) => (
                    <li key={car._id}>{car.name} - {car.make} - {car.color} - {car.kilometre} - {car.year}</li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
