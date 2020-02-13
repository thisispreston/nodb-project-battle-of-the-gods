let champ = []

let greeks = [
  {
    id: 1,
    name: 'Zeus',
    image: 'https://blogs.kent.ac.uk/minerva/files/2018/12/luis-image.png',
    taunt: `The sky is my domain!`,
    hp: 250,
    attack: 55,
    defense: 40,
    heal: 20,
  },
  {
    id: 2,
    name: 'Ares',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmythologian.net%2Fwp-content%2Fuploads%2F2012%2F08%2Fares.jpg&f=1&nofb=1',
    taunt: `I invented war.`,
    hp: 280,
    attack: 55,
    defense: 45,
    heal: 15,
  },
  {
    id: 3,
    name: 'Poseidon',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ53wSzPBdUXkDPXg03BoOIs1Rk-CC2qt0InW2mYmJrexZwmdV',
    taunt: `Hold your breath!`,
    hp: 240,
    attack: 50,
    defense: 35,
    heal: 25,
  },
  {
    id: 4,
    name: 'Apollo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEDoW--QIRQloaRubD_QsWpxPvH2z9KirvMWwToSX6YwF0GKkb',
    taunt: `You should meet my sister!`,
    hp: 220,
    attack: 60,
    defense: 15,
    heal: 15,
  },
  {
    id: 5,
    name: 'Artemis',
    image: 'https://i.pinimg.com/originals/24/04/89/240489de2693ea7309d5c9d8209ec500.jpg',
    taunt: `Katniss's got nothing on me!`,
    hp: 215,
    attack: 55,
    defense: 15,
    heal: 25,
  },
  {
    id: 6,
    name: 'Athena',
    image: 'https://i.pinimg.com/originals/46/16/03/4616030ae791adaa99b318a0f54f2ded.jpg',
    taunt: `Your downfall is already planned.`,
    hp: 200,
    attack: 45,
    defense: 50,
    heal: 30,
  },
  {
    id: 7,
    name: 'Hephaestus',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1LpcnYs0xoWFHsQHOTtRfKHwNy_12THb2cAnHbeUEmuCrWgNO',
    taunt: `I made your weapons. You can't use them against me!`,
    hp: 300,
    attack: 30,
    defense: 50,
    heal: 40,
  },
  {
    id: 8,
    name: 'Demeter',
    image: 'https://vignette.wikia.nocookie.net/dawn-of-gods/images/7/76/Demeter_Summon.jpg/revision/latest?cb=20160622151343',
    taunt: `You will taste the grain of my disdain.`,
    hp: 180,
    attack: 25,
    defense: 20,
    heal: 60,
  },
]

module.exports = {
  getGreeks: (req, res) => {
    if (req.query.name) {
      let filteredGods = greeks.filter(el => {
          return el.name === req.query.name
      })
      return res.status(200).send(filteredGods)
    }

    res.status(200).send(greeks)
  },
  selectChamp: (req, res) => {
    const { arg } = req.body
    champ.splice(0, 1, arg)

    res.status(200).send(champ[0])
  },
  editTaunt: (req, res) => {
    const { id } = req.params
    const { newTaunt } = req.body
    
    const index = greeks.findIndex( e => {
      return e.id === +id
    })

    greeks[index].taunt = newTaunt

    res.status(200).send(greeks)
  },
  removeChamp: (req, res) => {
    const { id } = req.params

    const index = greeks.findIndex( e => {
      return e.id === +id
    })

    greeks.splice(index, 1)

    res.status(200).send(greeks)
  },
  swapOut: (req, res) => {
    let champ = []

    res.status(200).send(champ)
  },
  getAttacked: (req, res) => {
    const { id } = req.params
    const { atk } = req.body
    
    const index = greeks.findIndex( e => {
      return e.id === +id
    })

    greeks[index].hp -= Number(atk) * (1 - (greeks[index].defense / 100))

    if (greeks[index].hp < 0) {
      champ.splice(0, 1, {
        id: 9,
        name: 'Hades',
        image: 'https://i.pinimg.com/originals/f7/3f/0a/f73f0adffaa00c92b8b6332a5598edb8.jpg',
        taunt: `Thanks for the soul.`,
      })
      greeks.splice(index, 1)
    }

    res.status(200).send(greeks)
  }
}

