import { HashRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Artists from "./Pages/Artists";
import News from "./Pages/News";
import Request from "./Pages/Request";

function Navbar() {
    return (
        <ul className="navbar">
            <li className="navitemleft"><a href="#/">Artist Alley</a></li>
            <li className="navitemright"><a href="#/Request">Request</a></li>
            <li className="navitemright"><a href="#/News">News</a></li>
            <li className="navitemright"><a href="#/Artists">Artists</a></li>
            <li className="navitemright"><a href="#/Gallery">Gallery</a></li>
        </ul>
    );
}

class App extends Component {
    render() {
        return (
            <HashRouter >
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Gallery" element={<Gallery />} />
                    <Route exact path="/Artists" element={<Artists />} />
                    <Route exact path="/News" element={<News />} />
                    <Route exact path="/Request" element={<Request />} />
                    <Route exact path="/*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default App;