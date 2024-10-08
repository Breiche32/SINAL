import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about-me">
      <div className="About-Main-Container">
        <div className="About-hello">
          <div>Hello! I'm</div>
          <div className="About-Name">SINAL BREICHE</div>
        </div>
        <div className="About-Description">
          <div className="About-Me">
            ABOUT
            <div style={{ margin: "-80px 0 0 0" }}> ME </div>
          </div>

          <div className="About-Paragraph">
            I'm a computer graphics and animation professional with a strong
            background in 3D modeling, animation, and game development. I work
            with tools like 3ds Max, Autodesk Maya, ZBrush, and Unity.
            Additionally, I enjoy creating dynamic visual content using Adobe
            After Effects and Photoshop. Beyond my creative work, I develop
            user-friendly applications with WPF, seamlessly blending design and
            functionality. I'm always eager to tackle new challenges and
            collaborate on projects that push creative boundaries.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
