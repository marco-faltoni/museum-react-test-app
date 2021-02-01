import React, {useContext, useState} from 'react';
// animation
import {motion, useCycle, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {slideUp, slideDown} from '../animation';
import {Link} from 'react-router-dom';
import {resizeImg} from '../util';
// import Context
import {ActivityContext, ClickedContext} from '../dataContext';


const Gallery = ({name, released, cover, image, id, setData}) => {
    // for the card animation i need to covert the id to a string to match the another id from GameDetails
    const idToString = id.toString();

    const [activities, setActivities] = useContext(ActivityContext);
    const [clicked, setClicked] = useContext(ClickedContext);
    const [isOpen, toggleOpen] = useCycle(false, true);

    const detailHandler = () => {
        
        setClicked(activities.filter(activity =>
            activity.id === id
        ));
        setData(true);
        // scrollo al top del container
        let scrollDiv = document.querySelector(".container").offsetTop;
        window.scrollTo({ top: scrollDiv-30, behavior: 'smooth'});
    }

    return (
        <motion.div layout className="container" variants={slideDown} initial='hidden' animate='show' exit='exit'>
            <Link to={`/exhibition/${id}`} onClick={detailHandler}>
                <motion.div className='images'>
                    <img className="main" layoutId={`image ${idToString}`} src={resizeImg(cover, 640)} alt={name}/>
                    <img className="hidden" layoutId={`image ${idToString}`} src={image[0]} alt={name}/>
                </motion.div>
                <motion.div className="text">
                    <motion.h3 layoutId={`title ${idToString}`}>{name}</motion.h3>
                    <p id='card-text' >{released}</p>
                </motion.div>
            </Link>
        </motion.div>
    )
}

export default Gallery;