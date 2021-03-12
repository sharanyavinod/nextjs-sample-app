import React, { Component } from 'react';
import { withMappable } from '@adobe/aem-react-editable-components';

export const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    },
    resourceType: 'wknd-spa-react/components/image'
};

export default class Image extends Component {
    get content() {
        return <img
                className="Image-src"
                src={'http://localhost:4502' + this.props.src}
                alt={this.props.alt}
                title={this.props.title ? this.props.title : this.props.alt} />;
    }

    render() {
        if(ImageEditConfig.isEmpty(this.props)) {
            return null;
        }
        return (
            <div className="Image">
                {this.content}
            </div>
        );
    }
}

export const AEMImage = withMappable(Image, ImageEditConfig);
