
import './App.css';
import Catalog from "./Catalog";
import logo from './Images/логотип i am who i am_1.jpg'
import Menu from "./Menu";

const menu = ['Catalog', 'Main page', 'Reviews'];
const catalogName = 'Catalog';
// const cards = [{prodName: }]

function App() {
  return (
    <div className="App">
        <h1>I AM HWO I AM Brand</h1>
        <img src={logo}/>
        <Menu menu={menu}/>

      <Catalog catalog={catalogName}/>

    </div>
  );
}

export default App;
