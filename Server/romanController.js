let champ = []

const romans = [
  {
    id: 1,
    name: 'Jupiter',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/jupitermain-1.jpg',
    taunt: `Feel the thunder!`,
  },
  {
    id: 2,
    name: 'Neptune',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/neptunemain.jpg',
    taunt: `The seven seas belong to me!`,
  },
  {
    id: 3,
    name: 'Mars',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/marsmain.jpg',
    taunt: `I have a nice axe.`,
  },
  {
    id: 4,
    name: 'Diana',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/dianamain.jpg',
    taunt: `If we burn, you burn with us!`,
  },
  {
    id: 5,
    name: 'Ceres',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/ceresmain.jpg',
    taunt: `Dung happens; plant something in it.`,
  },
  {
    id: 6,
    name: 'Apollo',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/apollomain.jpg',
    taunt: `I see all under the sun.`,
  },
  {
    id: 7,
    name: 'Juno',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/junomain.jpg',
    taunt: `Girl power!`,
  },
  {
    id: 8,
    name: 'Mercury',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/mercurymain.jpg',
    taunt: `You fell for my trap.`,
  },
]

module.exports = {
  getRomans: (req, res) => {
    if (req.query.name) {
      let filteredGods = romans.filter(el => {
          return el.name === req.query.name
      })
      return res.status(200).send(filteredGods)
    }

    res.status(200).send(romans)
  },
  selectChamp: (req, res) => {
    const { arg } = req.body
    champ.splice(0, 1, arg)

    res.status(200).send(champ[0])
  },
  editTaunt: (req, res) => {
    const { id } = req.params
    const { newTaunt } = req.body
    
    const index = romans.findIndex( e => {
      return e.id === +id
    })

    romans[index].taunt = newTaunt

    res.status(200).send(romans)
  },
  removeChamp: (req, res) => {
    const { id } = req.params

    const index = romans.findIndex( e => {
      return e.id === +id
    })

    romans.splice(index, 1)

    res.status(200).send(romans)
  }, //this one is for hp=0
  swapOut: (req, res) => {
    let champ = []

    res.status(200).send(champ)
  },
}

