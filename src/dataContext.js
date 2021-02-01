import { v4 as uuidv4 } from "uuid";
import React,{useState, createContext} from 'react';

export const ActivityContext = createContext();
export const ClickedContext = createContext();

export const ActivityProvider = props => {
    const [activities, setActivities] = useState([
        {
            name: "Gallery 01",
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
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
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
            cover:
                "https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/137038/pexels-photo-137038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
            date: 'Lug 01 - Ott 25, 2020',
            id: uuidv4(),
            activities: "Arte Classica",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim.",
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
            cover:
                "https://images.pexels.com/photos/34614/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat.",
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
            cover:
                "https://images.pexels.com/photos/2261165/pexels-photo-2261165.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 23 - Gen 17, 2020',
            id: uuidv4(),
            activities: "Arte Futurista",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim.",
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
            cover:
                "https://images.pexels.com/photos/2681405/pexels-photo-2681405.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat.",
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
            cover:
                "https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            images: ["https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"],
            date: 'Set 15 - Nov 22, 2020',
            id: uuidv4(),
            activities: "Arte Rinascimentale",
            active: true,
        },
        {
            name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim.",
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
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
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
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
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
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
            description: "Praesent ac massa at ligula laoreet iaculis. Quisque malesuada placerat nisl. Maecenas malesuada. Pellentesque dapibus hendrerit tortor. Nam eget dui.",
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

export const ClickedProvider = props => {
    const [cliked, setClicked] = useState([]);

    return (
        <ClickedContext.Provider value={[cliked, setClicked]}>
            {props.children}
        </ClickedContext.Provider>
    );
}

