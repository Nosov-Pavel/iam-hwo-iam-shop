
import './App.css';
import Hoody from './Images/Hoody.jpeg';
import Hoody2 from './Images/HoodyBack.jpeg'
import Catalog from "./Catalog";
import logo from './Images/логотип i am who i am_1.jpg'
import Menu from "./Menu";

const menu = ['Catalog', 'Main page', 'Reviews'];
const catalogName = 'Catalog';
const cards = [{prodName: 'hoody', imd: Hoody, price: 1000 },
    {prodName: 'hoody2', imd: Hoody, price: 1000 }];

function App() {
  return (
    <div className="App">
        <h1>I AM HWO I AM Brand</h1>
        <img src={logo}/>
        <img src={Hoody}/>
        <img src={Hoody2}/>
        <img src={logo}/>
        <Menu menu={menu}/>

      <Catalog catalog={catalogName}/>

    </div>
  );
}

export default App;
