import Headlines from "../../shared/Headlines/Headlines";
import Hero from "../../shared/Hero/Hero";
import AllArticles from "../AllArticles/AllArticles";


const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <Headlines></Headlines>
            <AllArticles></AllArticles>
        </div>
    );
};

export default Homepage;