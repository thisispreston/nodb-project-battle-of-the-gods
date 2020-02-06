const express = require('express');
const ctrl = require('./controller');
const PORT = 4000;

const app = express();

app.use(express.json());

//ENDPOINTS
app.get('/api/greeks', ctrl.getGreeks);
app.get('/api/romans', ctrl.getRomans);


app.listen( PORT, () => console.log(`bingpot on port ${PORT}`));
