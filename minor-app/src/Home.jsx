import Header from "./component/header/Header.jsx";
import Footer from "./component/footer/Footer.jsx";
import Login from "./component/login_page/Login.jsx";
import './Home.css'

function Home() {
 
    return (
      <div className="home">
        <Header/>
        <Login/>
        <Footer/>
      </div>
    )
  }
  
  export default Home;
  