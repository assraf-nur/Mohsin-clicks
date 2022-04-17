import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Blogs from './Components/Home/Blogs/Blogs';
import CustomerReview from './Components/Home/CustomerReview/CustomerReview';
import Home from './Components/Home/Home'
import Login from './Components/LoginRegistration/Login/Login';
import Registration from './Components/LoginRegistration/Registration/Registration';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}/>
        <Route path='/review' element={<CustomerReview></CustomerReview>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Registration></Registration>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
