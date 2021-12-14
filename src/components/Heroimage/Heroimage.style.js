import styled from "styled-components";

export const Wrapper = styled.div`

background:linear-gradient(
    to bottom ,rgba(0,0,0,0)
    41%,rgba(0,0,0,0.65) 100%,
    
);
background-image:url(${props => props.image});

background-size: 100%,cover;
background-position:center;
height:600px;
position:relative;
animation:animateImage 1s;
@keyframes animateImage {
    form{
        opacity:0;
    }
    to {
        opacity:1;
    }
}
`;

export const Content = styled.div`
 padding:20px; 
  max-width:var(--maxWidth); 
 margin:0 auto;
`;

export const Text = styled.div`
 z-index:100;
 max-width:700px;
 position:absolute;
 bottom:75px;
 margin-right: 20px;
 max-height: 100px;
`;