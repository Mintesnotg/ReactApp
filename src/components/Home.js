import React from "react";
import { Form } from "react-bootstrap";

import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../../src/config'

import { useState,useEffect } from "react";
import { useHomeFetch } from "../useHomeFetch";
import HeroImage from './Heroimage/Index';



const Home = () => {
    debugger;
    // console.log('HeroImage', HeroImage);

    debugger;
    const { state, load, error } = useHomeFetch();
    // console.log(state);

    return (

        <>
        

            {state.results[0] ? <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[2].backdrop_path}`}
                title={state.results[2].original_title}
                text={state.results[2].overview} /> : null}
        </>

        
        

    )
     
 
   
}

export default Home;

