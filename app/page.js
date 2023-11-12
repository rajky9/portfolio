import Image from 'next/image'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Contact2 from './components/Contact2'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Contact2 /> */}
    </main>
  )
}
