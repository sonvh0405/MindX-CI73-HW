import Header from './Component/Header.js'
import Body from './Component/Body.js'
import Footer from './Component/Footer.js'
import './App.css'
import UserContext from './Component/UserContext'
import {useState} from "react";
import "./App.css"
import LanguageContext from "./Component/LanguageContext"

function App() {
  const [username, setUsername] = useState("");
  const [loginstatus, setLoginStatus] = useState(false);
  const [language, setLanguage] = useState("vi");

  return (
    <LanguageContext.Provider value={{language: language, setLanguage: setLanguage}}>
      <UserContext.Provider value={{username: username, setUsername: setUsername, loginstatus: loginstatus, setLoginStatus: setLoginStatus}}>
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
    </UserContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
