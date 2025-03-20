import './App.css'
import Services from './components/Second'
import Hero from './components/Hero'
import Third from './components/Third'
import Pricing from './components/Last'
import WorkingStep from './components/Fourth'
 
function App() {


  return (
    <div className='font-primary overflow-x-hidden'>
     <Hero/>
     <Services/>
     <Third/>
     <WorkingStep/>
     <Pricing/>
    </div>
  )
}

export default App
