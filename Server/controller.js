const greeks = [
  {
    id: 1,
    name: 'Zeus',
    image: 'https://www.gods-and-goddesses.com/wp-content/uploads/2019/11/jupitermain-1.jpg',
  },
  {
    id: 2,
    name: 'Ares',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyUK8Nxv50w1v4zaDemkY4HegNbu7Uvcu8QIc_1KhfuaqwgLpZ',
  },
]

const romans = [
  {
    id: 1,
    name: 'Jupiter',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fswordsandarmor.files.wordpress.com%2F2010%2F04%2Fzeus-greek-gods.jpg%3Fw%3D529&f=1&nofb=1',
  },
  {
    id: 2,
    name: 'Mars',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmythologian.net%2Fwp-content%2Fuploads%2F2012%2F08%2Fares.jpg&f=1&nofb=1',
  },
]

module.exports = {
  getGreeks: (req, res) => {
    res.status(200).send(greeks)
  },
  getRomans: (req, res) => {
    res.status(200).send(romans)
  }
}

