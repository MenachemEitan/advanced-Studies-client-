import "../assets/index.css";
import homePagePhoto from "../assets/img/science.png";
import Classes from "../components/Classes";
import RecommendedClasses from "../components/RecommendedClasses";
import OpenClasses from "../components/OpenClasses";
import CircularProgressBar from "../Layouts/CircularProgressBar/CircularProgressBar";
const Home = () => {
  return (
    <div>
      <div className="welcome-section row between">
        <h2 className="col left">
          <b>hellow ido</b>
          <b> good progress so far!</b>
          <h6>classes completed: 5</h6>
        </h2>
        <div className=" row right">
          <img src={homePagePhoto} className="homePagePhoto"></img>
        </div>
      </div>
      <OpenClasses />
      <RecommendedClasses />
    </div>
  );
};

export default Home;
