const express = require('express')
const cors = require('cors')
const greekCtrl = require('./greekController')
const romanCtrl = require('./romanController')
const PORT = 4050

const app = express()

app.use(express.json())
app.use(cors())

//  GREEK ENDPOINTS
app.get('/api/greeks', greekCtrl.getGreeks)
app.post('/api/greek-champ', greekCtrl.selectChamp)
app.put('/api/greeks/:id', greekCtrl.editTaunt)
app.delete('/api/greeks/:id', greekCtrl.removeChamp) // if champ dies, hp=0, then delete from list
app.delete('/api/greek-champ', greekCtrl.swapOut)
app.put('/api/greeks/:id', greekCtrl.getAttacked)

//  ROMAN ENDPOINTS
app.get('/api/romans', romanCtrl.getRomans)
app.post('/api/roman-champ', romanCtrl.selectChamp)
app.put('/api/romans/:id', romanCtrl.editTaunt)
app.delete('/api/romans/:id', romanCtrl.removeChamp)// if champ dies, hp=0, then delete from list
app.delete('/api/roman-champ', romanCtrl.swapOut)
app.put('/api/romans/battle/:id', () => console.log('index'), romanCtrl.getAttacked)


app.listen( PORT, () => console.log(`olympus on port ${PORT}`))
