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
}

