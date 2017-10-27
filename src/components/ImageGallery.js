import React, { Component } from 'react';
import buildContentContainer from '../container/ContentContainer';
import './ImageGallery.css';

class ImageGallery extends Component {
    render() {
        return (
            <div>
                <p>This is a gallery id:{this.props.match.params.galleryId}</p>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
                <p>{this.props.author}</p>
            </div>
        );
    }
}

export default buildContentContainer(ImageGallery);
