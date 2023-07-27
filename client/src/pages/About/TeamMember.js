import React from 'react';

import './Team.css';
import pic1 from './nehal.jpg';
import pic2 from './harshit1.jpg';
import pic3 from './vansh1.jpg';

function TeamMember() {
  return (
    <div className="container">
      <section>
      <div class="row">
        <h1><b>Our Team</b></h1>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={pic1} alt='img1' />
            </div>
            <h3>Nehal Sharma</h3>
            <p>Frontend Developer</p>
            <div class="icons">
              <a href="https://twitter.com/NehalSh9421" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/nehal-sharma-a772a01b9" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/nehal1020" target="_blank" rel="noreferrer">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto: nehalsharma668@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={pic2} alt='img' />
            </div>
            <h3>Harshit Goyal</h3>
            <p>Designer</p>
            <div class="icons">
              <a href="https://twitter.com/iuxerharshit" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/iuxerharshit" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://www.behance.net/iuxerharshit" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-behance"></i>
              </a>
              <a href="mailto: iuxerharshit@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src={pic3} alt='img3' />
            </div>
            <h3>Vansh Mathur</h3>
            <p>Backend Developer</p>
            <div class="icons">
              <a href="https://twitter.com/VanshMa80822041" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/vansh-mathur-4791031b8" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/vanshmathur6568" target="_blank" rel="noreferrer">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto: vanshmathur6568@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default TeamMember;