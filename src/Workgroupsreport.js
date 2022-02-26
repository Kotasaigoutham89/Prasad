import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
function Workgroupsreport() {
    return (
        <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
            <div className='second_section' >
                <ul style={{ height: "100px", display: "flex", alignItems: "center" }}>
                    <li style={{ fontSize: 40, color: "white" }}>WORK GROUPS REPORT</li>
                </ul>
            </div>
            <div class="sidenav">
                <a >Co-ordination & Planning</a>
               <Link to="/Curriculum"> <a  >Curriculum</a></Link>
                <a >Research & Scholarship</a>
                <a >Campus & Community Engagement</a>
                <a  >Diversity, Equity & Wellbeing at Work</a>
                <a  >Purchasing</a>
                <a  >Food & Waste</a>
                <a  >Air & Transportation</a>
                <a  >Energy & Buildings</a>
                <a  >Grounds & Water</a>
            </div>
        </div>
    );
}

export default Workgroupsreport;
