 
//import {NetflixSeries,Footer} from "./components/NetflixSeries";
import {NetflixSeries} from "./components/NetflixSeries";
import { Footer } from "./components/NetflixSeries";


//Default me NetflixSeries ki jagah kuch aur naam bhi de skte hain
 //Named me export aur import dono ka name match krna chahiye
 export const App = () => {
  return (<div>
     <NetflixSeries/>
     <NetflixSeries/>
     <Footer/>
  </div>
  );
 };

