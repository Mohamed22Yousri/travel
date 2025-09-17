import video from "../../assets/65562-515098354.mp4";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function HomePage() {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">مرحبا بكم</span>
          <h1 className="homeTitle">Dream Destination</h1>
          <p className="homeDesc">Serach Your Holiday</p>
          <a href="https://www.facebook.com">
            <FaFacebook color="white" style={{ marginTop: "1rem" }} />
          </a>
          <a href="https://www.facebook.com">
            <FaInstagram
              color="white"
              style={{ marginTop: "1rem", marginInline: ".5rem" }}
            />
          </a>
          <a href="https://www.facebook.com">
            <FaWhatsapp color="white" style={{ marginTop: "1rem" }} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
