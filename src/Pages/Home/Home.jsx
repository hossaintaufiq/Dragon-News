import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideNav from "../../Components/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "../../Carts/NewsCart";


const Home = () => {
    const newsData = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 ">
                    {
                    newsData.map(news=><NewsCart key={news._id} News={news}></NewsCart>)
                    }

                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;