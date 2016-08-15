import React, {Component, PropTypes} from 'react';
import styles from './SquareGrid.scss';
import { Link } from 'react-router';

export default class SquareGrid extends Component {
	render () {
		return (
			<div>
				<div id="imageUrl">
					<img src={this.props.imageUrl}/>
				</div>
				
				<div id="headerText" className={styles.headerText}>
					{this.props.headerText}
				</div>
				
				<div id="descriptionText" className={styles.descriptionText}>
					{this.props.descriptionText}
				</div>
				<br/>
                <div id="linkRoute" className={styles.linkRoute}>
					{this.props.linkRoute}
                </div>
			</div>
		);
	}
}

SquareGrid.PropTypes = { 
	imageUrl: PropTypes.string,
	headerText: PropTypes.string,
	descriptionText: PropTypes.string,
	linkRoute: PropTypes.string,
}