import styled from "styled-components"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hardware from "./components/Hardware"
import Console from "./components/Console"
import Games from "./components/Games"

const Container = styled.div`
  height: 100vh;  
  background: url("./img/bg.png"); 
  overflow-y: auto;  
  color: whitesmoke;
`

function App() {

  return (
    <Container>      
      <Header/>
      <Hardware/>
      <Console/>
      <Games/>
      <Contact/>
    </Container>
  )
}

export default App
