export default function Introduction() {
  return (
    <section className="introduction">
      <div className="textContainer">
        <p className="heyThere">Hey there,</p>
        <h1 className="myName">
          <span className="light">I'm</span>{" "}
          <span className="primary">Niño Rey Noble</span>
        </h1>
        <p className="introduction-text">
          I'm a passionate Front-End Web Developer. I specialize in creating
          stunning, user-friendly websites that bring your digital vision to
          life. I am also expanding my skills in back-end development to become
          a full-stack developer. Let's build something amazing together!
        </p>
      </div>
      <div className="imgContainer">
        <img id="profilePicture" src={`${process.env.PUBLIC_URL}/img/3dprofilepicture.svg`} alt="Profile Picture" />
        <img id="gradient1" src={`${process.env.PUBLIC_URL}/img/ellipse3.svg`} alt="Gradient" />
      </div>
    </section>
  );
}
