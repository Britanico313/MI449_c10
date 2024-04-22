import './App.css';
import React, { useState, useEffect } from 'react';
import supabase from './supabase';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data, error } = await supabase
            .from('HT') 
            .select('*');

        if (error) console.log("Error:", error);
        else setData(data);
    };

    return (
        <div>
            <h1>Data from Supabase</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
