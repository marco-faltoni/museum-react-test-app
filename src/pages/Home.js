import React, {useState, useContext, useEffect} from "react";
// import components
import Nav from "../components/Nav";
import Gallery from "../components/GalleryGrid";
// import Context
import {ActivityContext} from '../dataContext';

const Home = () => {

    const [activities, setActivities] = useContext(ActivityContext);

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
                {activities.map((exhibit)=> {
                    return <Gallery name={exhibit.name} released={exhibit.date} id={exhibit.id} cover={exhibit.cover} image={exhibit.images} key={exhibit.id} /> 
                })}
            </div>
            <h3 className="load">Load More</h3>
        </div>
    );
};


export default Home;