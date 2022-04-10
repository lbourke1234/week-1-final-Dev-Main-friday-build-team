// global variables
let albumContainer = document.querySelector('.album-container')
let currentImg = albumContainer.querySelector('img')
let currentAlbum = albumContainer.querySelector('h1')
let currentArtist = albumContainer.querySelector('p')
let urlParams = new URLSearchParams(window.location.search)

window.onload = () => {
    changeJumbotronData()
    changeTrackNames()
}

const changeJumbotronData = () => {
    
    let clickedImg = urlParams.get('image')
    let clickedArtist = urlParams.get('artist name')
    let clickedAlbum = urlParams.get('album name')
    currentImg.src = clickedImg
    currentAlbum.innerText = clickedAlbum
    currentArtist.innerText = clickedArtist
}
const changeTrackNames = () => {
    let trackListDiv = document.querySelector('#album-track-list-friday')
    trackListDiv.innerHTML = ''
    let clickedAlbumID = urlParams.get('album ID')
    fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + clickedAlbumID)
    .then(res => res.json())
    .then(body => {
        let tracks = body.tracks.data
        tracks.forEach((track, index) => {
        index += 1
        trackListDiv.innerHTML +=   `<div class="ml-3 pb-4">
                                        <span class="track-num">${index}.</span>
                                        <span class="album-song ml-4"
                                            ><strong
                                                class="track-decoration"
                                                >${track.title}</strong
                                            ><br /><span class="singer-name"
                                                >${track.artist.name}</span
                                            ></span
                                        >
                                    </div>
                                    `
        });
    })
}
