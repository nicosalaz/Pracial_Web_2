import './App.css';
import PinterestLayout from './components/PinterestLayout';
import Header from './components/headerPinterest/Header';
import Media from 'react-media';
import Footerfloat from './components/footerPiterest/Footerfloat';

const App = () => {
  return <div>
      <Media query="(max-width: 375px)">
        {(matches)=>{
            return matches ? Mobile() : Desktop();
        }}
      </Media>
    </div>;
};
const Desktop = () => {
  return <div>
      <Header />
      <PinterestLayout />
    </div>;
};

const Mobile = () => {
  return <div>
      <Header />
      <PinterestLayout />
      <Footerfloat/>
    </div>;
};

export default App;