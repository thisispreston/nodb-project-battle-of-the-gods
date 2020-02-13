let champ = []

const romans = [
  {
    id: 1,
    name: 'Jupiter',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/jupitermain-1.jpg',
    taunt: `Feel the thunder!`,
    hp: 250,
    attack: 50,
    defense: 40,
    heal: 20,
  },
  {
    id: 2,
    name: 'Neptune',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/neptunemain.jpg',
    taunt: `The seven seas belong to me!`,
    hp: 230,
    attack: 55,
    defense: 35,
    heal: 20,
  },
  {
    id: 3,
    name: 'Mars',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/marsmain.jpg',
    taunt: `I have a nice axe.`,
    hp: 290,
    attack: 50,
    defense: 40,
    heal: 20,
  },
  {
    id: 4,
    name: 'Diana',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/dianamain.jpg',
    taunt: `If we burn, you burn with us!`,
    hp: 200,
    attack: 45,
    defense: 50,
    heal: 30,
  },
  {
    id: 5,
    name: 'Ceres',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/ceresmain.jpg',
    taunt: `Dung happens; plant something in it.`,
    hp: 175,
    attack: 20,
    defense: 25,
    heal: 65,
  },
  {
    id: 6,
    name: 'Hyperion',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/apollomain.jpg',
    taunt: `I see all under the sun.`,
    hp: 210,
    attack: 65,
    defense: 15,
    heal: 10,
  },
  {
    id: 7,
    name: 'Juno',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/junomain.jpg',
    taunt: `Girl power!`,
    hp: 210,
    attack: 30,
    defense: 30,
    heal: 45,
  },
  {
    id: 8,
    name: 'Mercury',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/mercurymain.jpg',
    taunt: `You fell for my trap.`,
    hp: 215,
    attack: 35,
    defense: 20,
    heal: 30,
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
  }, 
  swapOut: (req, res) => {
    let champ = []

    res.status(200).send(champ)
  },
  getAttacked: (req, res) => {
    const { id } = req.params
    const { atk } = req.body

    const index = romans.findIndex( e => {
      return e.id === +id
    })

    romans[index].hp -= Number(atk) * (1 - (romans[index].defense / 100))

    // USE THIS ON FRONT END
    if (romans[index].hp < 0) {
      champ.splice(0, 1, {
        id: 9,
        name: 'Pluto',
        image: 'https://as1.ftcdn.net/jpg/01/65/54/04/500_F_165540497_cFwiLdFRG1QAkiUWfdgP7dMyXxVSfNH8.jpg',
        taunt: `Welcome to the underworld`,
      })
      romans.splice(index, 1)
    }

    res.status(200).send(romans)
  }
}

