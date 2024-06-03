import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner";
import LatestProducts from "../../components/Home/LatestProducts";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Classy Furnitures</title>
            </Helmet>
            <Banner></Banner>
           <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;