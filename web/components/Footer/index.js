import React, {Component, PropTypes} from 'react';
import styles from './Footer.scss';

export default class Footer extends Component {
	render() {
    	return (
    		<div id="bottomPage" className={styles.bottomPage}>
    			{this.props.bottomPage}
    		</div>
   		);
   	}
 }

 Footer.propTypes = {
	bottomPage: PropTypes.string,
}; 