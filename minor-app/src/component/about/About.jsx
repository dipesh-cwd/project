import React from "react";
import "./About.css";
import TeamCards from "../teamCards/TeamCards";
const teamDetails = [
  {
    name: "Sandip Raj",
    role: "Project Head",
    email: "sandiprazz420@gmail.com",
    image_url: "../../../public/sandip.jpg",
  },

  {
    name: "Sugarika KC",
    role: "Helping hand",
    email: "sugarika@gmail.com",
    image_url: "../../../public/avatar.jpg",
  },
  {
    name: "Dilip kumar Mahato",
    role: "Backend Developer",
    email: "singhdilip033034547@gmail.com",
    image_url: "../../../public/dilip.jpg",
  },

  {
    name: "Dipesh kumar yadav",
    role: "Frontend Developer",
    email: "dipeshkumaryadav43@gmail.com",
    image_url: "../../../public/avatar.jpg",
  },
];

function About() {
  return (
    <div className="about_page">
      <div className="about_content">
        <div className="p">
          <h2>About us </h2>
          <p>Welcome to RideNow!</p>
          <br />
          <p>
            We are a group of three passionate students on a mission to make
            vehicle rentals more accessible and user-friendly. As part of our
            academic journey, we decided to tackle real-world problems with
            practical solutions and that's how this project was born.
          </p>
          <br />
          <p>
            Our goal is to create a platform where users can easily find and
            rent vehicles, whether for daily commuting, road trips, or business
            needs. Through this website, we aim to bring convenience and
            transparency to the rental process while sharpening our skills as
            aspiring developers.
          </p>
          <br />
          <p>
            We're excited to share this project with you and hope to make a
            positive impact in the world of vehicle rentals. Your feedback and
            support mean the world to us as we continue to learn, grow, and
            improve our platform.
          </p>
          <br />
          <p>Thank you for being a part of our journey!</p>
        </div>

        <div className="p">
          <h2>Vehicle rental in Nepal </h2>
          <p>
            Rent in Nepal is a useful platform where you can rent almost
            anything you need in Nepal at a fair price. You can rent cars,
            jeeps, buses, hice and even bike for any time period that suits you.
            With so many options available, it’s easy to find what you need
            without spending too much time.
          </p>

          <br />
          <p>
            This platform is great for people who prefer renting instead of
            buying. Rent in Nepal makes renting simple and convenient for
            everyone!
          </p>
        </div>
        <div className="our_team_box">Our Team</div>
      </div>

      <TeamCards info={teamDetails} />
    </div>
  );
}

export default About;
