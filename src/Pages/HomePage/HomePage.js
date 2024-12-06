import axios from "axios";
import { useEffect } from "react";
import './HomePage.scss';





const HomePage = () => {

    useEffect(() => {
        document.title = `Google Flights - Find Cheap Flight Options & Track Prices`
      }, []);


      return (
        <>
          <div className="wrapper">
            <div className="hero">
            </div>
            <div>
              <h1 className="Title">Flights</h1>
            </div>
            <section>
              <form>
                <div>
                  <div>
                    <select>
                      <option defaultValue="roundTrip">Round trip</option>
                      <option value="oneWay">One way</option>
                      <option value="multiCity">Multi-city</option>
                    </select>
                    <select></select>
                    <select>
                      <option defaultValue="economy">Economy</option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <div>
                    <input type="text"></input>
                    <input type="text"></input>
                  </div>
                  <div>
                    <input type="text"></input>
                    <input type="text"></input>
                  </div>
                </div>
                <div>
                  <button>
                    Search                    
                  </button>
                </div>
              </form>
            </section>
          </div>
        </>
      )

}

export default HomePage;