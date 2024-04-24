import Home from './views/Home';
import SiteNav from './layout/Nav';
import About from './views/About';
import Products from './views/Products';
import { Routes, Route } from "react-router-dom"
import Contact from './views/Contact';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import CallBackExplain from './views/CallBackExplain';
// import { createContext, useState } from 'react';

// export let ProductsContext = createContext()

function App() {

  // let [numOfProducts , setNumOfProducts] = useState(0)

  let theme = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={theme.theme}>
      {/* <ProductsContext.Provider value={{numOfProducts}}> */}
      <SiteNav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' Component={Products} />
        <Route path='/contact' Component={Contact} />
        <Route path='/call' Component={CallBackExplain} />
      </Routes>
      {/* </ProductsContext.Provider> */}
    </div>
  )
}

export default App
