import React, {Component} from 'react';
import styles from './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
	<div id="container" className={styles.container}>
		<div id="zillowLogo" className={styles.zillowLogo}>
			<div id="logoPosition" className={styles.logoPosition}>
				<img src="https://i.imgur.com/J9DVrvQ.png" alt= "Zillow Group" width="600" height="65"/>
			</div>

			<div id="search" className={styles.search}>
				<input type="text" placeholder="Search" className={styles.searchInput}></input>
			</div>
		</div>

		<div id="navLinks" className={styles.navLinks}>
			<span id="greeting" className={styles.greeting}>
				Welcome, [Username]!
			</span>
			<span id="links" className={styles.links}>
				<span className={styles.links}>Logout</span>
				<span className={styles.links}>Wish List</span>
				<span className={styles.links}>Cart</span>
			</span>
		</div>
    </div>

    );
  }
}