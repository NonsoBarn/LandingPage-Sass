import "./Reviews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/images/avatar-ali.png";
import image2 from "../../assets/images/avatar-anisha.png";
import image3 from "../../assets/images/avatar-richard.png";
import image4 from "../../assets/images/avatar-shanai.png";

const Reviews = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Reviews = [
    {
      id: 1,
      image: image1,
      name: "Anisha Li",
      comment:
        "Manage has supercharged our team's workflow. The ability to maintain visibility on longer milestones at all times keeps everyone motivated.",
    },
    {
      id: 2,
      image: image2,
      name: "Ali Bravo",
      comment:
        "We have been able to cancel so many other subscriptions since using manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      id: 3,
      image: image3,
      name: "Richard Watts",
      comment:
        "Manage allows us provide structure and process.It keeps us organised and focused. I cant stop reconnecting them to everyone i talk to!",
    },
    {
      id: 4,
      image: image4,
      name: "Shanai Gough",
      comment:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. it keeps the whole team in-sync without being instrusive",
    },
  ];

  return (
    <>
      <div className="reviews">
        <h1>What they've said</h1>

        <div className="ttt">
          <div className="carousel">
            <Slider {...settings}>
              {Reviews.map((review) => {
                return (
                  <div className="box" key={review.id}>
                    <img src={review.image} alt="" />
                    <h3>{review.name}</h3>
                    <p>{review.comment}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div>
          <button className="btn">Get Started</button>
        </div>
      </div>

      <div className="promo">
        <h1>Simplify how your team works today.</h1>
        <button className="btn2">Get Started</button>
      </div>
    </>
  );
};

export default Reviews;
