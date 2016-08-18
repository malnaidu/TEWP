import React, {Component} from 'react';
import styles from './Other.scss';

export default class Other extends Component {
  render() {
    return (
    	<div id="button" className={styles.button}>
    		<div id="button1" className={styles.button1}>
				<a href="/other" class="button">Don't see what you're looking for? Click Here!</a>
			</div>
		</div>
    );
  }
}