import React, {useContext} from 'react';
// import Context
import {ClickedContext} from '../dataContext';
// style and animation
import close from '../img/close.svg'
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';

const GalleryDetails = ({pathID, setData}) => {
    
    const [clicked, setClicked] = useContext(ClickedContext);
    // exit page detail
    const history = useHistory();
    const exitHandler = (e) => {
        const element = e.target;
        // console.log(element);
        
        if (element.classList.contains('exit')) {
            // document.body.style.overflow = 'auto';
            console.log('enter');
            setData(false);
            history.push('/');
        }
    };

    return (
        <>
            {clicked.map((exhibit)=> (
                <div layoutId={pathID} className="details" key={pathID}>
                    <div className="title">
                        <h1> {exhibit.name}</h1>
                        <img className="exit" onClick={exitHandler} src={close} alt="close"/>
                    </div>

                    <div className="text">
                        <h3>{exhibit.description}</h3>
                    </div>

                    <div className="images">
                        <img className="cov" src={exhibit.cover} alt=""/>
                        <img src={exhibit.images[0]} alt=""/>
                    </div>

                    <div className="dot">

                    </div>
                </div>
            ))}
        </>
    )
}

export default GalleryDetails;