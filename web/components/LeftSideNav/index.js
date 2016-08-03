import React, {Component, PropTypes} from 'react';
import styles from './LeftSideNav.scss';
import { Link } from 'react-router';

export default class LeftSideNav extends Component { 
	render() {
		return (
			<div id="mySidenav" class="sidenav">
				<div id="catagory" className={styles.catagory}>
					{this.props.catagory}
	  				<a>Shop Catagory</a>
	  			</div>

	  			<div id="subText" className={styles.subText}>
	  				{this.props.subText}
	  				<a>All Computers</a>
	  			</div>

	  			<div id="linkText" className={styles.linkText}>
	  				{this.props.linkText}
	  				<a>MacBooks</a>
	  				<br/>
	  				<a>PC Laptops</a>
	  				<br/>
	  				<a>Desktops</a>
	  				<br/>
				</div>

				<div id="subText" className={styles.subText}>
					{this.props.subText}
					<a>All Software</a>
				</div>

				<div id="linkText" className={styles.linkText}>
					{this.props.linkText}
					<a>Microsoft</a>
					<br/>
					<a>Adobe</a>
					<br/>
					<a>Apple</a>
				</div>

				<div id="subText" className={styles.subText}>
					{this.props.subText}
					<a>All Accessories</a>
				</div>

				<div id="linkText" className={styles.linkText}>
					{this.props.linkText}
						<a>Keyboards</a>
						<br/>
						<a>Mouse</a>
						<br/>
						<a>Headphones</a>
				</div>

				<div id="subText" className={styles.subText}>
					{this.props.subText}
					<a>All Mobile</a>
				</div>

				<div id="linkText" className={styles.linkText}>
					{this.props.linkText}
					<a>Mifi</a>
					<br/>
					<a>Tablet</a>
					<br/>
					<a>iPhones</a>
				</div>
			</div>
		);
	}
}

LeftSideNav.propTypes = { 
	catagory: PropTypes.string,
	subText: PropTypes.string,
	subText2: PropTypes.string,
	subText3: PropTypes.string,
	subText4: PropTypes.string,
	linkText: PropTypes.string,
}
