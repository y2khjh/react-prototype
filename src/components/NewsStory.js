import React, { Component } from 'react';
import buildContentContainer from '../container/ContentContainer';
import './NewsStory.css';

class NewsStory extends Component {
    render() {
        return (
            <div>
                <p>This is a news story id:{this.props.match.params.articleId}</p>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
                <p>{this.props.author}</p>
            </div>
        );
    }
}

export default buildContentContainer(NewsStory);
