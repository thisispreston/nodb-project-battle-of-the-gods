let champ = []

const greeks = [
  {
    id: 1,
    name: 'Zeus',
    image: 'https://blogs.kent.ac.uk/minerva/files/2018/12/luis-image.png',
    taunt: `The sky is my domain!`,
  },
  {
    id: 2,
    name: 'Ares',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmythologian.net%2Fwp-content%2Fuploads%2F2012%2F08%2Fares.jpg&f=1&nofb=1',
    taunt: `I invented war.`,
  },
  {
    id: 3,
    name: 'Poseidon',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ53wSzPBdUXkDPXg03BoOIs1Rk-CC2qt0InW2mYmJrexZwmdV',
    taunt: `Hold your breath!`,
  },
  {
    id: 4,
    name: 'Apollo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEDoW--QIRQloaRubD_QsWpxPvH2z9KirvMWwToSX6YwF0GKkb',
    taunt: `You should meet my sister!`,
  },
  {
    id: 5,
    name: 'Artemis',
    image: 'https://i.pinimg.com/originals/24/04/89/240489de2693ea7309d5c9d8209ec500.jpg',
    taunt: `Katniss's got nothing on me!`,
  },
  {
    id: 6,
    name: 'Athena',
    image: 'https://i.pinimg.com/originals/46/16/03/4616030ae791adaa99b318a0f54f2ded.jpg',
    taunt: `Your downfall is already planned.`,
  },
  {
    id: 7,
    name: 'Hephaestus',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1LpcnYs0xoWFHsQHOTtRfKHwNy_12THb2cAnHbeUEmuCrWgNO',
    taunt: `I made your weapons. You can't use them against me!`,
  },
  {
    id: 8,
    name: 'Demeter',
    image: 'https://vignette.wikia.nocookie.net/dawn-of-gods/images/7/76/Demeter_Summon.jpg/revision/latest?cb=20160622151343',
    taunt: `Are you hungry for the grain of my disdain.`,
  },
]

module.exports = {
  getGreeks: (req, res) => {
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
  }, //this one is for hp=0
  swapOut: (req, res) => {
    let champ = []

    res.status(200).send(champ)
  },
}

