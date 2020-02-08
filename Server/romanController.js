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
    const { arg } = req.body
    
    const index = romans.findIndex( e => {
      return e.id === +id
    })

    romans[index].taunt = arg

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

