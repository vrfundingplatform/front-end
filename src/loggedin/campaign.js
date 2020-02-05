import React from "react";
import CampaignCard from "../loggedin/campaigncard";
import dummydata from "../loggedin/dummydata.json";


const Campaign = () => {

return(
    <div>
        <h1 className="dashboard-header">Finance a Project</h1>
        <div className="campaign-container">
        {dummydata.map(item => {
            return(
            <CampaignCard key={item.id} data={item}/>
            )
        })}
        </div>
    </div>
)

}



export default Campaign;