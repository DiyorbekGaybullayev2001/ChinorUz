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

import {BrowserRouter, Routes, Route , NavLink} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/menu' element={<Navbar/>}/>
      </Routes>
      <Routes>
        <Route path='/katalogs' element={<Navbar/>}/>
      </Routes>
      <Routes>
        <Route path='/menu' element={<Menucompanent/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<OneCatagory/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<Catalog/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<About/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<Mebel/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<DownlaodPdf/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<Partners/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<Swipers/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<FAQ/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<SendQuestion/>}/>,
      </Routes>
      <Routes>
        <Route path='/menu' element={<Footer/>}/>,
      </Routes>

      <Routes>
        <Route path='/katalogs' element={<ClicSwipers/>}/>,
      </Routes>
      <Routes>
        <Route path='/katalogs' element={<ClicCatalog/>}/>,
      </Routes>

      <Routes>
        <Route path='/katalogs' element={<FAQ/>}/>,
      </Routes>
      <Routes>
        <Route path='/katalogs' element={<SendQuestion/>}/>,
      </Routes>
      <Routes>
        <Route path='/katalogs' element={<Footer/>}/>,
      </Routes>
      
    </BrowserRouter>
    

      {/* <Navbar/> */}
      {/* <Menucompanent/> */}
      {/* <OneCatagory/> */}
      {/* <Catalog/> */}
      {/* <About/> */}
      {/* <Mebel/> */}
      {/* <DownlaodPdf/> */}
      {/* <Partners/> */}
      {/* <Swipers/> */}
      {/* <FAQ/> */}
      {/* <SendQuestion/> */}
      {/* <Footer/> */}

      {/* <ClicSwipers/>
      <ClicCatalog/> */}
    </>
  )
}

export default App
