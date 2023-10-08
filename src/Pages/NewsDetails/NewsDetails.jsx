
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import RightSideNav from '../../Components/RightSideNav/RightSideNav';
import {  useParams } from 'react-router-dom';

const NewsDetails = () => {
    
    const {_id}= useParams();
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <div className='grid md:grid-cols-3 grid-cols-1 mt-5'>

            <div className='col-span-2'>
                <h2>{_id}</h2>

              

            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default NewsDetails;