import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard/Dashboard';
import Packages from './pages/Packages/Packages';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Dashboard />
      <Packages />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
