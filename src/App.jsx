import Header from './components/Header'
import HomeSlider from './components/HomeSlider'
import Nav from './components/Nav'
import OurMission from './components/OurMission'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import Products from './components/Products'

import styles from './styles.module.css'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className={styles.container} >
        <HomeSlider />
        <OurMission />
        <Products />
        <Technologies />
        <Footer />
      </main>
    </>
  )
}

export default App
