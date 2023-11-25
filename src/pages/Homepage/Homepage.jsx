import Footer from "../../shared/Footer/Footer";
import Headlines from "../../shared/Headlines/Headlines";
import Hero from "../../shared/Hero/Hero";
import AllArticles from "../AllArticles/AllArticles";
import Features from "../Features/Features";
import Subscriptions from "../Subscriptions/Subscriptions";


const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <Headlines></Headlines>
            <AllArticles></AllArticles>
            <Subscriptions></Subscriptions>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;