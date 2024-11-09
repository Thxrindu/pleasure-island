import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard/Dashboard';
import Featured from './pages/Featured/Featured';
import Packages from './pages/Packages/Packages';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Featured />
      <Packages />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
