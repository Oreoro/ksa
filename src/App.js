import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScalingWrapper = styled.div`
transform: scale(1.0);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  align-items: flex-start; 
    @media (max-width: 768px) {
    flex-direction: column;
  } 
   

  
`;

const ColorfulBlock = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transtion: all 0.2s ease-in-out;
  box-sizing: border-box;
  &amp;:hover {
    transform: scale(1.1);
}
 @media (max-width: 768px) {
    width: auto;
    max-width: none;
}

`;

function App() {
  const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
  const initialColors = [
    { color: "#FFC857" }, { color: "#E9724C" }, { color: "#C5283D" }, { color: "#8D99AE" }, 
    { color: "#EDF2F4" },{ color: "#FF6F61" }, { color: "#6B5B95" }, { color: "#88B04B" }, { color: "#F7CAC9" }, 
    { color: "#2B2D42" }, { color: "#D4A5A5" } ,{ color: "#D4A5A5" } 
  ];

  const shuffleColors = (colors) => {
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
  };

  const [blocks1, setBlocks1] = useState([...initialColors]);
  const [blocks2, setBlocks2] = useState([...initialColors]);
  const [blocks3, setBlocks3] = useState([...initialColors]);
  const [blocks4, setBlocks4] = useState([...initialColors]);
  const [blocks5, setBlocks5] = useState([...initialColors]);
  const [blocks6, setBlocks6] = useState([...initialColors]);

  // adding more state for more rows

  useEffect(() => {
    const interval1 = setInterval(() => {
      setBlocks1(prevBlocks => shuffleColors([...prevBlocks]));
    }, 2200);

    const interval2 = setInterval(() => {
      setBlocks2(prevBlocks => shuffleColors([...prevBlocks]));
    }, 2015);


    const interval3 = setInterval(() => {
      setBlocks3(prevBlocks => shuffleColors([...prevBlocks]));
    }, 2100);

    const interval4 = setInterval(() => {
      setBlocks4(prevBlocks => shuffleColors([...prevBlocks]));
    }, 1950);

    const interval5 = setInterval(() => {
      setBlocks5(prevBlocks => shuffleColors([...prevBlocks]));
    }, 1960);
    const interval6 = setInterval(() => {
      setBlocks6(prevBlocks => shuffleColors([...prevBlocks]));
    }, 1950);


    // Add more intervals for more rows

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
      clearInterval(interval6);

      // Clear more intervals for more rows
    };
  }, []);

  return (
    <ScalingWrapper> 
    <div>
    <Container>
{blocks1.map((block, index) => (
  <ColorfulBlock 
    key={index} 
    color={block.color}
    onDoubleClick={(evt) => {
        evt.target.style.backgroundColor = randomColor();
    }}
  />
))}
</Container>
<Container>
{blocks2.map((block, index) => (
  <ColorfulBlock 
    key={index} 
    color={block.color}
    onDoubleClick={(evt) => {
        evt.target.style.backgroundColor = randomColor();
    }}
  />
))}
</Container>

<Container>
{blocks3.map((block, index) => (
  <ColorfulBlock 
    key={index} 
    color={block.color}
    onDoubleClick={(evt) => {
        evt.target.style.backgroundColor = randomColor();
    }}
  />
))}
</Container>

<Container>
{blocks4.map((block, index) => (
  <ColorfulBlock 
    key={index} 
    color={block.color}
    onDoubleClick={(evt) => {
        evt.target.style.backgroundColor = randomColor();
    }}
  />
))}
</Container>

<Container>
{blocks5.map((block, index) => (
  <ColorfulBlock 
    key={index} 
    color={block.color}
    onDoubleClick={(evt) => {
        evt.target.style.backgroundColor = randomColor();
    }}
  />
))}
</Container>

<Container>
{blocks6.map((block, index) => (
  <ColorfulBlock 
    key={index} 
    color={block.color}
    onDoubleClick={(evt) => {
        evt.target.style.backgroundColor = randomColor();
    }}
  />
))}
</Container>
    </div>
    </ScalingWrapper>
  );
}

export default App;
