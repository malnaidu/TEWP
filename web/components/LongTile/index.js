import React, {Component, PropTypes} from 'react';
import styles from './Longtile.scss';
import { Link } from 'react-router';

export default class LongTile extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div id="bottomHeader1" className={styles.bottomHeader1}>
					{this.props.bottomHeader1}
						<div id="linkRoute" className={styles.linkRoute}>
							<Link to={this.props.linkRoute}>
								Show All
							</Link>
						</div>
				</div>
				
				<div id="imageUrl">
					<img src={this.props.imageUrl} alt="Apple Keyboard" width="185" height="130"></img>
						<div id="itemName" className={styles.itemName}>
							<div id="centerText" className={styles.centerText}>
								{this.props.itemName}
							</div>
						</div>
				</div>

				<div id="imageUrl2">
					<img src={this.props.imageUrl2} alt="Mouse" width="150" height="170"></img>
						<div id="itemName2" className={styles.itemName2}>
							<div id="centerText" className={styles.centerText}>
								{this.props.itemName2}
							</div>
						</div>
				</div>	

				<div id="bottomHeader2" className={styles.bottomHeader2}>
					{this.props.bottomHeader2}
						<div id="linkRoute2" className={styles.linkRoute2}>
							<Link to={this.props.linkRoute2}>
								Show All
							</Link>
						</div>
				</div>

				<div id="imageUrl3">
					<img src={this.props.imageUrl3} alt="Mifi" width="175" height="133"></img>
						<div id="itemName3" className={styles.itemName3}>
							<div id="centerText" className={styles.centerText}>
								{this.props.itemName3}
							</div>
						</div>
				</div>
				
				<div id="imageUrl4">
					<img src={this.props.imageUrl4} alt="Tablet" width="164" height="164"></img>
						<div id="itemName4" className={styles.itemName4}>
							<div id="centerText" className={styles.centerText}>
								{this.props.itemName4}
							</div>
						</div>
				</div>
				
			</div>
	   	);
	}
}

LongTile.propTypes = {
	bottomHeader1: PropTypes.string,
	bottomHeader2: PropTypes.strings,
	imageUrl: PropTypes.string,
	imageUrl2: PropTypes.string,
	imageUrl3: PropTypes.string,
	imageUrl4: PropTypes.string,
	linkRoute: PropTypes.string,
	linkRoute2: PropTypes.string,
	itemName: PropTypes.string,
	itemName2: PropTypes.string,
	itemName3: PropTypes.string,
	itemName4: PropTypes.string,
}; 