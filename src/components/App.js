import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Section from './Section';
import Home from './Home';
import NewsStory from './NewsStory';
import ImageGallery from './ImageGallery';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <header className="app__header">
                        <h1 className="app__title"></h1>
                    </header>
                    <nav className="app__nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/section">Section</Link></li>
                        </ul>
                    </nav>
                    <main className="app__main">
                        <Route exact path="/" component={Home}/>
                        <Route path="/section" component={Section}/>
                        <Route path="/story/:storyId" component={NewsStory}/>
                        <Route path="/gallery/:galleryId" component={ImageGallery}/>
                    </main>
                </div>
            </Router>
       );
    }
}

export default App;
