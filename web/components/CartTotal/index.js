import React, {Component, PropTypes} from 'react';
import styles from './CartTotal.scss';

export default class CartTotal extends Component {
	render() {
    	return (
    		<div>
    			<div className={styles.container}>
                    <div className={styles.header}>
    				    Total: $140.00
                    </div>

                    <div id="button" className={styles.button}>
                        <div id="button1" className={styles.button1}>
                            Checkout
                        </div>
                    </div>
    			</div>
    		</div>
   		);
   	}
 }

