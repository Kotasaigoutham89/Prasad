import './App.css';
import Homeimage from "./images/homepageimage.png";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



function Participation() {

    return (
        <div className="main_container">
            <div className='first_section'>
                <img src={Homeimage} target="blank" className='homepageimage' />
            </div>
            <div className='second_section'>
                <ul className='participation-bar'>
                    <li>
                        <Link to="/Prasad">
                            <Button variant="contained" startIcon={<KeyboardArrowLeftIcon />}>
                                Home
                            </Button>
                        </Link>
                    </li>
                    <li className='welcome-text'>WELCOME TO IHAPS</li>
                    <li className='visibility'>dskfasdkf</li>
                </ul>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                    </tr>
                    <tr>
                        <td>Register</td>
                    </tr>
                    <tr>
                        <td>Login</td>
                    </tr>

                </table>
            </div>
        </div>
    );
}

export default Participation;
