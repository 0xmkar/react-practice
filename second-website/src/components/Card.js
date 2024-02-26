import './Card.css';
import photo from "../images/omkar.jpg";

function Card() {
  return (
    <div className="card">
      <div className="wrapper-card">
        <img 
            src = {photo}
            alt='profile-pic'
            className='photo'
        />
        <div className='name'> 
            <h4>Omkar Jadhav</h4>
            <p>Full Stack developer</p>
        <button className='email-button'> Email </button>
        <button className='linkedin-button'> LinkedIn </button>
        </div>
        <div className="info">
          <h6>About</h6>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
