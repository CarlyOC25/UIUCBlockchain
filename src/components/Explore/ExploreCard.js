import React from 'react';
import "../../tabs.css"
import './Explore.css'

const ExploreCard = ({
  contents: {id, image, title, classTitle, description, text}
}) => {

  return (
      <div id={id} className='exploreCard'>
        <div className='cardImage' style={{backgroundImage: 'url(' + image + ')'}}>
          <div className='innerCardImage'>
            <div className='cardTitle'>{title}</div>
          </div>
        </div>
        <div className='cardText'>{text}</div>
        <div className='cardFooter'>
          <button className='cardButton'>Learn More</button>
        </div>
      </div>
    ) 
  
};

export default ExploreCard;