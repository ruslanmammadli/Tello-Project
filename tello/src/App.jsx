import React,{useEffect} from 'react';

import {Routes, Route} from 'react-router-dom'

import Layout from './components/Layout/Main';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import {commerce} from './commerce.js'


function App() {

  useEffect(() => {

    // commerce.products.list().then((product) => console.log(product));
    // commerce.categories.list().then((category) => console.log(category));
    
  }, [])
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          {/* <Route path='' element={} /> */}
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

