import React, {Component} from 'react';
import styles from './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
	<div id="container" className={styles.container}>
		<div id="zillowLogo" className={styles.zillowLogo}>
			<div id="logoPosition" className={styles.logoPosition}>
				<a href="/">
					<img src="https://i.imgur.com/J9DVrvQ.png" alt= "Zillow Group" width="400" height="45"/>
				</a>
				<br/>
			</div>
		</div>

		<div id="navLinks" className={styles.navLinks}>
			<span id="greeting" className={styles.greeting}>
				<a href="#" className={styles.links}>Welcome, [Username]!</a>
			</span>
			<span id="links" className={styles.links}>
				<a href="https://zillow.service-now.com/zss/home.do" className={styles.links}> ServiceNow</a>
				<a herf="#" className={styles.links}>Cart</a>
			</span>
		</div>
    </div>

    );
  }
}