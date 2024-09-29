import { Outlet } from "react-router-dom";
import Header from "../Share/Header/Header";
import Footer from "../Share/Footer/Footer";

 

 

 
const MainLayOut = ( ) => {
     return (
          <section>
                <Header></Header>
                    <Outlet></Outlet>
                 {/* <Footer></Footer> */}
          </section>
     );
};

export default MainLayOut;