const express = require('express');
const ctrl = require('./controller');
const PORT = 4050;

const app = express();

app.use(express.json());

//ENDPOINTS
app.get('/api/greeks', ctrl.getGreeks);
app.get('/api/romans', ctrl.getRomans);



app.listen( PORT, () => console.log(`olympus on port ${PORT}`));
