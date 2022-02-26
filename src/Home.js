import './App.css';
import {Link} from "react-router-dom";
import  Homeimage from "./images/homepageimage.png";
import  Economic from "./images/Economic.png"
import  Environmental from "./images/Environmental.png"



function Home() {
  const content=[
    {
      heading:"Social",
    matter:"Ensures wellness through the understanding of basic human needs.",
  },
  {
    heading:"Economic",
    matter:"Promotes long-term economic growth while minimizing negative impact to other dimensions.",
  },
  {
    heading:"Environmental",
    matter:"Protects the Earth's ecosystem while ensuring humans can exist comfortably and sustainably.",
  },
  {
    heading:"Educational",
    matter:"Supports the sharing and building of knowledge related to the relationship between humans and the planet and how they can interact sustainably.",
  }
  ]
  return (
    <div className="main_container">
      <div className='first_section'>
        <img src={Homeimage} target="blank" className='homepageimage' />
      </div>
      <div className='second_section'>
        <ul>
         <Link to ="/" style={{  textDecoration: "none"}} ><li><a>Home</a></li></Link>
         <Link to ="/WorkGroups" style={{  textDecoration: "none"}}> <li><a>Work Groups</a></li></Link>
          <li><a >Reports and Data</a></li>
          <li><a >Login/Sign Up</a></li>
          <li><a >About Us</a></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="third-section">
          <div className='heading'>
            Our Mission
          </div>
          <div className='heading-content'>
            It is to promote innovative solutions and
            sustainable outcomes to global challenges
            through a multi-disciplinary approach bringing
            social, economic, environmental, and
            educational perspectives to the forefront.
          </div>
        </div>
        <div className='fourth_section'>
          <div className='Sustanability_heading'>
         The Four Dimensions of Sustainability
          </div>
          <div className='center-images'>
            <img src={Economic} target="blank" className='center-image-width' />
            <img src={Environmental} target="blank"  className='center-image-width'/>
            <img src={Economic} target="blank" className='center-image-width' />
            <img src={Environmental} target="blank"  className='center-image-width'/>
          </div>
        </div>
        <div className='fifth-section'>
          {
            content.map((ele,index)=>(
              <div className='content_container'>
              <div className='content_heading'>{ele.heading}</div>
              <div className='content_matter'>{ele.matter}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
