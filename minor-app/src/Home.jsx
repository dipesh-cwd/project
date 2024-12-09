import Header from "./component/header/Header.jsx";
import Login from "./component/login_page/Login.jsx";
import './Home.css'
import LogoPic from "./component/logoPic/LogoPic.jsx";

function Home() {
 
    return (
      <div className="home">
        <Header/>
        <LogoPic/>
        <Login/>
        
      
        
      </div>
    )
  }
  
  export default Home;
  