import './App.css'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import WorkingStep from './components/WorkingStep'

function App() {


  return (
    <div className='font-primary overflow-x-hidden'>
     <Navbar/>
     <Hero/>
     <Services/>
     <About/>
     <WorkingStep/>
     <Pricing/>
     <Testimonial/>
    </div>
  )
}

export default App
