import './App.css'
import About from './components/about/about'
import Catalog from './components/catalogs/catalog'
import ClicSwipers from './components/clic swipers/clic-swipers'
import ClicCatalog from './components/clic-catalog/cliccatalogs'
import FAQ from './components/faq/faq'
import Footer from './components/footer/footer'
import Menucompanent from './components/glavni-menu/menu'
import Mebel from './components/mebel/mebel'
import Navbar from './components/navbar/navbar'
import OneCatagory from './components/one-catagory/catagory'
import Partners from './components/partners/partners'
import DownlaodPdf from './components/pdfdownload/dowvloadpdf'
import SendQuestion from './components/sendquestion/sendquestion'
import Swipers from './components/swipers/swiper'

import {BrowserRouter, Routes, Route ,} from 'react-router-dom'

function Menu () {
  return (
    <>
      <Navbar/>
      <Menucompanent/>
      <OneCatagory/>
      <Catalog/>
      <About/>
      <Mebel/>
      <DownlaodPdf/>
      <Partners/>
      <Swipers/>
      <FAQ/>
      <SendQuestion/>
      <Footer/>
    </>
  )
}

function Katalogs () {
  return(
    <>
      <Navbar/>
      <ClicSwipers/>
      <ClicCatalog/>
      <FAQ/>
      <SendQuestion/>
      <Footer/>
    </>
  )
}

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path='/katalogs' element={<Katalogs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
