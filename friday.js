let bodyInfo = []

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
    fetch('https://striveschool-api.herokuapp.com/api/deezer/album/91598612')
    .then(res => res.json())
    .then(body => {
        console.log("0")

        let rowNode = document.querySelector('.friday-row')
        rowNode.innerHTML = ''
        // rowNode.classList.add('second-section-card')


        // let colNode = document.createElement('div')
        // colNode.classList.add('col')

        rowNode.innerHTML += `<div id="${body.id}" class="col">
                                <div class="card second-section-card" onclick="clickAlbum(${body.id})">
                                    <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                    <div class="card-body card-body-section2">
                                        <h5 class="card-title">${body.title}</h5>
                                        <p class="card-text" >${body.artist.name}</p>
                                    </div>
                                </div>
                            </div>
                            `
    })
        fetch('https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
        .then(res => res.json())
        .then(body => {
            console.log("1")
            let rowNode = document.querySelector('.friday-row')
            rowNode.innerHTML += `<div id="${body.id}" class="col" onclick="clickAlbum(${body.id})">
                                    <div class="card second-section-card" onclick="">
                                        <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                        <div class="card-body card-body-section2">
                                            <h5 class="card-title">${body.title}</h5>
                                            <p class="card-text">${body.artist.name}</p>
                                        </div>
                                    </div>
                                </div>
                                `
                            
        })

        fetch('https://striveschool-api.herokuapp.com/api/deezer/album/303424377')
        .then(res => res.json())
        .then(body => {
            console.log("2")
            let rowNode = document.querySelector('.friday-row')
            rowNode.innerHTML += `<div id="${body.id}" class="col">
                                    <div class="card second-section-card" onclick="clickAlbum(${body.id})">
                                        <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                        <div class="card-body card-body-section2">
                                            <h5 class="card-title">${body.title}</h5>
                                            <p class="card-text">${body.artist.name}</p>
                                        </div>
                                    </div>
                                </div>
                                `
                            
        })

        fetch('https://striveschool-api.herokuapp.com/api/deezer/album/6157080')
        .then(res => res.json())
        .then(body => {
            console.log("3")

            let rowNode = document.querySelector('.friday-row')
            rowNode.innerHTML += `<div id="${body.id}" class="col">
                                    <div class="card second-section-card" onclick="clickAlbum(${body.id})">
                                        <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                        <div class="card-body card-body-section2">
                                            <h5 class="card-title">${body.title}</h5>
                                            <p class="card-text">${body.artist.name}</p>
                                        </div>
                                    </div>
                                </div>
                                `
                            
        })
        fetch('https://striveschool-api.herokuapp.com/api/deezer/album/103202392')
        .then(res => res.json())
        .then(body => {
            console.log("3")

            let rowNode = document.querySelector('.friday-row')
            rowNode.innerHTML += `<div id="${body.id}" class="col">
                                    <div class="card second-section-card" onclick="clickAlbum(${body.id})">
                                        <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                        <div class="card-body card-body-section2">
                                            <h5 class="card-title">${body.title}</h5>
                                            <p class="card-text">${body.artist.name}</p>
                                        </div>
                                    </div>
                                </div>
                                `
                            
        })
        fetch('https://striveschool-api.herokuapp.com/api/deezer/album/252280202')
        .then(res => res.json())
        .then(body => {
            console.log("3")

            let rowNode = document.querySelector('.friday-row')
            rowNode.innerHTML += `<div id="${body.id}" class="col">
                                    <div class="card second-section-card" onclick="clickAlbum(${body.id})">
                                        <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                        <div class="card-body card-body-section2">
                                            <h5 class="card-title">${body.title}</h5>
                                            <p class="card-text">${body.artist.name}</p>
                                        </div>
                                    </div>
                                </div>
                                `
                            
        })
        fetch('https://striveschool-api.herokuapp.com/api/deezer/album/88435752')
        .then(res => res.json())
        .then(body => {
            console.log("3")

            let rowNode = document.querySelector('.friday-row')
            rowNode.innerHTML += `<div id="${body.id}" class="col">
                                    <div class="card second-section-card" onclick="clickAlbum(${body.id})">
                                        <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                        <div class="card-body card-body-section2">
                                            <h5 class="card-title">${body.title}</h5>
                                            <p class="card-text">${body.artist.name}</p>
                                        </div>
                                    </div>
                                </div>
                                `
                            
        })
        fetch('https://striveschool-api.herokuapp.com/api/deezer/album/8015622')
        .then(res => res.json())
        .then(body => {
            console.log("3")

            let rowNode = document.querySelector('.friday-row')
            rowNode.innerHTML += `<div id="${body.id}" class="col">
                                    <div class="card second-section-card" onclick="clickAlbum(${body.id})">
                                        <img src="${body.cover}" class="card-img-top img-second-section" alt="...">
                                        <div class="card-body card-body-section2">
                                            <h5 class="card-title">${body.title}</h5>
                                            <p class="card-text">${body.artist.name}</p>
                                        </div>
                                    </div>
                                </div>
                                `
                            
        })

                      
}



const clickAlbum = (id) => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
    .then(res => res.json())
    .then(body => {
        // location.href = "artist.html"
        console.log(body)

        let artistText = document.querySelector('.jumbotron h1')
        console.log(artistText)


    })
}

