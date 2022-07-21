import React, { useState, useEffect } from 'react';
import '../../tabs.css'
import './Explore.css'
import ExploreCard from './ExploreCard.js';

const Explore = () => {

  const [tabPosition, setTabPosition] = useState("research");
  const [filterPosition, setFilterPosition] = useState([]);

  let impactModule = require('./ImpactAreas.js');
  let impactAreas = impactModule.impactAreas;

  let courseModule = require('./ExploreContent/courseCards.js');
  let courseCards = courseModule.courseCards;

  let projectModule = require('./ExploreContent/projectCards.js');
  let projectCards = projectModule.projectCards;

  let researchModule = require('./ExploreContent/researchCards.js');
  let researchCards = researchModule.researchCards;

  const handleTabResearch = () => {
    setTabPosition("research");
  }

  const handleTabProjects = () => {
      setTabPosition("projects");
  }

  const handleTabCourses = () => {
      setTabPosition("courses");
  }

  const handleFilterPosition = (e) => {
    const {value} = e.target;
    if (filterPosition.some(x => x === value)){
      const newValue = filterPosition.filter(x => x !== value);
      setFilterPosition(newValue);
    }else{
      setFilterPosition([...filterPosition, value]);
    }
    
  }

  useEffect(() => {
    const slider = document.querySelector('.explore-carousel');
    let mouseDown = false;
    let startX, scrollLeft;
  
    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
      mouseDown = false;
    };
    
  
    slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if(!mouseDown) { return; }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });
    
    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
  })

  const myArrayFiltered = (list, filter) => {
    return list.filter((x) => filter.some(y => x.impact.indexOf(y) >= 0));
  }

  const filteredResearch = (filterPosition.length !== 0) ?  myArrayFiltered(researchCards, filterPosition) : researchCards;
  const filteredProjects = (filterPosition.length !== 0) ? myArrayFiltered(projectCards, filterPosition) : projectCards;
  const filteredCourses = (filterPosition.length !== 0) ? myArrayFiltered(courseCards, filterPosition) : courseCards;

  return (
   
    <div className='explore-body container' id='explore'>
      <h1 className='impact-header'>
        <p style={{display: 'inline', color: 'white', backgroundColor: '#FF552E', paddingLeft: 5, paddingRight: 5, marginRight: 15}}></p> Exploring Blockchain
      </h1>
      <div className='explore-content'>
        { /* Tabs that switch between the different types of engagements; research, projects, courses */}
        <div className='explore-types'>
          <button 
            id='research' 
            className={tabPosition === 'research' ? 'explore-title active' : 'explore-title'}
            onClick={handleTabResearch}
            >Research
          </button>
          <button 
            id='projects' 
            className={tabPosition === 'projects' ? 'explore-title active' : 'explore-title'}
            onClick={handleTabProjects}
            >Projects
          </button>
          <button 
            id='courses' 
            className={tabPosition === 'courses' ? 'explore-title active' : 'explore-title'}
            onClick={handleTabCourses}
            >Courses
          </button>
        </div>
        { /* The impact areas filter the content */}
        <div className='explore-filters'>
          {impactAreas.map((area, index) => (
            <input 
              id={index} 
              name="impactArea"
              type="button"
              value={area}
              className={filterPosition.some(f => f === area) ? 'explore-filters-text active-area' : 'explore-filters-text'}
              onClick={handleFilterPosition}
            />
            ))}
        </div>
        <div className='explore-carousel'>

          {tabPosition === 'research' &&
            filteredResearch.map(product => (
              <ExploreCard contents={product} />
            ))
          }
          {((tabPosition === 'research') && (filteredResearch.length === 0)) && 'No results available'}

          {tabPosition === 'projects' &&
            filteredProjects.map(product => (
              <ExploreCard contents={product} />
            ))
          }
          {((tabPosition === 'projects') && (filteredProjects.length === 0)) && 'No results available'}

          {tabPosition === 'courses' &&
            filteredCourses.map(product => (
              <ExploreCard contents={product} />
            ))
          }
          {((tabPosition === 'courses') && (filteredCourses.length === 0)) && 'No results available'}

        </div>
      </div>  
    </div>
  ) 
  
};

export default Explore;