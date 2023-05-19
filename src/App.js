
import './App.css';
import Nav from './component/Nav/Nav';
import Footer from './component/footer/Footer'
import Download from './component/download/Download';
import Subscribe from './component/subscribe/Subscribe'
import Subscribe2 from './component/subscribe2/Subscribe2';
import Header from './component/header/Header'
import Stat from './component/stats/Stat';
import Page2 from './component/page2/Page2';
import Page3 from './component/page3/Page3';
function App() {
  return (
    <div className="header-bg">
      <Nav/>
      <Header/>
      <Stat/>
      <Page2/>
      <Page3/>
      <Download/>
      <Subscribe/>
      <Subscribe2/>
      <Footer/>
    </div>
  );
}

export default App;
