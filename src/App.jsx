import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works ,MobileTech } from './components';
import { Analytics } from "@vercel/analytics/react";
import Footer from './components/footer';
import { useEffect } from "react";

const App = () => {

  useEffect(()=>{
    function isMobile() {
      return /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        localStorage.setItem("isMobile","true")
    }else{
        localStorage.setItem("isMobile","false")
    }
  })
  



  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
      {localStorage?.getItem("isMobile") === "false" ? <Tech /> : <MobileTech/> }
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
      <Analytics /> {/* This should be outside BrowserRouter */}
    </>
  );
};

export default App;
