import Client from "../../components/Clients/client";
import Header from "../../components/Header/header";
import LandingContent from "../../components/LandingContent/landingContent";
import Choices from "../../components/Choices/choices";
import "./home.css";
import ResidenceCard from "../../components/Residence Card/residencecard";
import RoundedImage from "../../components/RoundedImage/roundedimage";
import ToggleDivs from "../../components/ToggleDivs/toggledivs";

const residences = [
  {
    name: "The Grand",
    location: "Gulberg, Lahore",
    price: "Rs. 1,00,000",
    description:
      "The Grand is a residential project by Grand Properties. It is located in Gulberg, Lahore. The Grand offers 1, 2, 3, 4 and 5 bedroom apartments.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408777558.jpg?k=d87395a9a069a889d16707bf124fcc086d2c8c02ea7b957253d288901c9d3304&o=&hp=1",
  },
  {
    name: "The Grand",
    location: "Gulberg, Lahore",
    price: "Rs. 1,00,000",
    description:
      "The Grand is a residential project by Grand Properties. It is located in Gulberg, Lahore. The Grand offers 1, 2, 3, 4 and 5 bedroom apartments.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408777558.jpg?k=d87395a9a069a889d16707bf124fcc086d2c8c02ea7b957253d288901c9d3304&o=&hp=1",
  },
  {
    name: "The Grand",
    location: "Gulberg, Lahore",
    price: "Rs. 1,00,000",
    description:
      "The Grand is a residential project by Grand Properties. It is located in Gulberg, Lahore. The Grand offers 1, 2, 3, 4 and 5 bedroom apartments.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408777558.jpg?k=d87395a9a069a889d16707bf124fcc086d2c8c02ea7b957253d288901c9d3304&o=&hp=1",
  },
  {
    name: "The Grand",
    location: "Gulberg, Lahore",
    price: "Rs. 1,00,000",
    description:
      "The Grand is a residential project by Grand Properties. It is located in Gulberg, Lahore. The Grand offers 1, 2, 3, 4 and 5 bedroom apartments.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408777558.jpg?k=d87395a9a069a889d16707bf124fcc086d2c8c02ea7b957253d288901c9d3304&o=&hp=1",
  },
  {
    name: "The Grand",
    location: "Gulberg, Lahore",
    price: "Rs. 1,00,000",
    description:
      "The Grand is a residential project by Grand Properties. It is located in Gulberg, Lahore. The Grand offers 1, 2, 3, 4 and 5 bedroom apartments.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408777558.jpg?k=d87395a9a069a889d16707bf124fcc086d2c8c02ea7b957253d288901c9d3304&o=&hp=1",
  },
];

const clients = [
  "https://1000logos.net/wp-content/uploads/2020/01/Radisson-Logo.jpg",
  "https://optimise2.assets-servd.host/dig-upsiide/production/images/starbsloh.png?w=735&h=400&q=100&fm=jpg&fit=crop&dm=1668098882&s=3ee470c8b1123213d7f7f147bc1126e4",
  "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
  "https://blog.hubspot.com/hs-fs/hubfs/Pepsi_logo_2014.svg.png?width=450&height=458&name=Pepsi_logo_2014.svg.png",
  "https://teamboma.com/member/uploads/word-image-20-1-768x528.webp",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/chanel.png",
];

const Home = () => {
  return (
    <>
      <div className="landing">
        <div>
          <div className="gradient"></div>
          <Header />
        </div>
        <div className="landing-content">
          <LandingContent />
        </div>
      </div>
      <div className="clients">
        {clients.map((client, index) => {
          return <Client key={index} client={client} />;
        })}
      </div>

      <Choices />

      <div className="residenceContainer">
        {residences.map((residence, index) => (
          <ResidenceCard residence={residence} key={index} />
        ))}
      </div>

      <div className="value">
        <div className="value-img">
          <RoundedImage img="https://images.adsttc.com/media/images/58ec/b845/e58e/ce07/df00/00fe/medium_jpg/20_Vertical_House.jpg?1491908669" />
        </div>
        <div className="value-content">
          <h2>Our Values</h2>
          <h1>Value We Give to You</h1>
          <p>
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </p>

          <div className="toggle-divs">
            <ToggleDivs />
            <ToggleDivs />
            <ToggleDivs />
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Home;
