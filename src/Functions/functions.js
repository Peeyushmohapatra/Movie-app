export async function popular(dispatch){

    let arr = []
    const apiP1 = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=60265919315023ca09d63e81212e9157&page=1");
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)


    const apiP2 = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=60265919315023ca09d63e81212e9157&page=2");
    const response2 = await apiP2.text();
    const jsonData2 = JSON.parse(response2)
    
    arr = [...jsonData1.results,...jsonData2.results];


    dispatch({
        type:"popular",
        data:arr
    })
}


export async function topRated(dispatch){

    let arr = []
    const apiP1 = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=60265919315023ca09d63e81212e9157&page=1");
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)


    const apiP2 = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=60265919315023ca09d63e81212e9157&page=2");
    const response2 = await apiP2.text();
    const jsonData2 = JSON.parse(response2)
    
    arr = [...jsonData1.results,...jsonData2.results];


    dispatch({
        type:"top_rated",
        data:arr
    })
}


export async function upComing(dispatch){

    let arr = []
    const apiP1 = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=60265919315023ca09d63e81212e9157&page=1");
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)


    const apiP2 = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=60265919315023ca09d63e81212e9157&page=2");
    const response2 = await apiP2.text();
    const jsonData2 = JSON.parse(response2)
    
    arr = [...jsonData1.results,...jsonData2.results];


    dispatch({
        type:"upcoming",
        data:arr
    })
}


export async function trending(dispatch){

    let arr = []
    const apiP1 = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=60265919315023ca09d63e81212e9157&page=1");
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)


    const apiP2 = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=60265919315023ca09d63e81212e9157&page=2");
    const response2 = await apiP2.text();
    const jsonData2 = JSON.parse(response2)
    
    arr = [...jsonData1.results,...jsonData2.results];


    dispatch({
        type:"trending",
        data:arr
    })
}

export async function comedy(dispatch){
    let arr = []

    const apiP1 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=60265919315023ca09d63e81212e9157&query=comedy&page=1");
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)

    const apiP2 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=60265919315023ca09d63e81212e9157&query=comedy&page=2");
    const response2 = await apiP2.text();
    const jsonData2 = JSON.parse(response2)

    arr = [...jsonData1.results,...jsonData2.results];

    dispatch({
        type:"comedy",
        data:arr
    })
}


export async function action(dispatch){

    let arr = []
    const apiP1 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=60265919315023ca09d63e81212e9157&query=action&page=1");
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)

    const apiP2 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=60265919315023ca09d63e81212e9157&query=action&page=2");
    const response2 = await apiP2.text();
    const jsonData2 = JSON.parse(response2)

    arr = [...jsonData1.results,...jsonData2.results];
    dispatch({
        type:"action",
        data:arr
    })
}
export async function horror(dispatch){

    let arr = []
    const apiP1 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=60265919315023ca09d63e81212e9157&query=horror&page=1");
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)

    const apiP2 = await fetch("https://api.themoviedb.org/3/search/movie?api_key=60265919315023ca09d63e81212e9157&query=horror&page=2");
    const response2 = await apiP2.text();
    const jsonData2 = JSON.parse(response2)

    arr = [...jsonData1.results,...jsonData2.results];
    dispatch({
        type:"horror",
        data:arr
    })
}


export async function movieDetails(id,setMovie){
    const apicall = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`);
    const response = await apicall.json();
    console.log(response);
    console.log();
    setMovie(response);
}  

export async function credits(id,dispatch){

    const apiP1 = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&cast=10`);
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)
    dispatch({
        type:"cast",
        data:jsonData1.cast
    })
}

export async function trailer(id,dispatch){

    let arr = []
    const apiP1 = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=60265919315023ca09d63e81212e9157`);
    const response1 = await apiP1.text();
    const jsonData1 = JSON.parse(response1)
    console.log(jsonData1);
    let n = jsonData1.results.length
    // console.log(n);
    // console.log(jsonData1.results[0].key);
    // console.log(n);
    // console.log(movieTrailer);
    // console.log(jsonData1[0]);
    if (n === 0) {
        return
    }
    // console.log(jsonData1.length,"Hello");
    dispatch({
        type:"video-key",
        data:jsonData1.results[n-1].key
    })
    // console.log(movieTrailer[0].key);
}

export function search(dispatch,input,all){
    const movieArr = [];

    

    const movie = all.filter((movies) => {
        if((movies.title.toLowerCase()).includes(input.toLowerCase())){
            return movies
        }
    });

    for(let i=0; i<movie.length; i++){
        if(movieArr.length === 0){
            movieArr.push(movie[i]);
        }
        else {
            if(checkDuplicate(movie[i],movieArr)){
                movieArr.push(movie[i])
            }
        }
    }

    dispatch({
        type:"search_movie",
        data:movieArr
    })
}


function checkDuplicate(movie,movieArr){
    for(let i=0; i<movieArr.length; i++){
        if(movieArr[i].id === movie.id){
            return false
        }
    }
    return true
}