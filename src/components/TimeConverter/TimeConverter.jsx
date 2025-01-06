import React, { useState } from 'react';
import axios from 'axios';

function TimeConverter() {
    const [time, setTime] = useState('');
    const [convertedTime, setConvertedTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:3000/convert-time', { time });
            setConvertedTime(data.convertedTime);
        } catch {
            setConvertedTime('Невірний формат');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="HH:MM" />
                <button type="submit">Convert</button>
            </form>
            {convertedTime && <p>{convertedTime}</p>}
        </div>
    );
}

export default TimeConverter;
