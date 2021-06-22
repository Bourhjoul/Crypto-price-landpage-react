import "./App.css";
import Navbar from "./components/Navbar";
import { ReactComponent as Sketch } from "./Sketch.svg";
import { MdAddAlert } from "react-icons/all";
import { useState } from "react";
function App() {
  const [coins, setcoins] = useState([
    { name: "BTC", price: 49.158 },
    { name: "ETH", price: 3.927 },
    { name: "ADA", price: 345.27 },
    { name: "DOGE", price: 54.7 },
    { name: "XRP", price: 6.339 },
  ]);

  const [active, setactive] = useState(0);
  return (
    <div>
      <Navbar />
      <h2>Price Alert</h2>
      <section id="main_section">
        <div className="RightSection">
          <p>Get notified when a coin goes above or below a price target.</p>
          <div className="Form">
            <form>
              Send me an Email
              <input
                type="email"
                className="forminput"
                id="emailinput"
                placeholder="Email"
              />
              as soon as <br /> <br />
              <select className="Select_Coin">
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="Doge">Doge</option>
                <option value="XPR">XPR</option>
              </select>
              Goes
              <select className="Select_Coin">
                <option value="Above">Above</option>
                <option value="Below">Below</option>
              </select>
              The price of
              <input
                type="email"
                className="forminput"
                id="priceinput"
                placeholder="0.00$"
              />
              <br />
              <button type="submit" className="Set_Alert_Btn">
                <MdAddAlert
                  size="20"
                  style={{
                    verticalAlign: "middle",
                    marginRight: "2px",
                    marginBottom: "2px",
                  }}
                />{" "}
                Set Alert
              </button>
            </form>
          </div>
        </div>
        <div className="leftSection">
          <Sketch />
        </div>
      </section>
      <div id="coins_prices">
        {coins.map((coin, index) => (
          <div
            key={index}
            className={`price_rect ${active === index && "activerect"}`}
            onClick={() => setactive(index)}
          >
            {coin.name}
            <p className={`price ${active === index && "activeprice"}`}>
              {coin.price} $
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
