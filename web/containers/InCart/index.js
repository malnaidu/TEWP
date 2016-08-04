import React, {Component} from 'react';
import styles from './InCart.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class InCart extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>
    	</div>

    	<hr/>
    	<Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
    );
  }
}
