const db = require('../models')

db.Place.create([{
    name: 'Itadaki Ramen',
    city: 'San Diego',
    state: 'CA',
    cuisines: 'Ramen, Japanese',
    pic: '/images/ramen.jpg',
    founded: 1994
}, {
    name: 'City Boys BBQ',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'BBQ, American',
    pic: '/images/bbq.jpg',
    founded: 2011
}
])

.then( () => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})