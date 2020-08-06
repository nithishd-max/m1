import React from 'react';
import NavBar from './Navbar';
import MastHead from './Masthead';
//import PortFolio from './Portfolio';
import Footer from './footer';
import Contact from './Contact';
import Copyright from './copyright';
import ScrollUp from './ScrollUp';
//import PModal from './Pmodal';
//import Pmodal2 from './Pmodal2';
import About from './About';
import Resume from './resume';
import Skills from './skills';
const App=()=>{
    return(
        <div>
            <NavBar/>
            <MastHead/>
            {/* <PortFolio/>  */}
            <Resume/>
            <Skills/>
            <About/>
            <Contact/>
            <Footer/>
            <Copyright/>
            <ScrollUp/> 

        </div>
    )
};
export default App;