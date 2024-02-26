import './navbar.css';
import reactLogo from '../images/logo192.png';

function nav() {
  return (
    <nav>
        <img
          src={reactLogo}
          alt="React Logo"
          className='navbar-icon'
        />
          <h3> ReactFacts </h3>
          <h4> react course - project 1 </h4>
    </nav>
  );
}

export default nav;
