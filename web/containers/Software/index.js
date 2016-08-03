import React, {Component} from 'react';
import styles from './Software.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';

export default class Software extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>
        	<Footer/>

        	<div className={styles.navContainer}>
        		<LeftSideNav>
        		</LeftSideNav>
        	</div>
    	</div>
    );
  }
}
