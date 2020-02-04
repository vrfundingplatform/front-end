import React from "react";

const CampaignCard = (props) => {
console.log(props);
    return(
    <div>
        <h3>{props.data.title}</h3>
        <img src={props.data.img}/>
        <h4>Funding Goal: {props.data.goal}</h4>
        <img src={props.data.profileimg}/>
        
    </div>
)


}



export default CampaignCard;