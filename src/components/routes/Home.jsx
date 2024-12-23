import { Helmet } from "react-helmet";
import Slider from "../pages/Slider";
import SliderSet from "../pages/SliderSet";


const Home = () => {
    return (
        <div>
            <Helmet title="Volunteer | Home"></Helmet>
            <Slider></Slider>
            <SliderSet></SliderSet>
            
        </div>
    );
};

export default Home;
