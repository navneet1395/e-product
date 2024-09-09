import logo from "./monkLogo.png";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Monk Upsell & Cross-sell</p>
      </header>
      <main>
        <AddProduct />
      </main>
    </div>
  );
}

export default App;
