import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Home from "./sections/Home"
import Interested from "./sections/Interested"
import Nav from "./sections/Nav"
import Skillset from "./sections/Skillset"
import Testimonials from "./sections/Testimonials"
import Themes from "./sections/Themes"

function App() {


    return (
      <>
        <div className="w-screen min-h-screen flex flex-col p-4 bg-black text-white overflow-hidden gap-y-10 lg:gap-y-20">
          <Nav />
          <Home />
          <About />
          <Skillset />
          <Experience />
          <Themes />
          {/* <Testimonials /> */}
          <Interested />
          <Contact />
        </div>
      </>
    )
}

export default App
