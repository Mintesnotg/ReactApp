import React,{useState,useEffect,useRef} from 'react';
import Api from '../src/API'

const intialstate={
    page:0,
    results:[],
    total_pages:0,
    total_results:0
}

export const useHomeFetch=()=>{
    debugger;
    const [state, setstate] = useState(intialstate);
    const [load, setloading] = useState(false);
    const [error, seterror] = useState(false);
    
    const fetchmovies = async (page,searchtearm="")=>{
          
    try {
        seterror(false);
        setloading(true);
        const movies = await Api.fetchMovies(searchtearm,page);
        // console.log(movies);
        setstate(prev=>({
           ...movies,results:page>1?[...prev.results,...movies.results]:[...movies.results]
           
        }));
    } catch (error) {
        seterror(true)
    }

    }

    useEffect(()=>{
        // debugger;
    

        fetchmovies(1);
        //   console.log(result);
        setloading(false);
    }, [])

    return {state,load,error}
    // console.log(state); // it runs once while the page is loads //mounts

}
