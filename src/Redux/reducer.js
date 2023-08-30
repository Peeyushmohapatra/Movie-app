export function reducer (state={all:[],popular:[],topRated:[],upcoming:[],trending:[],cast:[],videoKey:"",search:[],comedy:[],action:[],horror:[]}, action) {
    if(action.type === "popular"){
        return {
            ...state,
            all:[...state.all,...action.data],
            popular:action.data
        }
    }
    else if(action.type === "top_rated"){
        return {
            ...state,
            all:[...state.all,...action.data],
            topRated:action.data
        }
    }
    else if(action.type === "upcoming"){
        return {
            ...state,
            all:[...state.all,...action.data],
            upcoming:action.data
        }
    }
    else if(action.type === "trending"){
        return {
            ...state,
            all:[...state.all,...action.data],
            trending:action.data
        }
    }
    else if(action.type === "comedy"){
        return {
            ...state,
            comedy:action.data
        }
    }
    else if(action.type === "action"){
        return {
            ...state,
            action:action.data
        }
    }
    else if(action.type === "horror"){
        return {
            ...state,
            horror:action.data
        }
    }
    else if(action.type === "cast"){
        return {
            ...state,
            cast:action.data
        }
    }
    else if(action.type === "video-key"){
        return {
            ...state,
            videoKey:action.data
        }
    }
    else if(action.type === "search_movie"){
        return {
            ...state,
            search:action.data
        }
    }
    return state
}