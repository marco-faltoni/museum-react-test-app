import React from 'react';
// style and animation
import {motion} from 'framer-motion';
// import {slideUp} from '../animation';
import {Link} from 'react-router-dom';
import {resizeImg} from '../util';


const Gallery = ({name, released, cover, image, id}) => {
    // for the card animation i need to covert the id to a string to match the another id from GameDetails
    const idToString = id.toString();

    return (
        <div className="container">
            <Link to={`/exhibition/${id}`} >
                <div className='images'>
                    <img className="main" layoutId={`image ${idToString}`} src={resizeImg(cover, 640)} alt={name}/>
                    <img className="hidden" layoutId={`image ${idToString}`} src={image[0]} alt={name}/>
                </div>
                <div className="text">
                    <motion.h3 layoutId={`title ${idToString}`}>{name}</motion.h3>

                    <p id='card-text' >{released}</p>
                </div>
            </Link>
            
        </div>
    )
}

export default Gallery;