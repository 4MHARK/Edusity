import React from 'react';
import Navbar from './component/navbar/navbar';
import Hero from './component/Hero/Hero';
import Programs from './component/Programs/Programs';
import Title from './component/Title/Title';
import About from './component/About/About';
import Campus from './component/Campus/Campus';
import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';


const App = () => {
  return (
    <div>
    <Navbar/>
    < Hero/>
   <div className="container">
   <Title subTitle='OUR PROGRAM' title='What We Offer'/>
   <Programs/>
   <About/>
   <Title subTitle='GALLERY' title='Campus Photos'/>
   <Campus/>
   <Title subTitle='TESTIMONIALS' title='What Student Says'/>
   <Testimonials/>
   <Title subTitle='CONTACT US' title='Get in Touch'/>
   <Contact/>
   </div>
   <Footer/>
    </div>
  );
}

export default App;
