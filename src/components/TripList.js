import './TripList.css';
import { useFetch } from '../hooks/useFetch';
import React, { useState } from 'react';

export default function TripList() {
  const [url, setUrl] = useState('http://localhost:3000/trips');
  const { data, pending, error } = useFetch(url);

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      {pending && <div>Loading trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {data && data.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className='filters'>
        <button
          onClick={() => setUrl('http://localhost:3000/trips/?loc=europe')}
        >
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  );
}
