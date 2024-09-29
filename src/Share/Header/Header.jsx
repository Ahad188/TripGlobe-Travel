import logo from '../../assets/logo-dark.png.png'
import './header.css'
const Header = () => {
     return (
          <head>
          
               <div className="logo">
                     <a href="#"><img src={logo} alt="logo" /></a>
               </div>
                
                    <ul className='menu-list'>
                         <li className='lists'><a href="#">Home  </a></li>
                         <li className='lists'><a href="#">Blog</a></li>
                         <li className='lists'><a href="#">Distinction</a></li>
                         <li className='lists'><a href="#">Page</a></li>
                         <li className='lists'><a href="#">Contact</a></li>
                    </ul>
                    
                <div className="book">
                    <button className='book-btn'>Book Trip</button>
                </div>
         
          </head>
     );
};

export default Header;