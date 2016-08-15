import React, {Component, PropTypes} from 'react';
import styles from './Tile.scss';
import { Link } from 'react-router';

export default class Tile extends Component {
  render() {
    return (
        <div className={styles.container}>
            <div id="panel">
                <div id="linkRoute" className={styles.linkRoute}>
                    <Link to={this.props.linkRoute}>
                        <div id="imageUrl">
                            <img src={this.props.imageUrl} alt="imageUrl" width="250" height="150"/>
                        </div>
                        <div className={styles.backgroundColor}>
                            <div id="header" className={styles.header}>
                                {this.props.header}
                            </div>

                            <div id="subHeader" className={styles.subHeader}>
                                {this.props.subHeader}
                            </div>

                            <div id="description" className={styles.description}>
                                {this.props.description}  
                            </div>
                        </div>
                    </Link>
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
    linkRoute: PropTypes.string,
};
