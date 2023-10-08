import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <button className="btn bg-[#D72050] py-2 px-6 text-white">Latest</button>
                <marquee behavior="scroll" direction="left" loop="1" > 
                <Link to={'/'} className="mr-4">Website developed by <span className="text-red-500">Hossain Ahmmed Taufiq</span></Link>
                <Link to={'/'} className="mr-4">Website developed by <span className="text-red-500">Hossain Ahmmed Taufiq</span></Link>
                <Link to={'/'} className="mr-4">Website developed by <span className="text-red-500">Hossain Ahmmed Taufiq</span></Link>
                 </marquee>
            </div>
        </div>
    );
};

export default BreakingNews;