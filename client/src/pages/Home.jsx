import "../assets/index.css";
import homePagePhoto from "../assets/img/science.png";
import Classes from "../components/Classes";
import RecommendedClasses from "../components/RecommendedClasses";
import OpenClasses from "../components/OpenClasses";
const Home = () => {
  return (
    <div>
      <div className="welcome-section row right">
        <img src={homePagePhoto} className="homePagePhoto"></img>
      </div>
      <RecommendedClasses />
      <OpenClasses />
    </div>
  );
};

export default Home;
