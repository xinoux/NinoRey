import SocialMediaIcon from "./components/socialMediaIcons";

export default function Footer({ footerRef }) {
  return (
    <section className="footer">
      <section className="footerContent" ref={footerRef}>
        <div className="contactSocialMediaContainer">
          <div className="socialMediaContainer">
            <a
              href="https://www.facebook.com/ninoreynoble/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon image="facebook" />
            </a>
            <a
              href="https://x.com/ninoreynoble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon image="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/ni%C3%B1o-rey-noble-75994523a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon image="linkedin" />
            </a>
            <a
              href="https://github.com/xinoux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaIcon image="github" />
            </a>
          </div>
          <div className="contactContainer">
            <div className="contactItem">
              <SocialMediaIcon image="email" />
              <label htmlFor="">nobleninorey@gmail.com</label>
            </div>
          </div>
        </div>
        <div className="location">
          <h4>Location</h4>
          <label htmlFor="">Davao City, Philippines</label>
        </div>
      </section>
      <section className="allRightsReserved">
        <h4>©Niño Rey Noble. All Rights Reserved.</h4>
      </section>
    </section>
  );
}
