import React, {Component, PropTypes} from 'react';
import styles from './Longtile.scss';
import { Link } from 'react-router';

export default class LongTile extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div id="bottomHeader" className={styles.bottomHeader}>
					{this.props.bottomHeader}
				</div>

				<div id="imageUrl" className={styles.imageUrl}>
					{this.props.imageUrl}
				</div>

				<div id="linkRoute" className={style.linkRoute}>
					<Link tp={this.props.linkRoute}>
						Show All
					</Link>
				</div>
			</div>

	   	);
	}
}

Tile.propTypes = {
		bottomHeader: PropTypes.string,
		imageUrl: PropTypes.string,
		linkRoute: PropTypes.string

}; 