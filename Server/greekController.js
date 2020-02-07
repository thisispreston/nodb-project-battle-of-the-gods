let champ = []

const greeks = [
  {
    id: 1,
    name: 'Zeus',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fswordsandarmor.files.wordpress.com%2F2010%2F04%2Fzeus-greek-gods.jpg%3Fw%3D529&f=1&nofb=1',
    taunt: 'The sky is my domain!',
  },
  {
    id: 2,
    name: 'Ares',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmythologian.net%2Fwp-content%2Fuploads%2F2012%2F08%2Fares.jpg&f=1&nofb=1',
    taunt: 'I invented war.',
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
}

