import React, {useState, useContext, useEffect} from "react";
// import components
import Nav from "../components/Nav";
import Gallery from "../components/GalleryGrid";
import GalleryDetails from "../components/GalleryDetails";
// import Context
import {ActivityContext} from '../dataContext';
// animation
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
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
        <div className="grid">
            <Nav/>
            
            <div className="gallery">
                {dataDetail && (
                    <AnimatePresence> {pathID && <GalleryDetails pathID={pathID} setData={setdataDetail} />} </AnimatePresence>
                )}              
                {activities.map((exhibit)=> {
                    return <Gallery name={exhibit.name} released={exhibit.date} id={exhibit.id} cover={exhibit.cover} image={exhibit.images} key={exhibit.id} setData={setdataDetail}/> 
                })}

            </div>
            <h3 className="load">Load More</h3>
        </div>
    );
};


export default Home;