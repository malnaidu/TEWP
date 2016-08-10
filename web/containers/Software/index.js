import React, {Component} from 'react';
import styles from './Software.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import ScrollNav from '../../components/ScrollNav';

export default class Software extends Component {
  render() {
  	return (
    	<div>
    		<Navbar/>

        <div className={styles.titleBanner}>
          <span className={styles.title}>Software</span>
        </div>

        <br/>
        <br/>

        	<div className={styles.navContainer}>
        		<LeftSideNav/>
              <div className="col-md-2"/>
                <ScrollNav/>
        	</div>
          <hr/>
          <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
    	</div>
    );
  }
}
