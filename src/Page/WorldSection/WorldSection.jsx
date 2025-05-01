import './worldSection.css'
import plan from '../../assets/icon-plane.png.png'
import about from '../../assets/about-img-1.png.png'
const WorldSection = () => {
     return (
          <section className="md:flex md:justify-between items-center mt-[120px] mx-12 gap-10">
                <div className="left-world md:w-[600px]">
                         <h4 className='leading-6 font-medium text-sm text-[#FA7335]'>GET TO KNOW US</h4>
                         <h2 className=' w-[400px] md:w-[524px] leading-[58px] text-[30px] md:text-[48px] font-bold md:font-[600px] text-[#012E41]'>Experience the World
                         With Triptopia</h2>
                         <p className='text-[#345867]  text-[16px] leading-6 font-[400px]'>Triptopia was born out of a shared passion for exploration and a desire to create
                         meaningful travel experiences. We believe travel is more than just visiting a place;</p>
                         <div className='w-[400px] bg-[#DEF2F0] p-5 md:p-10 h-[134px] mt-1'>
                        <h3 className='world-is-back sm:w-[500px] sm:text-[18px] '> The world is a book and those who do not travel
                        read only one page.</h3>
                         </div>
                         <ul className='mt-3 ms-8'>
                              <li className='flex items-center gap-2 text-[#345867] leading-6 text-[18px] font-[500p] mb-2'>
                                  <span><img className='border-0 outline-0' src={plan} alt="" /></span> 
                                   To curate personalized itineraries
                              </li>
                              <li className='flex items-center gap-2 text-[#345867] leading-6 text-[18px] font-[500p] mb-2'>
                                  <span><img className='border-0 outline-0' src={plan} alt="" /></span> 
                                  We believe travel fosters understanding
                              </li>
                         </ul>
                         <button className='discover font-[400px] text-[16px] leading-6 text-[#F4F4F6] text-center hover:bg-transparent hover:text-[#000] mb-10'>Discover More</button>
                </div>
                <div className="right-world gap-5">
                    <img src={about} alt="" />
                </div>
          </section>
     );
};

export default WorldSection;