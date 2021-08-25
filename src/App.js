
import './App.css';
import Hoody from './Images/Hoody.jpeg';
import Hoody2 from './Images/HoodyBack.jpeg';
import leggings from './Images/Leggings.jpeg';
import leggings2 from './Images/Leggings2.jpeg';
import Catalog from "./Catalog";
import logo from './Images/логотип i am who i am_1.jpg';
import logo2 from './Images/логБ i am who i am.jpg';
import Menu from "./Menu";

const menu = ['Catalog', 'Main page', 'Reviews'];
const catalogName = 'Catalog';
const cards = [{prodName: 'hoody', imd: Hoody, price: 1000 },
    {prodName: 'hoody2', imd: Hoody, price: 1000 },
    {prodName: 'leggings', imd: leggings, price: 1000 },
    {prodName: 'leggings2', imd: leggings, price: 1000 }];

function App() {
  return (
    <div className="App">
        <h1>I AM HWO I AM Brand</h1>
        <img src={logo} alt=''/>
        <img src={Hoody} alt=''/>
        <img src={Hoody2} alt=''/>
        <img src={logo} alt=''/>
        <img src={logo2} alt=''/>
        <img src={leggings} alt=''/>
        <img src={leggings2} alt=''/>
        <img src={logo2} alt=''/>
        <Menu menu={menu} alt=''/>

      <Catalog catalog={catalogName} products={cards}/>

    </div>
  );
}

export default App;
