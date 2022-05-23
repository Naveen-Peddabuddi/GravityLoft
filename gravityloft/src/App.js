
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import ExpertCloud from './Components/ExpertCloud';
import Searchbox from './Components/Searchbox';
import Consultbox from './Components/Consultbox';
import FAQ from './Components/FAQ';
import Footerbox from './Components/Footerbox';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Form />
     <ExpertCloud />
     {/* <Searchbox />
     <Consultbox /> */}
     <FAQ />
    <Footerbox />
    </div>
  );
}

export default App;
