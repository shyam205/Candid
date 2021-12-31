
import './App.css';
import Bottomlogo from './components/Bottomlogo';
import Newthought from './components/Newthought';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom';
import Community from './components/Community';
import Profile from './components/Profile';
import Leftsection from './components/Leftsection';
import Rightsection from './components/Rightsection';

function App() {
  let { pathname : path } = useLocation();
  return (
    <div className="App">
      <Header />
      <div className='w-full flex flex-col-reverse sm:flex-row px-4 sm:px-20 bg-primary-lightpink box-border pb-8'>
      <Leftsection />
      <div className='main grow mx-0 sm:mx-6'>
   
        <Routes>
         <Route path="/" element={<Newthought />} />
         <Route path="/community" element={<Community />} />
         <Route path="/profile" element={<Profile />} />

        </Routes>
        <Bottomlogo />

      </div>
      <div className={path === '/community' ? 'hidden sm:block':''}>
      <Rightsection />
      </div>
      </div>
      
      
    </div>
  );
}

export default App;
