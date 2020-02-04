import React from "react";
import CampaignCard from "../loggedin/campaigncard";
import dummydata from "../loggedin/dummydata.json";


const Campaign = () => {

return(
    <div>
        <h1>Finance a Project</h1>
        <div>
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