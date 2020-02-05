import React from "react";
import Button from '@material-ui/core/Button';

const CampaignCard = (props) => {
console.log(props);
    return(
    <div className="campaign-card">
        <h2 className="campaign-title">{props.data.title}</h2>
        <img className="campaign-img" src={props.data.img}/>
        <h4>Funding Goal: {props.data.goal}</h4>
        <div className="campaign-footer">
        <img className="campaign-pp" src={props.data.profileimg}/>
        <Button variant="contained" color="secondary" className="campaign-button">Explore Project</Button>
        </div>
    </div>
)


}



export default CampaignCard;