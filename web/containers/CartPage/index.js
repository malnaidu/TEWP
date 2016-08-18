import React, {Component} from 'react';
import styles from './CartPage.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import CartTotal from '../../components/CartTotal';
import CartBox from '../../components/CartBox';


export default class CartPage extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<br/>
				<div className={styles.titleBanner}>
                	<span className={styles.title}>Your Cart</span>
           	 	</div>
	            <div className={styles.container}>
	            	<LeftSideNav/>
	            	<br/>
	            	<CartBox/>
	            	<br/>
	            	<CartTotal/>
	            </div>
	            <hr/>
                <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
            </div>
		);
	}
}