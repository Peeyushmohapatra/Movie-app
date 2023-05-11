export const reducer = (state={all:[],popular:[],top_rated:[],upcoming:[],trending:[],cast:[],key:"",searchMovie:[],movieName:""},action) => {
    if(action.type === "popular"){
        return {
            ...state,
            popular:action.data,
            all:[...state.all,...action.data]
        }
    }

    else if(action.type === "top_rated"){
        return {
            ...state,
            top_rated:action.data,
            all:[...state.all,...action.data]
        }
    }
    else if(action.type === "upcoming"){
        return {
            ...state,
            upcoming:action.data,
            all:[...state.all,...action.data]
        }
    }
    else if(action.type === "trending"){
        return {
            ...state,
            trending:action.data,
            all:[...state.all,...action.data]
        }
    }
    else if(action.type === "cast"){
        return {
            ...state,
            cast:action.data,
        }
    }
    else if(action.type === "video-key"){
        // console.log(action.data,"KEEEEEEEEEEEEEEEYYYYYYYYYYYYYYY");
        return {
            ...state,
            key:action.data,
        }
    }

    else if(action.type === "search-data"){
        console.log(action.data,"data");
        return {
            ...state,
            searchMovie:action.data,
        }
    }

    else if(action.type === "movie-name"){
        console.log(action.data,"data");
        return {
            ...state,
            movieName:action.data,
        }
    }
    return state
}