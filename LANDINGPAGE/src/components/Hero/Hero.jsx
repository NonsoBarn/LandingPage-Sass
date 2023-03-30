import "./Hero.scss";
import image from "../../assets/images/illustration-intro.svg";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Bring everyody together to build better products</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <button>Get Started</button>
        </div>
        <div className="hero-img">
          <img src={image} alt="" className="img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
