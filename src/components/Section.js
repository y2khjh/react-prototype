import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

class Section extends Component {
    render() {
        return (
            <div>
                <div><Link to="/story/1">Story One</Link></div>
                <div><Link to="/story/2">Story Two</Link></div>
                <div><Link to="/gallery/3">Gallery One</Link></div>
                <div><Link to="/gallery/3">Gallery Two</Link></div>
            </div>
        );
    }
}

export default Section;
