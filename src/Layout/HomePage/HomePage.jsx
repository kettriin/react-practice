import React, {useState, useEffect} from "react";
import HeaderItem from "./components/HeaderItem";
import ContentItem from "./components/ContentItem";
import FooterItem from "./components/FooterItem";
import axios from "axios"; 

const gettingPosts = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
    const myName = "Карточки с картинками"
    const [lables, setLables] = useState([]);

    useEffect(()=> {
        axios.get(gettingPosts)
        .then(res => {
            setLables(res.data.slice(0, 5));
        });
    });

    return (
        <div className='container col-10'>
            <HeaderItem headerText = {myName}/>
            <ContentItem setOfLables = {lables}/>
            <FooterItem />
        </div>
    )
}

export default HomePage;