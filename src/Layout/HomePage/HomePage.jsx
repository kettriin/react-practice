import React from "react";
import HeaderItem from "./components/HeaderItem";
import ContentItem from "./components/ContentItem";
import FooterItem from "./components/FooterItem";

const HomePage = () => {
    const myName = "Карточки с картинками"
    const lables = [
        {id: 1, cardTitle: "Карточка 1", cardText: "Текст карточки 1"},
        {id: 2, cardTitle: "Карточка 2", cardText: "Текст карточки 2"},
        {id: 3, cardTitle: "Карточка 3", cardText: "Текст карточки 3"},
        {id: 4, cardTitle: "Карточка 4", cardText: "Текст карточки 4"},
        {id: 5, cardTitle: "Карточка 5", cardText: "Текст карточки 5"},
    ]

    return (
        <div className='container col-10'>
            <HeaderItem headerText = {myName}/>
            <ContentItem setOfLables = {lables}/>
            <FooterItem />
        </div>
    )
}

export default HomePage;