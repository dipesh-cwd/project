import "./Footer.css";

function Footer() {
  const LogoPic = "./public/logo.png";
  return (
    <div className="footer">
      <div className="site-logo-name">
        <div className="site-name">
          <p className="site-p">RideNow </p>
          <img src={LogoPic} alt="site-logo" />
          <p className="rent">Rent a Vehicle</p>
        </div>
      </div>
      <div className="info-box">
        <div className="other-site-link">
          <p>Follow us </p>
          <div className="below_follow">
            <a href="https://youtube.com/@dearsubscriber3094?si=WEXYClnKnuY5KJB2"><i className="fa-brands fa-youtube fa-xl" style={{color: "#fd2008"}}></i></a>
            <a href="https://www.facebook.com/profile.php?id=61553846560963"><i className="fa-brands fa-facebook fa-xl" style={{color: "blue"}}></i></a>
            <a href="www.youtube.com/@DipeshYadav-h2g"><i className="fa-brands fa-instagram fa-xl" style={{color: ""}}></i></a>
            <a href="www.youtube.com/@DipeshYadav-h2g"><i className="fa-brands fa-twitter fa-xl" style={{color: "white"}}></i></a>




          </div>
        </div>
        <div className="copy-right">

          <h5>&copy; 2024 RideNow. All rights reserved.</h5>
        </div>
        <div className="nothing">
          <h3>links :-</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
