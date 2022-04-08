let bodyInfo = []

const artists = [
    'metallica',
    'behemoth',
    'ed sheeran',
    'britney spears',
    'james brown',
    'tupac',
    'biggie smalls',
    'alter bridge'
]

window.onload = () => {
    // fetchAlbumByID()
    renderCards()
}

const fetchAlbumByID = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
    .then(res => res.json())
    .then(body => {
        bodyInfo = body
        console.log(body)
    })
}

// const findIDinAPI = (id) => {
//     // if (id === )
//     fetch()
// }

const renderCards = () => {

    let rowNode = document.querySelector('.friday-row')
    
    artists.forEach(query => {

    fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + query)
    .then(res => res.json())
    .then(body => {
        rowNode.innerHTML = ''
        console.log(body)

        
        // rowNode.classList.add('second-section-card')


        // let colNode = document.createElement('div')
        // colNode.classList.add('col')

        rowNode.innerHTML += `<div id="${body.id}" class="col">
                                <div class="card second-section-card">
                                    <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                    <div class="card-body card-body-section2">
                                    <a href="./artist.html?picId=${body.id}"><h5 class="card-title">${body.title}</h5></a>
                                        <p class="card-text" >${body.artist.name}</p>
                                    </div>
                                </div>
                            </div>
                            `
    })
                     
}



// const clickAlbum = (id) => {
//     fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
//     .then(res => res.json())
//     .then(body => {
//         location.href = "artist.html"
//         console.log(body)



//         let artistText = document.querySelector('.jumbotron h1')
//         console.log(artistText.innerText)


//     })
// }

