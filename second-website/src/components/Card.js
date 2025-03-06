import './Card.css';
import mail from  "../images/mail.png";
import linkedin from "../images/linkedin.png";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="wrapper-card">
        <img 
            src = {props.img}
            alt='profile-pic'
            className='photo'
        />
        <div className='name'> 
            <h4>{props.name}</h4>
            <p>Full Stack developer</p>
        <button className='email-button'> <img src={mail} /> Email </button>
        <button className='linkedin-button'> <img src={linkedin} /> LinkedIn </button>
        </div>
        <div className="info">
          <p className="about">About</p> <br />
          <p>{props.about}</p>
          <br />
          <p className="about">Interests</p> <br />
          <p>{props.interests}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
