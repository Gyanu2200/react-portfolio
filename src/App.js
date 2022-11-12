import './App.css';
import { About } from './component/About';
import Contact from './component/Contact';
import Hero from './component/Hero';
import { Layout } from './component/Layout';
import Project from './component/Project';
import Skills from './component/Skills';
import TopNav from './component/TopNav';

function App() {
  return (
    <>
      <Layout>
        <div className="wrapper">
          {/* <!-- nav bar --> */}
          <TopNav/>

          {/* <!-- hero section --> */}
          <Hero/>
          {/* <!-- skills --> */}
          <Skills/>
          {/* <!-- project --> */}
          <Project/>

          {/* <!-- About Me --> */}
          <About/>

          {/* <!-- contact me --> */}
          <Contact/>

          {/* <!-- footer --> */}
        </div>
      </Layout>

    </>
  )
   
  
}

export default App;
