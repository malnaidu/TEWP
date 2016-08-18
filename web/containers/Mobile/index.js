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
        <br/>
        <br/>
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
                  <SquareGrid imageUrl=""
                              headerText=""
                              descriptionText="">
                  </SquareGrid>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                <br/>
                <br/>
                <br/>
                  <SquareGrid imageUrl=""
                              headerText=""
                              descriptionText="">
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

