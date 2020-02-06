const greeks = [
  {
    id:1,
    name: 'Zeus',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fswordsandarmor.files.wordpress.com%2F2010%2F04%2Fzeus-greek-gods.jpg%3Fw%3D529&f=1&nofb=1'
  },
  {
    id: 2,
    name: 'Ares',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmythologian.net%2Fwp-content%2Fuploads%2F2012%2F08%2Fares.jpg&f=1&nofb=1'
  }
]

const romans = [
  {
    id: 1,
    name: 'Jupiter'
  },
  {
    id: 2,
    name: 'Mars'
  }
]

module.exports = {
  getGreeks: (req, res) => {
    res.status(200).send(greeks)
  },
  getRomans: (req, res) => {
    res.status(200).send(romans)
  }
}

