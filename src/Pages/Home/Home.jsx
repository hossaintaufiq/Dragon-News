import Header from "../../Components/Header/Header";
import LeftSideNav from "../../Components/LeftSideNav/LeftSideNav";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideNav from "../../Components/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl ">news coming soon </h2>

                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;