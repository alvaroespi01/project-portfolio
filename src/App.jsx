import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Slogan from './modules/Slogan.jsx'
import HomePage from './modules/HomePage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import products from './data/products.js';
import GalleryPage from './modules/GalleryPage.jsx';
import StaffPage from './modules/StaffPage.jsx';
import Navigation from './modules/Navigation.jsx';

// import BucketListPage from './modules/bucketList/BucketListPage.jsx';
// import BucketListAdd from './modules/bucketList/BucketListAdd.jsx';
// import { BucketListEdit } from './modules/bucketList/BucketListEdit.jsx';

// import MoviePage from './modules/movies/MoviePage.jsx';
// import MovieAdd from './modules/movies/Movieadd.jsx'
// import { MovieEdit } from './modules/movies/MovieEdit.jsx';



// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count,   setCount]      = useState(0)
  // const [movie,      setMovie]      = useState([]);
  // const [experience, setBucketList] = useState([]);

  return (
    <>
      <header>
        <h1>Alvaro Espinoza
          <img  src="/favicon-32x32.png" alt="Favicon"/>
        </h1>
        <Slogan />
      </header>

      <Router>
        <Navigation />
        <main>
            <section>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/topicsPage"          element={<TopicsPage />}></Route>
                    <Route path="/ordersPage"          element={<OrderPage products={products} />}></Route>
                    <Route path="/galleryPage"         element={<GalleryPage />}></Route>
                    <Route path="/contactPage"         element={<ContactPage />}></Route>
                    <Route path="/staffPage"           element={<StaffPage />}></Route>

                    {/* <Route path="/moviesPage"          element={<MoviePage setMovie={setMovie}/>}></Route>
                    <Route path="/create"              element={<MovieAdd />} />
                    <Route path="/update"              element={<MovieEdit movieToEdit={movie} />} /> */}

                    {/* <Route path="/bucketListPage"      element={<BucketListPage setBucketList={setBucketList}/>}></Route>
                    <Route path="/addExperience"       element={<BucketListAdd />} />
                    <Route path="/updateExperience"    element={<BucketListEdit experienceToEdit={experience} />} /> */}
                </Routes>
            </section>
        </main>
      </Router>

      <footer>
          <p>&copy; {new Date().getFullYear()} Alvaro Espinoza</p>
      </footer>
          

    </>
  )
}

export default App
