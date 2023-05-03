import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { Copyright } from "@material-ui/icons";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <div className="footer">
        <Copyright />
        BagremarBet 2023
      </div>
    </div>
  );
};

export default Home;
