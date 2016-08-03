import React, {Component, PropTypes} from 'react';
import styles from './Tile.scss';
import { Link } from 'react-router';

export default class Tile extends Component {
  render() {
    return (
        <div className={styles.container}>
            <div id="leftPanel">
                <div id="header" className={styles.header}>
                    {this.props.header}
                </div>

                <div id="subHeader" className={styles.subHeader}>
                    {this.props.subHeader}
                </div>

                <div id="description" className={styles.description}>
                    {this.props.description}  
                </div>

                <div id="description2" className={styles.description2}>
                    {this.props.description2}  
                </div>

                <div id="linkRoute" className={styles.linkRoute}>
                    <Link to={this.props.linkRoute}>
                        Show All
                    </Link>
                </div>
            </div>

            <div id="rightPanel">
                <div id="imageUrl">
                    <img src={this.props.imageUrl} />
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
    description2: PropTypes.string,
    imageUrl: PropTypes.string,
    linkRoute: PropTypes.string,
};
