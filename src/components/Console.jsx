import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;  
`;

const Container = styled.div`
  width:100%;
  display: flex;
  justify-content:center; 
`;

const Top = styled.img`  
  height: 150px;
  width: 150px;
`;

const Console = () => {
  return (
    <Section>
      <Container>
        <Top src="./img/console.gif"/>
      </Container>
    </Section>
  )
}

export default Console
