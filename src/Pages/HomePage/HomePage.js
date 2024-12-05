import axios from "axios";
import { useEffect } from "react";





const HomePage = () => {

    useEffect(() => {
        document.title = `Google Flights - Find Cheap Flight Options & Track Prices`
      }, []);


      return (
        <>
        
        <div>

        </div>
        <div>
            <h1>Flights</h1>
        </div>
        <div>
            <h3>Travel Stuff</h3>
        </div>
        </>
      )

}

export default HomePage;