import React, {Component} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';

export default class Accessories extends Component {
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
