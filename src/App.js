import logo from './logo.svg';
import './App.css';
import Navbar from './HomePage/navbar';
import Introduction from './HomePage/introduction';
import Skills from './HomePage/skills';
import Projects from './HomePage/projects';
import Footer from './HomePage/footer';
import React, { useRef } from 'react';

function App() {
  const skillsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <header className="App-header">
       <Navbar scrollToSkills={scrollToSkills} scrollToFooter={scrollToFooter}/>
       <Introduction/>
       <Skills skillsRef={skillsRef}/>
       <Footer footerRef={footerRef}/>
      </header>
    </div>
  );
}

export default App;
