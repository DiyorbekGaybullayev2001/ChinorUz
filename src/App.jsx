import './App.css'
import About from './components/about/about'
import Catalog from './components/catalogs/catalog'
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



function App() {

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

export default App
