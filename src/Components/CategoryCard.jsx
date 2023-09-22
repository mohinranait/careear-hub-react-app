
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {id,img, name,text} = category;
    return (
        <>
            <div className=' px-5 py-5 rounded-lg bg-[linear-gradient(90deg,rgba(126,144,254,0.05)0%,rgba(152,115,255,0.05)100%)]'>
                <div className='mb-3'>
                    <span className=' inline-block bg-[linear-gradient(90deg,rgba(126,144,254,0.10)0%,rgba(152,115,255,0.10)100%)] p-3 rounded-md'>
                        <img src={img} alt={name} />
                    </span>
                </div>
                <Link to={`/category/${id}`}>
                    <h3 className='mb-1 font-bold text-xl text-gray-700 '>{name}</h3>
                </Link>
                <p className='font-normal text-base text-gray-600'>{text}</p>
            </div>   
        </>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryCard;