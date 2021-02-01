import React, {useContext, useState} from 'react';
// animation
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
// import {slideUp} from '../animation';
import {Link} from 'react-router-dom';
import {resizeImg} from '../util';
// import Context
import {ActivityContext, ClickedContext} from '../dataContext';


const Gallery = ({name, released, cover, image, id, setData}) => {
    // for the card animation i need to covert the id to a string to match the another id from GameDetails
    const idToString = id.toString();

    const [activities, setActivities] = useContext(ActivityContext);
    const [clicked, setClicked] = useContext(ClickedContext);

    const detailHandler = () => {
        setClicked(activities.filter(activity =>
            activity.id === id
        ))
        setData(true);
    }

    return (
        <div className="container">
            <Link to={`/exhibition/${id}`} onClick={detailHandler}>
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