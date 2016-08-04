import React, {Component} from 'react';
import styles from './Mobile.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';

export default class Mobile extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>

    		 <div className={styles.navContainer}>
       			<LeftSideNav>
       			</LeftSideNav>
    		</div>
        <hr/>
        <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
    	</div>
    );
  }
}
