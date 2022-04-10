let jumbotronNode = document.querySelector('.jumbotron')
let artistNode = jumbotronNode.querySelector('h1')

// console.log(artistNode.innerText)
window.onload = () => {
    // getData()
}

const getData = () => {
    let urlData = new URLSearchParams(window.location.search)
    let artistName = urlData.get('artist name')
    let artistText = jumbotronNode.querySelector('h1')
    artistText.innerText = artistName
    let img = urlData.get('image')
    console.log(img)
    jumbotronNode.setAttribute('style', 'background-image: url(' + img + ')')
    let albumID = urlData.get('album ID')
    fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + albumID)
    .then(res => res.json())
    .then(body => {
        let tBody = document.querySelector('tbody')
        tBody.innerHTML = ''
        body.tracks.data.forEach((track, index) => {
            index += 1
            let r1 = Math.floor(Math.random(10) * 99)
            let r2 = Math.floor(Math.random(100) * 999)
            let r3 = Math.floor(Math.random(100) * 999)
            let length = track.duration

            let res1 = length - (length % 60)
            console.log(res1)
            let res2 = res1 / 60
            console.log(res2)
            let res3 = length % 60


            


            tBody.innerHTML += `
                            <tr>
                              <th scope="row">${index}</th>
                              <td>
                                <img
                                  src="${img}"
                                  alt="Album cover"
                                  class="table-cover-picture mr-2"
                                />
                                <span>${track.title}</span>
                              </td>
                              <td>${r1 + ',' + r2 + ',' + r3}</td>
                              <td>${res2 + ':' + res3}</td>
                              <td>
                                <div
                                  class="popup"
                                  onclick="addSongToLikedAlbum()"
                                  onclick="heartFilledFunction()"
                                >
                                  <i class="bi bi-heart heart-table">
                                    <i class="bi bi-suit-heart-fill heart-filled"></i>
                                    <span class="popuptext myPopup">
                                      Added to your Liked Songs
                                    </span>
                                  </i>
                                </div>
                              </td>
                            </tr>`
            })
        })
    
}

const addNewSongtoTable = (track) => {
    
}

{}