import Navi from "./routes/Navi";
import Main from "./routes/Main";
import Skill from "./routes/Skill";
import Hobby from "./routes/Hobby";
import Contact from "./routes/Contact";
import Footer from "./routes/Footer";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Navi/>
        <Main/>
        <Skill/>
        <Hobby/>
        <Contact/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
