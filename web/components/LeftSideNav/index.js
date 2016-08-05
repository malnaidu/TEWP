import React, {Component, PropTypes} from 'react';
import styles from './LeftSideNav.scss';
import { Link } from 'react-router';

export default class LeftSideNav extends Component { 
	render() {
		return (
			<div id="position" className={styles.position}>
				<div id="catagory" className={styles.catagory}>
	  				<a> Products </a>
	  				<div id="lineBreak" className={styles.lineBreak}/>
	  			</div>

	  			<div id="subText" className={styles.subText}>
	  				<a href="#" target="_blank">Computers</a>
	  				<div id="lineBreak2" className={styles.lineBreak2}/>
	  			</div>

	  			<div id="linkText" className={styles.linkText}>
	  				<a href="#" target="_blank">MacBooks</a>
	  				<div id="lineBreak" className={styles.lineBreak}/>
	  				<a href="#" target="_blank">PC Laptops</a>
	  				<div id="lineBreak" className={styles.lineBreak}/>
	  				<a href="#" target="_blank">Desktops</a>
	  				<div id="lineBreak" className={styles.lineBreak}/>

				</div>

				<div id="subText" className={styles.subText}>
					<a href="#" target="_blank">Software</a>
					<div id="lineBreak2" className={styles.lineBreak2}/>
				</div>

				<div id="linkText" className={styles.linkText}>
					<a href="#" target="_blank">Microsoft</a>
					<div id="lineBreak" className={styles.lineBreak}/>
					<a href="#" target="_blank">Adobe</a>
					<div id="lineBreak" className={styles.lineBreak}/>
					<a href="#" target="_blank">Apple</a>
					<div id="lineBreak" className={styles.lineBreak}/>
				</div>

				<div id="subText" className={styles.subText}>
					<a href="#" target="_blank">Accessories</a>
					<div id="lineBreak2" className={styles.lineBreak2}/>
				</div>

				<div id="linkText" className={styles.linkText}>
						<a href="#" target="_blank">Keyboards</a>
						<div id="lineBreak" className={styles.lineBreak}/>
						<a href="#" target="_blank">Mouse</a>
						<div id="lineBreak" className={styles.lineBreak}/>
						<a href="#" target="_blank">Headphones</a>
						<div id="lineBreak" className={styles.lineBreak}/>
				</div>

				<div id="subText" className={styles.subText}>
					<a href="#" target="_blank">Mobile</a>
					<div id="lineBreak2" className={styles.lineBreak2}/>
				</div>

				<div id="linkText" className={styles.linkText}>
					<a href="#" target="_blank">Mifi</a>
					<div id="lineBreak" className={styles.lineBreak}/>
					<a href="#" target="_blank">Tablet</a>
					<div id="lineBreak" className={styles.lineBreak}/>
					<a href="#" target="_blank">iPhones</a>
				</div>
			</div>
		);
	}
}
