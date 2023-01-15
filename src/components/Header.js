import { Link } from "react-router-dom";
import logo from "../assets/home.png"


const Header = () => {
    return(
        <header>
            <Link to="/"><img  style={{padding:"0%", margin:"0%", height:"100px", width:"100%"}} src={logo} alt="home"/></Link>
        </header>
    )
}


export default Header