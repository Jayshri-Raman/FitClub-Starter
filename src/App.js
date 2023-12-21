import './App.css';
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Plans from './Components/Plans/Plans';
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Footer/>
          
    </div>
  );
}

export default App;
