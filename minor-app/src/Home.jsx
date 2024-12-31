// import Header from "./component/header/Header.jsx";
import Home_text from "./component/homeText/Home_text.jsx";
import Login from "./component/login_page/Login.jsx";
import './Home.css'

function Home() {
 
    return (
      <div className="home">
        {/* <Header/> */}
        <Home_text/>
     
        <Login/>
        
      
        
      </div>
    )
  }
  
  export default Home;
  