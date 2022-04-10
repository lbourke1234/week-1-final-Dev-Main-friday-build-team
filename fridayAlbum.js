let albumContainer = document.querySelector('.album-container')
// console.log(albumContainer)
let imgNode = albumContainer.querySelector('img')
// console.log(imgNode)
let albumName = albumContainer.querySelector('h1')
let artistName = albumContainer.querySelector('p')
// console.log(artistName.innerText)
let urlParams = new URLSearchParams(window.location.search)

window.onload = () => {
    getURLData()
    changeTrackNames()
}

const getURLData = () => {
    
    let imgParam = urlParams.get('image')
    let artistNameParam = urlParams.get('artist name')
    let albumNameParam = urlParams.get('album name')
    imgNode.src = imgParam
    albumName.innerText = albumNameParam
    artistName.innerText = artistNameParam
}
const changeTrackNames = () => {
    let trackListDiv = document.querySelector('#album-track-list-friday')
    trackListDiv.innerHTML = ''
    // console.log(trackListDiv)
    let artistNameParam = urlParams.get('artist name')
    let albumNameParam = urlParams.get('album name')

    let albumID = urlParams.get('album ID')
    // console.log(album)
    fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + albumID)
    .then(res => res.json())
    .then(body => {
        // console.log(body.tracks.data)
        body.tracks.data.forEach((track, index) => {
            console.log(track)
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