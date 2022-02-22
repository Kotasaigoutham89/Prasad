import './App.css';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from "react-router-dom";

function WorkGroups() {

  return (
    <>
      <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
        <div className='second_section'>
          <ul>
          <Link to="/Curriculum" style={{  textDecoration: "none"}} ><li><a >Curriculum</a></li></Link>
            <li><a >Research and ScholarShip</a></li>
            <li><a >Campus and Community Engagement</a></li>
            <li><a >Food Wasting and Purchasing</a></li>
          </ul>
        </div>
        <div className="back-button">
          <Link to="/">
        <Button variant="contained" startIcon={<KeyboardArrowLeftIcon />} >
        Delete
      </Button>
      </Link>
        </div>
      </div>
    </>
  );
}

export default WorkGroups;
