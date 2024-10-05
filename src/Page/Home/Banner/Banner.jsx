import './banner.css'
import appstore from '../../../assets/Link → appstore.png.png';
import google from '.././../../assets/Link → googleplay.png.jpg'
const Banner = () => {
     return (
          <section className="banner">
              <div className="banner-content">
               <div className="left-side-b">
                    <button className="left-top-head"> <span>Luxury Travel Redefined</span></button>
                    <h1 className='left-main-head'>Your Passport to
                    Global Glamour</h1>
                    <ul className='why-us'>
                         <li>Personalized Travel Experiences</li>
                         <li>Expert Destination Knowledge</li>
                         <li>Exceptional Customer Service</li>
                    </ul>
                    <div className="app">
                         <div className="google-app"><a href="#"><img src={google} alt="google" /></a></div>
                         <div className="google-app"><a href="#"><img src={appstore} alt="google" /></a></div>
                    </div>
               </div>
               <div className="right-side-b">
                    <p>Lorem, ipsum dolor sit amet con  magni quidem iure, facilis fugit ut recusandae, architecto amet, doloribus ullam maiores modi temporibus repellat.</p>
               </div>
              </div>
          </section>
     );
};

export default Banner;