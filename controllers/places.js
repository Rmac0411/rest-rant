const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name: 'Itadaki Ramen',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Ramen, Japanese',
        pic: '/images/ramen.jpg'
      }, {
        name: 'BBQ Boys',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'American, BBQ',
        pic: '/images/bbq.jpg'
      }]
      
    res.render('places/index', { places })
})

module.exports = router