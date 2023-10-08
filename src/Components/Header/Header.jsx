import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col'>
            <img src={logo} alt="" />
            <h2>Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>

            </div>
           
            
        </div>
    );
};

export default Header;