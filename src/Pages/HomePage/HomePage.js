import axios from "axios";
import { useEffect } from "react";
import './HomePage.scss';
import { Link } from "react-router-dom";





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
                      <option value="premiumEconomy">Premium economy</option>
                      <option value="business">Business</option>
                      <option value="first">First</option>
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
            <section>
              <div>
                <h2>Find cheap flights from Toronto to anywhere</h2>
              </div>
            </section>
            <section>
              <div>
                <h2>Useful tools to help you find the best deals</h2>
              </div>
            </section>
            <section>
              <div>
                <h2>Popular destinations from Toronto</h2>
              </div>
            </section>
            <section>
              <div>
                <h2>Frequently asked questions</h2>
              </div>
            </section>
            <section>
              <div>
                <h2>Find cheap flights on popular routes</h2>
                <div>
                  <ul>
                    <li>
                      <Link to="https://www.google.com/travel/flights/flights-from-new-york-to-paris.html">Flighs from New York to London</Link>
                    </li>
                    <li>
                      <Link to="https://www.google.com/travel/flights/flights-from-new-york-to-rome.html">Flights from New York to Rome</Link>
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                  </ul>
                  <ul>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                  <ul>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <footer>
              <section>
                <div>

                </div>
                <div>
                  
                </div>
                <div>
                  
                </div>
              </section>
              <section>
                <div>
                  <ul>

                  </ul>
                  <ul>

                  </ul>
                </div>
              </section>
            </footer>
          </div>
        </>
      )

}

export default HomePage;