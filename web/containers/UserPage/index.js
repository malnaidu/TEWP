import React, {Component} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default class UserPage extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>
        <Footer/>
    	</div>
    );
  }
}
