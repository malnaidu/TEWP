import React, {Component} from 'react';
import styles from './Computers.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import SquareGrid from '../../components/SquareGrid';

export default class Computers extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>

       	<div className={styles.navContainer}>
       	  <LeftSideNav/>
          <SquareGrid/>
        </div>
        <hr/>
        <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
    	</div>
    );
  }
}
