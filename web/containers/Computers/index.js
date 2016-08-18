import React, {Component} from 'react';
import styles from './Computers.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import SquareGrid from '../../components/SquareGrid';
import Other from '../../components/Other';
import { ajaxAction } from '../../actions';

export default class Computers extends Component {
    constructor(props) {
        super(props);
        ajaxAction("0")
    }
  render() {
  	return (
    	<div>
    		<Navbar/>
            <br/>
            <br/>
            <div className={styles.titleBanner}>
                <span className={styles.title}>Computers</span>
            </div>

            <br/>
            <br/>

           	<div className={styles.navContainer}>
           	    <LeftSideNav/>
                    <div className="col-md-4"/>
                        <div className="row">
                            <div className="col-md-8"> 
                                <SquareGrid imageUrl=""
                                            headerText=""
                                            descriptionText="">
                                </SquareGrid>

                                <SquareGrid imageUrl=""
                                            headerText=""
                                            descriptionText="">
                                </SquareGrid>

                                <SquareGrid imageUrl=""
                                            headerText=""
                                            descriptionText="">
                                </SquareGrid>
                            </div>
                        </div>

                        <div class="row">
                            <div className="col-md-8">
                                <SquareGrid imageUrl=""
                                            headerText=""
                                            descriptionText="">
                                </SquareGrid>
      
                                <SquareGrid imageUrl=""
                                            headerText=""
                                            descriptionText="">
                                </SquareGrid>

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
                    <br/>

                </div>
        );
    }
}