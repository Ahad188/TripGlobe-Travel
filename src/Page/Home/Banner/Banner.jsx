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
                    <ul className='flex justify-between p-3'>
                         <button className='btn active bg-black border-none outline-none font-[400px] text-[14px] leading-[24px] text-[#fff]'>Tours</button>
                         <button className='btn bg-white hover:bg-black border-none outline-none font-[400px] text-[14px] leading-[24px] text-[#000000] hover:text-[#fff]'>Hotels</button>
                         <button className='btn bg-white hover:bg-black border-none outline-none font-[400px] text-[14px] leading-[24px] text-[#000000] hover:text-[#fff]'>Tickets</button>
                         <button className='btn bg-white hover:bg-black border-none outline-none font-[400px] text-[14px] leading-[24px] text-[#000000] hover:text-[#fff]'>Rental </button>
                         <button className='btn bg-white hover:bg-black border-none outline-none font-[400px] text-[14px] leading-[24px] text-[#000000] hover:text-[#fff]'>Activities</button>
                    </ul>
                    {/*  */}
                    <div className='w-[464px] h-[193px] border border-red-600 mx-auto rounded-md mt-4 glass'>
                         <div className="flex justify-around">
                              <div className="right w-[198px] ms-3">
                               {/*  */}
                              <label className="form-control w-full max-w-xs ">
                                   <div className="label">
                                        <span className="label-text text-[#000]"> Location</span>   
                                   </div>
                                   <select className="select  bg-white text-black outline-none border-none">
                                        <option disabled selected>New York Usa</option>
                                        <option>Japan</option>
                                        <option> India</option>
                                        <option> Pakistan</option>
                                   </select>
  
                              </label>                               
                              <label className="form-control w-full max-w-xs mt-1">
                                   <div className="label">
                                        <span className="label-text text-[#000]">Checkout</span>   
                                   </div>
                                   <select className="select  bg-white text-black outline-none border-none">
                                        <date   selected>Date</date>
                                        <option>Star Date</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                   </select>
  
                              </label>                               
                              </div>
                              {/*  */}
                              <div className="left w-[198px]">
                                    <label className="form-control w-full max-w-xs ">
                                   <div className="label">
                                        <span className="label-text text-[#000]">Check In</span>   
                                   </div>
                                   <select className="select  bg-white text-black outline-none border-none">
                                        <option disabled selected>New York Usa</option>
                                        <option>Japan</option>
                                        <option> India</option>
                                        <option> Pakistan</option>
                                   </select>
  
                              </label>                               
                              <label className="form-control w-full max-w-xs mt-1">
                                   <div className="label">
                                        <span className="label-text text-[#000]">Guest</span>   
                                   </div>
                                   <select className="select  bg-white text-black outline-none border-none">
                                        <date   selected>Date</date>
                                        <option> People</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                   </select>
  
                              </label>
                              </div>
                         </div>
                    </div>
                    {/* text */}
                    <div className="flex justify-between items-center gap-11 mx-10 mt-8">
                          <input type="text" placeholder='Search Here' className='btn w-[130px] bg-white'/> 
                          <a href="">Need Some Help?</a>
                    </div>
               </div>
              </div>
          </section>
     );
};

export default Banner;