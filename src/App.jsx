import Banner from './components/Banner'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes ,Route}from "react-router-dom";
import Footer from './components/Footer'
import OurTeam from './pages/OurTeam'
import Services from './pages/Services'
import Aboutus from './pages/Aboutus'
import Contact from'./pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import RecentProjects from './components/RecentProjects'
import Testimonials from './components/Testimonials';
import KeyServices from './components/KeyServices';
import ContactInformation from './components/ContactInformation';
import WhatWeDo from './components/WhatWeDo';
import ConsultationForm from './pages/ConsultationForm';
import Projects from './pages/Projects';


function App() {
  

  return (
    <Router>
     <ScrollToTop />
    
    <div>
      <Navbar/>
      <Routes>
      <Route path='/'>
              <Route path='/' element={
                  <>     
                       <Banner/>
                       <KeyServices/>
                       <WhatWeDo/>
                       
                       
                       <RecentProjects/>
                       <Testimonials/>
                       <ContactInformation/>
                  </>   } exact />
      </Route>
      <Route path='/services' element={<Services />} />
      <Route path='/about-us' element={<Aboutus />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/team' element={<OurTeam />} />
      <Route path='/consultation' element={<ConsultationForm />} />
      <Route path='/projects' element={<Projects />} />

      </Routes>
      <Footer/>
     
    </div>
    </Router>
  )
}

export default App
