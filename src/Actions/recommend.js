import {GET_RECOMMENDATIONS} from './types';
import axios from 'axios'

export const getRecommendations = (selected) => async dispatch => {

    let recommendations = [];
    for(let i = 0 ; i < selected.movies.length; i++){
       
        let result = await axios(`https://api.themoviedb.org/3/movie/${selected.movies[i]}/recommendations?api_key=c128d2e9dac603a95143f47ee37c23ed&language=en-US&page=1`);
         console.log("1");
        let max = 10;
        if(result.data.results.length < 10){
            max = result.data.results.length
        }
        for(let j = 0 ; j < max ; j++){
            recommendations.push(result.data.results[j])
        }
        //recommendations.push(result.results.filter( (item,index) => index < 10 )
    }
    
    
    dispatch(
        {
            type: GET_RECOMMENDATIONS, 
            payload: recommendations
        }
    )
}