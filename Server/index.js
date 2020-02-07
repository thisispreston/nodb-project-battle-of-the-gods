const express = require('express')
const greekCtrl = require('./greekController')
const romanCtrl = require('./romanController')
const PORT = 4050

const app = express()

app.use(express.json())

//  GREEK ENDPOINTS
app.get('/api/greeks', greekCtrl.getGreeks)
app.post('/api/greek-champ', greekCtrl.selectChamp)
app.delete('/api/greeks/:id', greekCtrl.removeChamp)

//  ROMAN ENDPOINTS
app.get('/api/romans', romanCtrl.getRomans)
app.post('/api/roman-champ', romanCtrl.selectChamp)
app.delete('/api/romans/:id', romanCtrl.removeChamp)

app.listen( PORT, () => console.log(`olympus on port ${PORT}`))
