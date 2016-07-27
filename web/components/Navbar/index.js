import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
	<div id="container" className={styles.container}>
		<div id="zillowLogo" className={styles.zillowLogo}>
			<div id="topText" className={styles.topText}>
				<span id="zillowBrand"className={styles.zillowBrand}>Zillow</span>
				<span id="groupText" className={styles.groupText}>GROUP</span>
			</div>
			<div id="bottomText" className={styles.bottomText}>
				ZEUS
			</div>
		</div>

		<div id="search" className={styles.search}>
			<input type="text" placeholder="Search" className={styles.searchInput}></input>
		</div>

		<div id="navLinks" className={styles.navLinks}>
			<span id="greeting" className={styles.greeting}>
				Welcome, Malini Naidu
			</span>
			<span id="links" className={styles.links}>
				<span className={styles.links}>Logout</span>
				<FontAwesome name='fa-heart' /><span className={styles.links}>Wish List</span>
				<span className={styles.links}>Cart</span>
			</span>
		</div>
    </div>

    );
  }
}
