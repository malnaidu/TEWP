import React, {Component} from 'react';
import styles from './LoginPage.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class LoginPage extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>
        <Footer/>
    	</div>
    );
  }
}
