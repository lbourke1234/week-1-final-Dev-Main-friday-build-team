// suggestion from Aron 
    // arrayOfSongs = Promise.All(artists.forEach(artist => fetchSongs(artist.name)))
    // renderSongs(arrayOfSongs)

// global variables

let artists = [
    'metallica',
    'lana del rey',
    'alter bridge',
    'eminem',
    'tupac',
    'biggie smalls',
    'opeth',
    'joe bonamassa'
]

let rowNode = document.querySelector('.friday-row')
rowNode.innerHTML = ''

window.onload = () => {
    renderCards()
}

const fetchArtists = (artist) => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist)
    .then(res => res.json())
    .then(body => {
        createNewCard(body.data[0], body.data)
    })
}

const renderCards = () => {
    artists.forEach(artist => fetchArtists(artist))
}                   

const createNewCard = (body) => {
    rowNode.innerHTML += `
                        <div class="col">
                            <div id=${body.album.id}  class="card second-section-card">
                                <img src="${body.album.cover}" class="card-img-top img-second-section" onclick="goToArtistPage(event)" alt="...">
                                <div class="card-body card-body-section2">
                                    <h5 class="card-title">${body.album.title}</h5>
                                    <p class="card-text">${body.artist.name}</p>
                                </div>
                            </div>
                        </div>
                        `
}

const goToArtistPage = (event) => {
    let urlParams = new URLSearchParams()
    let cardNode = event.target.parentNode
    urlParams.set('artist name', cardNode.querySelector('p').innerText)
    urlParams.set('album name', cardNode.querySelector('h5').innerText)
    urlParams.set('image', event.target.src)
    urlParams.set('album ID', cardNode.id)
    location.href = 'albumPage.html?' + urlParams.toString()
}


