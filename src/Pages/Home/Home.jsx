import About from "./About";
import Banner from "./Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="mb-28">
            <Banner></Banner>  
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;