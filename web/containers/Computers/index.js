import React, {Component} from 'react';
import styles from './Computers.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import SquareGrid from '../../components/SquareGrid';
import Other from '../../components/Other';

export default class Computers extends Component {
  render() {
  	return (
    	<div>
    		<Navbar/>

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
                                <SquareGrid stockImage="https://i.imgur.com/wHqio3i.png"
                                            headerText="13 inch MacBook Pro with Retina display"
                                            descriptionText="2.9 GHz dual-core Intel Core i5 processor 
                                                            (Turbo Boost up to 3.1 GHz) 3MB shared L3 
                                                            cache 512GB PCle-based flash storage 
                                                            Built-in battery (10 hours)"
                                            price="$2,023.00">
                                </SquareGrid>

                                <SquareGrid stockImage="https://i.imgur.com/GR04M3X.png"
                                            headerText="27 inch Dell U2715H LED Backlit LCD Monitor"
                                            descriptionText="IPS Technology HDMI / Mini DisplayPort / DisplayPort
                                                            2560 x 1440 Resolution"
                                            price="$135.63">    
                                </SquareGrid>

                                <SquareGrid stockImage="https://i.imgur.com/mEEDfev.jpg"
                                            headerText="Apple Mac Mini"
                                            descriptionText="2.8GHz dual-core intel Core i5
                                                            8GB memory, 1TB Fusion Drive
                                                            Intel Iris Graphics, OS X EL Capitan"
                                            price="$1,103.00"> 
                                </SquareGrid>
                            </div>
                        </div>

                        <div class="row">
                            <div className="col-md-8">
                                <SquareGrid stockImage="https://i.imgur.com/wHqio3i.png"
                                            headerText="15 inch MacBook Pro with Retina display"
                                            descriptionText="2.5 GHz quad-core Intel Core i7 procesor
                                                            (Turbo  Boost up 3.7 GHz) 6MB shared L3 
                                                            cache 128 GB PCle-based flash storage
                                                            Built-in battery (10 hours)"
                                            price="$2,483.00">
                                </SquareGrid>
      
                                <SquareGrid stockImage="https://i.imgur.com/1kPEglM.png"
                                            headerText="23 inch Dell P2314H LED Backlit LCD Monitor"
                                            descriptionText="1920 x 1080 8ms IPS Technology D-Sub, 
                                                            DVI, DisplayPort, USB 2.0"
                                            price="$165.00">
                                </SquareGrid>

                                <SquareGrid stockImage="https://i.imgur.com/8ObFu9H.png"
                                            headerText="14 inch Dell Latitude 7000 Series (E7450)"
                                            descriptionText="Intel Core TM i5-5300U (Dual Core, 2.3GHz, 3M cache, 15W)
                                                            4GB 1600Hz DDR2L Memory, 128GB SATA Class 20 
                                                            SSD, Built-in battery (11.5 hours)"
                                            price="$1,444.15">
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