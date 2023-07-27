import React from 'react';
import './Testimonial.css';
import image_1 from './img1.jpg';
import image_2 from './img2.jpeg';
import image_3 from './img3.jpeg';

const Testimonial = () => {
  return (
    <div className="class-testimonial">
        <section>
            <div class="heading"><b>Our</b> Testimonials</div>
            <div class="wrapper">
                <div class="container">
                    <div class="profile">
                        <div class="imgBox">
                            <img src={image_2} alt='img1'></img>
                        </div>
                        <h2>John</h2>
                    </div>
                    <p><span class="fa fa-quote-left left"></span>Memotime is an incredible tool that effortlessly brings my treasured memories to life with just a few clicks.Thanks to Memotime, I can easily preserve and revisit the joyous milestones of my life, creating an everlasting tapestry of nostalgia<span class="fa fa-quote-right right"></span></p>
                    <div class="social">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
                <div class="container">
                    <div class="profile">
                        <div class="imgBox">
                            <img src={image_1} alt='img2'></img>
                        </div>
                        <h2>Anna</h2>
                    </div>
                    <p><span class="fa fa-quote-left left"></span>Memotime has given me the priceless gift of preserving my most cherished memories in a beautifully organized and easily accessible way. With its user-friendly interface, I can effortlessly store, and relive my special moments <span class="fa fa-quote-right right"></span></p>
                    <div class="social">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
                <div class="container">
                    <div class="profile">
                        <div class="imgBox">
                            <img src={image_3} alt='img3'></img>
                        </div>
                        <h2>Jack</h2>
                    </div>
                    <p><span class="fa fa-quote-left left"></span>Memotime has truly transformed the way I experience my memories.Memotime has brought my memories to life in ways I never thought possible. It has become an invaluable companion that enriches my journey down memory lane.<span class="fa fa-quote-right right"></span></p>
                    <div class="social">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default Testimonial;