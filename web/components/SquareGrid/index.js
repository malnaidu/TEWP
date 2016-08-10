import React, {Component, PropTypes} from 'react';
import styles from './SquareGrid.scss';
import { Link } from 'react-router';

export default class SquareGrid extends Component {
	render () {
		return (
			<div>
				<div id="stockImage">
					<img src={this.props.stockImage}/>
				</div>
				
				<div id="headerText" className={styles.headerText}>
					{this.props.headerText}
				</div>
				
				<div id="descriptionText" className={styles.descriptionText}>
					{this.props.descriptionText}
				</div>

				<br/>

				<div id="price" className={styles.price}>
					{this.props.price}
				</div>

                <div id="linkRoute" className={styles.linkRoute}>
					{this.props.linkRoute}
                </div>
			</div>
		);
	}
}

SquareGrid.PropTypes = { 
	stockImage: PropTypes.string,
	headerText: PropTypes.string,
	descriptionText: PropTypes.string,
	price: PropTypes.string,
	linkRoute: PropTypes.string,
}