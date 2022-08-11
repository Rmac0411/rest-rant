const React = require('react')
const Def = require('./default')

function error404 (){
   return(
    <Def>
        <main>
            <h1> 404: PAGE NOT FOUND</h1>
            <p> Oops! Sorry we can't seem to find this page! </p>
            <div>
                <img src="/images/not_found.jpg" alt="cat not found" />
                <div>
                Photo by <a href="https://unsplash.com/@centelm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clément Falize</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                </div>
            </div>
        </main>
    </Def>
   ) 
}

module.exports = error404