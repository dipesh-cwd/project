import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  function goToFacebook() {
    window.location.href =
      "https://www.facebook.com/profile.php?id=61553846560963";
  }

  function goToYoutube() {
    window.location.href =
      "https://youtube.com/@dearsubscriber3094?si=WEXYClnKnuY5KJB2";
  }
  return (
    <div className="footer">
      <div className="footer_one">
        <div className="company_info footer_box">
          <h3>RideNow</h3>
          <ul>
            <li>
              <NavLink to="/" className="footer_navLink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer_navLink">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="help_support footer_box">
          <h3>Help & Support</h3>
          <ul>
            <li>
              <NavLink to="/faqs" className="footer_navLink">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer_navLink">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="follow footer_box">
          <h3>Follow Us</h3>
          <ul>
            <li onClick={goToFacebook} className="footer_navLink">
              Facebook
            </li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li onClick={goToYoutube} className="footer_navLink">
              YouTube
            </li>
            <li>What app</li>
          </ul>
        </div>
        <div className="fast_link footer_box">
          <h3>Fast Link</h3>
          <ul>
            <li>Book a Vehicle</li>
            <li>
              <NavLink to="/offer" className="footer_navLink">
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink to="/location" className="footer_navLink">
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_two">
        <h5>
          &copy; 2024 RideNow. All rights reserved.|{" "}
          <NavLink to="/privacy and policy" className="footer_navLink">
            Privacy & Policy
          </NavLink>
        </h5>
      </div>
    </div>
  );
}

export default Footer;
