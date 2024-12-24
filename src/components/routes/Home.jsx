import { Helmet } from "react-helmet";
import Slider from "../pages/Slider";
import SliderSet from "../pages/SliderSet";
import ExtraSection from "../pages/ExtraSection";


const Home = () => {
    return (
        <div>
            <Helmet title="Volunteer | Home"></Helmet>
            <Slider></Slider>
            <SliderSet></SliderSet>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;
