import './App.css';
import NameSection from './Component/Name';
import NavBar from './Component/Navbar';
import './CSS/Navbar.css'
import './CSS/Name.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <NameSection />
    </div>
  );
}

export default App;
