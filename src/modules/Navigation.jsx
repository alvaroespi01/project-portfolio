import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <>
        <nav> 
            <Link to="/">Home</Link>
            <Link to="/topicsPage">Topics</Link>
            {/* <Link to="/bucketListPage">Bucket List</Link> */}
            {/* <Link to="/moviesPage">Movies</Link> */}
            <Link to="/ordersPage">Order</Link>
            <Link to="/galleryPage">Gallery</Link>
            {/* <Link to="/contactPage">Contact</Link>
            <Link to="/staffPage">Staff</Link> */}
        </nav>
        </>
    )
}
export default Navigation