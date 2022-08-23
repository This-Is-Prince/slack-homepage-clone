import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const StyledAside = styled.aside`
    padding: 0.5rem;
`

const Aside = () => {
  return (
    <StyledAside>
        <Header/>
        <Navbar/>
        <Footer/>
    </StyledAside>
  )
}

export default Aside