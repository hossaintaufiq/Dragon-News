
import { Link } from 'react-router-dom';

const NewsCart = ({News}) => {
    const {title,image_url,details}=News;
    return (
        <div>
            <div>
            <h2>{title}</h2>
            <img src={image_url} alt="" />

            {
                details.length>200 
                ? <p> {details.slice(0,200)} <Link className='text-[#ec7777]'
                to={`/news/&{_id`}
                >Read more...</Link></p>
                 :
                <p>{details}</p>
            }
                
            

            </div>
            
            
        </div>
    );
};

export default NewsCart;