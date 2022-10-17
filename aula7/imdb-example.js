import fetch from 'node-fetch'

const key = "" //Enter API key

function imdbTrailer(){
    return fetch(`https://imdb-api.com/API/YouTubeTrailer/${key}/tt0111161`)
        .then(response => { 
            console.log(response.status)
            //return response.text()
            return response.json()
        })
        //.then(text => JSON.parse(text))
        
}

function imdbTrailerPromiseResolve(){
    return Promise.resolve( {
        imDbId: 'tt0111161',
        title: 'The Shawshank Redemption',
        fullTitle: 'The Shawshank Redemption (1994)',
        type: 'Movie',
        year: '1994',
        videoId: 'K_tLp7T6U1c',
        videoUrl: 'https://www.youtube.com/watch?v=K_tLp7T6U1c',
        errorMessage: ''
      })
}

async function imdbTrailerAsyncAwait(){
    return  {
        imDbId: 'tt0111161',
        title: 'The Shawshank Redemption',
        fullTitle: 'The Shawshank Redemption (1994)',
        type: 'Movie',
        year: '1994',
        videoId: 'K_tLp7T6U1c',
        videoUrl: 'https://www.youtube.com/watch?v=K_tLp7T6U1c',
        errorMessage: ''
      }
} 

/*function main(){
    imdbTrailer()
        .then(trailer => console.log(trailer))
        .catch(err => console.log("Error", err))
}*/

async function main(){
    try{
        const trailer = await imdbTrailer()
        console.log(trailer)
    }catch(err){
        console.log("Error", err)
    }

}

main()