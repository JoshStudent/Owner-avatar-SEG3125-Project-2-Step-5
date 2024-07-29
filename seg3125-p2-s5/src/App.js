import { HashRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import PageNotFound from "./Pages/PageNotFound";
import { Link } from "../node_modules/react-router-dom/dist/index";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Artists from "./Pages/Artists";
import News from "./Pages/News";
import RequestHub from "./Pages/RequestHub";
import Request from "./Pages/Request";
import Request2 from "./Pages/Request2";

function Navbar(lang) {
    return (
        <ul className="navbar">
            <li className="navitemleft">
                <Link to={'/'} state={{ language: lang }}>
                    Artist Alley
                </Link>
            </li>

            <li className="navitemright">
                <Link to={'/RequestHub'} state={{ language: lang }}>
                    <img className="navimg" src={require('./Pages/assets/icons/req.png')} alt="" />
                </Link>
            </li>

            <li className="navitemright">
                <Link to={'/News'} state={{ language: lang }}>
                    <img className="navimg" src={require('./Pages/assets/icons/bell.png')} alt="" />
                </Link>
            </li>

            <li className="navitemright">
                <Link to={'/Artists'} state={{ language: lang }}>
                    <img className="navimg" src={require('./Pages/assets/icons/artist.png')} alt="" />
                </Link>
            </li>

            <li className="navitemright">
                <Link to={'/Gallery'} state={{ language: lang }}>
                    <img className="navimg" src={require('./Pages/assets/icons/gallery.png')} alt="" />
                </Link>
            </li>

            <li className="navitemright">
                <Link to={'/'} state={{ language: lang }}>
                    <img className="navimg" src={require('./Pages/assets/icons/home.png')} alt="" />
                </Link>
            </li>
        </ul>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        var storedLang = localStorage.getItem('StoredLang') || "en";

        this.state = {
            language: storedLang
        };
    }

    switchLang(opt) {
        if (opt === 0) {
            this.setState({ language: "it" });
            localStorage.setItem('StoredLang', "it")
        } else {
            this.setState({ language: "en" });
            localStorage.setItem('StoredLang', "en")
        }
    }

    render() {
        return (
            <HashRouter >
                {Navbar(this.state.language)}
                <p className="lang-select">
                    Language: <button onClick={() => this.switchLang(1)}>English</button> <button onClick={() => this.switchLang(0)}>Italian</button>
                </p>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/Gallery" element={<Gallery />} state={{ language: this.state.language }} />
                    <Route exact path="/Artists" element={<Artists />} />
                    <Route exact path="/News" element={<News />} />
                    <Route exact path="/RequestHub" element={<RequestHub />} />
                    <Route exact path="/Request" element={<Request />} />
                    <Route exact path="/Request2" element={<Request2 />} />
                    <Route exact path="/*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default App;