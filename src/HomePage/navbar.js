import React from "react";
import { useRef } from "react";
import Skills from "./skills";

export default function Navbar({ scrollToSkills, scrollToFooter }) {

  return (
    <section className="navbar">
      <ul>
        <li >Home </li>
        <li onClick={scrollToSkills}>Skills</li>
        <li onClick={scrollToFooter}>Contact</li>
      </ul>
    </section>
  );
}
