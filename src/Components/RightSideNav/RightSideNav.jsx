
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/Ai";
import { CiFacebook, CiTwitter,CiInstagram} from "react-icons/Ci";

import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="mb-4 flex flex-col gap-2">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <AiOutlineGoogle></AiOutlineGoogle>
                  Login with Google
                </button>

                <button className="btn btn-outline w-full">
                    <AiOutlineGithub></AiOutlineGithub>
                  Login with Github
                </button>
            </div>
            <div className="mb-4 flex flex-col gap-2">
                <h2 className="text-3xl">Find us On </h2>
                <a href="" className="flex  items-center gap-1 text-xl border w-full p-4" >
                    <CiFacebook></CiFacebook>
                    Facebook 
                </a>
                <a href="" className="flex  items-center gap-1 text-xl border w-full p-4" >
                    <CiTwitter></CiTwitter>
                    Twitter
                </a>
                <a href="" className="flex  items-center gap-1 text-xl border w-full p-4" >
                    <CiInstagram></CiInstagram>
                   Instagram 
                </a>
            </div>

            <div className="p-4 flex flex-col gap-2 bg-[#F3F3F3]">
                <h2 className="font-semibold text-xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;