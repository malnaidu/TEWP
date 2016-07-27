import React, {Component, PropTypes} from 'react';
import styles from './Tile.scss';
import { Link } from 'react-router';

export default class Tile extends Component {
  render() {
    return (
        <div>
            <div id="leftPannel">
                <div id="header">
                    {this.props.header}
                </div>

                <div id="subHeader">
                    {this.props.subHeader}
                </div>

                <div id="description">
                    {this.props.description}  
                </div>

                <div id="linkRoute">
                    <Link to={this.props.linkRoute}>
                        Show All
                    </Link>
                </div>
            </div>

            <div id="rightPannel">
                <div id="imageUrl">
                </div>
            </div>
        </div>

    );
  }
}

Tile.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    linkRoute: PropTypes.string
};
