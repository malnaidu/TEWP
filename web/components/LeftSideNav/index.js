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

	  			<br/>

		  		<div id="subText1" className={styles.subText1}>
		  			<a href="/computers">Computers</a>
		  			<div id="lineBreak2" className={styles.lineBreak2}/>
		  		</div>

		  		<br/>


				<div id="subText2" className={styles.subText2}>
					<a href="/software">Software</a>
					<div id="lineBreak2" className={styles.lineBreak2}/>
				</div>

				<br/>
				
				<div id="subText3" className={styles.subText3}>
					<a href="/accessories">Accessories</a>
					<div id="lineBreak2" className={styles.lineBreak2}/>
				</div>

				<br/>

				<div id="subText4" className={styles.subText4}>
					<a href="/mobile">Mobile</a>
					<div id="lineBreak2" className={styles.lineBreak2}/>
				</div>
			</div>
		);
	}
}
