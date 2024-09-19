import About from './components/About';
import Body from './components/Body';
import Branches from './components/Branches';
import Authors from './components/Authors';
import Categories from './components/Categories';
import Order from './components/Order';
import NewArrivels from './components/NewArrivels';
import Brands from './components/Brands';

export default function Home() {
  return (
  <main>
     <Body/> 
     <About/>
     <Branches/>
     <Categories/>
     {/* <Authors/> */}
     <NewArrivels/>
     <Order/>
     <Brands/>
      {/* tempory div */}
      {/* <div className='h-[3000px]'></div> */}
     </main>
  );
}
 