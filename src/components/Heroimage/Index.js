import React from "react";

import {Wrapper,Content,Text} from './Heroimage.style'

const HeroImage = ({ image, title, text }) => {
    debugger;
    //  console.log(image);
    return (
    
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>

        </Wrapper>
    )
};





export default HeroImage;


