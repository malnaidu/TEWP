import React, {Component} from 'react';
import styles from './Mobile.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import SquareGrid from '../../components/SquareGrid';
import Other from '../../components/Other';

export default class Mobile extends Component {
  render() {
  	return (
    	<div>
    		<Navbar/>

        <div className={styles.titleBanner}>
          <span className={styles.title}>Mobile</span>
        </div>

        <br/>
        <br/>

    		 <div className={styles.navContainer}>
       			<LeftSideNav/>
            <div className="col-md-3"/>
              <div className="row">
                <div className="col-md-8">
                  <SquareGrid stockImage="http://i.imgur.com/Sug0tqK.png"
                              headerText="Apple iPad Air"
                              descriptionText="16GB with Wifi, Lighting to USB Cable
                              USB Power Adapter, with Retina display"
                              price="$375.00">
                  </SquareGrid>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                <br/>
                <br/>
                <br/>
                  <SquareGrid stockImage="http://i.imgur.com/ywx7XAw.png?1"
                              headerText="Verison Mifi"
                              descriptionText="Connect up to 15 Wifi enabled devices to 4G LTE and 3G."
                              price="$200.00">
                  </SquareGrid>
                </div>
              </div>
          </div>
        <Other/>
        <hr/>
        <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
    	</div>
    );
  }
}

