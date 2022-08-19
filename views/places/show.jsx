const React = require('react')
const Def= require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <p>Rating:</p>
                <img src={data.place.pic} alt={data.place.name}></img>
                <h2>Info</h2>
                <p>Location: {data.place.city}, {data.place.state}
                <br></br>
                Cuisine: {data.place.cuisines}
                </p>
                <h2>Comments</h2>
                <p>No comments yet!</p>
                <a href="" className="btn btn-warning">
                    Edit
                </a>
                <form>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show