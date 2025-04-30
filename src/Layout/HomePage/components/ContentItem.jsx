import React from "react";

const ContentItem = (props) => {
    return (
        <div>
                {props.setOfLables.map((item, index) =>
                <div className="card m-3">
                  <img src={`https://via.assets.so/album.png?id=${1+index}&q=95&w=300&h=300&fit=fill`} className="card-img-top" alt="Карточки"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.cardTitle}</h5>
                    <p className="card-text">{item.cardText}</p>
                  </div>
                </div>
                )}

        </div>
    )
}

export default ContentItem