import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Blogs from './Components/Home/Blogs/Blogs';
import CustomerReview from './Components/Home/CustomerReview/CustomerReview';
import Home from './Components/Home/Home'
import Service from './Components/Home/Service/Service'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/service' element={<Service></Service>}/>
        <Route path='/review' element={<CustomerReview></CustomerReview>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
      </Routes>
    </div>
  );
}

export default App;
