import { v4 as uuidv4 } from "uuid";
import React,{useState, createContext} from 'react';

export const ActivityContext = createContext();

export const ActivityProvider = props => {
    const [activities, setActivities] = useState([
        {
            name: "Gallery 01",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Apr 17 - Nov 01, 2020',
            id: uuidv4(),
            activities: "Arte Contemporanea",
            active: true,
        },
        {
            name: "Proin condimentum a aliquam gravida.",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Lug 01 - Ott 25, 2020',
            id: uuidv4(),
            activities: "Arte Classica",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim.",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat.",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 23 - Gen 17, 2020',
            id: uuidv4(),
            activities: "Arte Futurista",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim.",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat.",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim.",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat.",
            cover:
                "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        
        //ADD MORE HERE
    ]);
    
    return (
        <ActivityContext.Provider value={[activities, setActivities]}>
            {props.children}
        </ActivityContext.Provider>
    );
}


