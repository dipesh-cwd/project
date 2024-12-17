import Home from "./Home.jsx";
import Footer from "./component/footer/Footer.jsx";
import About from "./component/about/About.jsx";
import Contact from "./component/contact/Contact.jsx";
import Error from "./component/error/Error.jsx";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header.jsx";
import Privacy from "./component/privacy/Privacy.jsx";
import Setting from "./component/setting/Setting.jsx";
import Profile from "./component/profile/Profile.jsx";
import Help from "./component/help/Help.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacy and policy" element={<Privacy />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/setting" element={<Setting />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
