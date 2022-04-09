// global variables
let bodyInfo = []

let artists = [
    'metallica',
    'ed sheeran',
    'alter bridge',
    'eminem',
    'tupac',
    'biggie smalls',
    'opeth',
    'joe bonamassa'
]

let rowNode = document.querySelector('.friday-row')
rowNode.innerHTML = ''

// arrayOfSongs = Promise.All(artists.forEach(artist => fetchSongs(artist.name)))
// renderSongs(arrayOfSongs)

window.onload = () => {
    renderCards()
}

const fetchArtists = (artist) => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist)
    .then(res => res.json())
    .then(body => {
        // console.log(body.data[0].album.title)
        createNewCard(body.data[0], body.data)
    })
}

const renderCards = () => {
    artists.forEach(artist => fetchArtists(artist))
}                   

const createNewCard = (body) => {
    let cardNode = document.createElement('div')
    console.log(body)
    cardNode.innerHTML += `
                        <div class="col">
                            <div class="card second-section-card">
                                <img src="${body.album.cover}" class="card-img-top img-second-section" alt="...">
                                <div class="card-body card-body-section2">
                                    <h5 class="card-title">${body.album.title}</h5>
                                    <p class="card-text">${body.artist.name}</p>
                                </div>
                            </div>
                        </div>
                        `
    appendCardToRow(cardNode.innerHTML)
}

const appendCardToRow = (card) => {
    rowNode.innerHTML += card
    // console.log(rowNode)
}