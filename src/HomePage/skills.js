import ServiceCard from "./components/serviceCard";
import SideText from "./components/sideText";
import React, {useRef} from "react";

export default function Skills({ skillsRef }) {


  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="serviceCardRowContainer">
        <div className="serviceCardRow">
          <ServiceCard image="html" label="HTML" />
          <ServiceCard image="css" label="CSS" />
          <ServiceCard image="javascript" label="Javascript" />
          <ServiceCard image='java' label='Java'/>
        </div>
        <div>
          <SideText label='Skills' positionSide={"left"}/>
        </div>
        <div className="serviceCardRow">
        
          <ServiceCard image="react" label="React JS" />
          <ServiceCard image="c++" label="C++" />
          <ServiceCard image="csharp" label="C#" />
          <ServiceCard image='git' label='Git'/>
        </div>
      </div>
      
    </section>
  );
}
