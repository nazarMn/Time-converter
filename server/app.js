const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.json());

function convertTimeTo12HourFormat(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const convertedHours = hours % 12 || 12;
    return `${convertedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
}

app.post('/convert-time', (req, res) => {
    const { time } = req.body;
    const [hours, minutes] = time.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return res.status(400).send('Невірний формат');
    }
    res.json({ convertedTime: convertTimeTo12HourFormat(time) });
});



app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});