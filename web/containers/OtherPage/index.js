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
        <br/>
        <br/>

        <div className={styles.titleBanner}>
          <span className={styles.title}>Request Something Different</span>
        </div>

        <br/>
        <br/>
        <LeftSideNav/>

        <div className={styles.container}>
          <div id="tooltip" className={styles.tooltip}>
              What type
              <span className={styles.tooltiptext}> Required Fields </span>
          </div>
          
          <br/>
          <br/>

            <select className={styles.select}>
              <option value ="Computer">Computer</option>
              <option value ="Software">Software</option>
              <option value ="Accessories">Accessories</option>
              <option value ="Mobile">Mobile</option>
            </select>

            <br/>
            <br/>
            <br/>
            <br/>
            <text> Additional Information </text>
            <br/>
            <br/>
            <textarea rows="10" cols="90"/>
            <br/>
            <br/>
            <div id="submit" className={styles.submit}>
              <a href="#" class="submit">Submit to ServiceNow</a>
            </div>

            <br/>
            <br/>

        </div>
        <hr/>
        <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
        <br/>
        <br/>
      </div>
    );
  }
}