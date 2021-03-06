import React from 'react';

const Card = (props) => {
    return (
        <div>
            
            <div className="card">
                <div className="top">
                <h1>{props.keyvu}</h1>
                    <h2 className="name" >{props.name}</h2>
                    <img className="circle-img "
                        src={props.src}
                        alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p className="info">{props.phone}</p>
                    <p className="info">{props.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;