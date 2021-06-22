import "./App.css";
import Navbar from "./components/Navbar";
import { ReactComponent as Sketch } from "./Sketch.svg";
function App() {
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
              <input type="email" className="forminput" placeholder="Email" />
              as soon as <br /> <br />
              <select id="Select_Coin">
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="Doge">Doge</option>
                <option value="XPR">XPR</option>
              </select>
            </form>
          </div>
        </div>
        <div className="leftSection">
          <Sketch />
        </div>
      </section>
    </div>
  );
}

export default App;
