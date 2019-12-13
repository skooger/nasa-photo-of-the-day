import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const axios = require('axios').default;



const StyledDate = styled.p`
color: white;
font-size: 4 rem;
background-color: rgb(105,105,105, .8);
padding: 1%;
margin-bottom: 30%;
margin-top: -10px;
top: 0;


`;

const StyledH1 = styled.h1`
color: white;

`;

const StyledH2 = styled.h2`
color: white;
padding: 3%;

`;

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const StyledInfo = styled.div`
background-color: rgb(105,105,105, .8);


`;

  const Hero = () =>{
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [explanation, setExplanation] = useState();
    const [url, setUrl] = useState();
    const [query, setQuery] = useState("react");
    const StyledHeader = styled.header`
          width: 100%;
          min-height: 900px;
          background-image: url(${url});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;

          `;

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(function(res){
        setTitle(res.data.title)
        setDate(res.data.date)
        setExplanation(res.data.explanation)
        setUrl(res.data.url)
      }
         
      );

    }, []);

    return (
  
      <StyledHeader className = "hero-container"> 
        <StyledContainer className = "info-container">
          <StyledDate> {date} </StyledDate>
          <StyledInfo> 
            <StyledH1> {title} </StyledH1>
            <StyledH2> {explanation} </StyledH2>
          </StyledInfo>
          
        </StyledContainer>
      
      </StyledHeader>
  
    );
  
  };
  export default Hero;
