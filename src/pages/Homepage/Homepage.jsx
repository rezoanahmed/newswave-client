import { Helmet } from "react-helmet-async";
import Footer from "../../shared/Footer/Footer";
import Headlines from "../../shared/Headlines/Headlines";
import Hero from "../../shared/Hero/Hero";
import AllArticles from "../AllArticles/AllArticles";
import Features from "../Features/Features";
import Subscriptions from "../Subscriptions/Subscriptions";
import AllArticlesHome from "../AllArticles/AllArticlesHome";
import Authors from "../Authors/Authors";
import Contact from "../Contact/Contact";


const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>News Wave | Home</title>
            </Helmet>
            
            <Hero></Hero>
            <Headlines></Headlines>
            <AllArticlesHome></AllArticlesHome>
            <Subscriptions></Subscriptions>
            <Features></Features>
            <Authors></Authors>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Homepage;