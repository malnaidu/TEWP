import React, {Component} from 'react';
import styles from './Wishlist.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class Wishlist extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>
    	</div>
    );
  }
}
