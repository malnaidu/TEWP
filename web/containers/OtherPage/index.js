import React, {Component} from 'react';
import styles from './OtherPage.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';

export default class OtherPage extends Component {
  render() {
  	return (
    	<div>
    		<Navbar/>

        	<div className={styles.titleBanner}>
          		<span className={styles.title}>Request Something Different</span>
        	</div>

       		<br/>
        	<br/>

        	<LeftSideNav/>
        	
        	<hr/>
        	<Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
      </div>
    );
  }
}