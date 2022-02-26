import './App.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="main_container">
            <div className='second_section' >
                <ul style={{ height: "100px", display: "flex", alignItems: "center" }}>
                    <li style={{ fontSize: 40, color: "white" }}>Login</li>
                </ul>
            </div>
            <div className='course-container-login'>
                <div className='participation-menu'>
                    <table>
                        <tr>
                            <th>Participation</th>
                        </tr>
                        <tr>
                            <Link to="/Register">
                                <td>Register</td>
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Login">
                                <td>Login</td>
                            </Link>
                        </tr>

                    </table>
                </div>
                <div className='academiccourse-items'>
                    <div className='items'>
                        <div className='input-name-small'>
                            UHCL Email ID
                        </div>
                        <div className='input-text'>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='items'>
                        <div className='input-name-small'>
                            Password
                        </div>
                        <div className='input-text'>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='submit-button'>
                        <Link to="/Prasad" style={{  textDecoration: "none"}}>
                            <Button variant="contained" style={{ height: 50, width: "200%" }}>
                                Submit
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='visibility'>
                    dsadlf;ka
                </div>
            </div>
        </div>
    );
}

export default Login;
