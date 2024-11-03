import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Dashboard />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
