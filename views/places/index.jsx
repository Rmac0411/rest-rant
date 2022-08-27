const React = require('react')
const Def = require('./../default')

function index (data){
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>
                   <a href={`/places/${place.id}`} >
                    {place.name}
                   </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>PLACES</h1>
                <div className="row">
                    <div className="col-sm-6">
                        {placesFormatted}
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = index