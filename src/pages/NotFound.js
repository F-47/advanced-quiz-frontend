import notFound from "../imgs/notFound.svg";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    return <div className="notFound">
        <div className="container">
            <img src={notFound} alt=""/>
            <h1>Page Not Found</h1>
            <Link to={'/'}className="backHomeBtn">
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                <span>Go To HomePage</span>
            </Link>
        </div>
    </div>;
}
 
export default NotFound;