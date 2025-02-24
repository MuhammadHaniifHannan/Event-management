import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import EventForm from './components/EventForm';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  
  // Hide Navbar for these routes
  const hideNavbarRoutes = ["/signup", "/login"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/create-event' element={<EventForm/>}></Route>
      </Routes>
    </>
  );
};

export default App;