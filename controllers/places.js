const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name: 'Itadaki Ramen',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Ramen, Japanese',
        pic: '/images/ramen.jpg'
      }, {
        name: 'City Boys BBQ',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'American, BBQ',
        pic: '/images/bbq.jpg'
      }]
      
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})
module.exports = router