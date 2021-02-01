import React, {useState, useContext, useEffect} from "react";
// import components
import Nav from "../components/Nav";
import Gallery from "../components/GalleryGrid";
import GalleryDetails from "../components/GalleryDetails";
// import Context
import {ActivityContext} from '../dataContext';
// animation
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {slideDown} from '../animation';
import {fadeIn} from '../animation';
import {useLocation} from 'react-router-dom';

const Home = () => {

    // catching the location
    const location = useLocation();
    const pathID = location.pathname.split('/')[2];
    // console.log(pathID);

    const [activities, setActivities] = useContext(ActivityContext);
    const [dataDetail, setdataDetail] = useState(false);

    // const [Mobile, setMobile] = useState(false);

    // let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;

    // useEffect(()=> {
    //     if (isMobile) {
    //         setMobile(true)
    //     }
    // },[]);
    
    return (
        <motion.div variants={fadeIn} initial='hidden' animate='show' className="grid">
            <Nav/>
            <motion.h1 variants={slideDown} initial='hidden' animate='show' className="title-filter">TITLE</motion.h1>
            <AnimateSharedLayout>
            {dataDetail && (
                <AnimatePresence> {pathID && <GalleryDetails pathID={pathID} setData={setdataDetail} />} </AnimatePresence>
            )} 
            <motion.div className="gallery" layout>             
                {activities.map((exhibit)=> {
                    return <Gallery name={exhibit.name} released={exhibit.date} id={exhibit.id} cover={exhibit.cover} image={exhibit.images} key={exhibit.id} setData={setdataDetail}/> 
                })}

            </motion.div>
            <motion.h3 className="load">Load More</motion.h3>
            </AnimateSharedLayout>
        </motion.div>
    );
};


export default Home;