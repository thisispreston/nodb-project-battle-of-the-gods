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
    name: 'Mars',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/marsmain.jpg',
    taunt: `I have a nice axe.`,
  },
  {
    id: 3,
    name: 'Diana',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/dianamain.jpg',
    taunt: `If we burn, you burn with us!`,
  },
  {
    id: 4,
    name: 'Ceres',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/ceresmain.jpg',
    taunt: `Dung happens; plant something in it.`,
  },
  {
    id: 5,
    name: 'Apollo',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/apollomain.jpg',
    taunt: `I see all under the sun.`,
  },
  {
    id: 6,
    name: 'Juno',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/junomain.jpg',
    taunt: `Girl power!`,
  },
]

module.exports = {
  getRomans: (req, res) => {
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

