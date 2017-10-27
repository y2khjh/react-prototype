import React, { Component } from 'react';
import axios from 'axios';

function buildContentContainer(ChildComponentClass) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                title: "test title",
                content: "test content",
                author: "author",
            };
        }

        componentDidMount() {
            let url = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';
            axios.get(url).then(response => this.setState({content: response.data}));
        }

        render() {
            return <ChildComponentClass {...this.state} {...this.props}/>;
        }
    };
}

export default buildContentContainer;
