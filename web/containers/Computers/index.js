import React, {Component} from 'react';
import styles from './Computers.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import ComputerGrid from '../../components/ComputerGrid';

export default class Computers extends Component {
  render() {
  	return (
    	<div className={styles.container}>
    		<Navbar/>

       	<div className={styles.navContainer}>
       	  <LeftSideNav/>
            <div className={styles.centerContainer}>
                <ComputerGrid stockImage="https://i.imgur.com/CXVn2nx.png"
                            headerText="13 inch MacBook Pro with Retina display"
                            descriptionText="2.9 GHz dual-core Intel Core i5 processor 
                                            (Turbo Boost up to 3.1 GHz) 3MB shared L3 
                                            cache 512GB PCle-based flash storage 
                                            Built-in battery (10 hours)"
                            price="$2,023.00"

                            stockImage2="https://i.imgur.com/UNanhOf.png"
                            headerText2="15 inch MacBook Pro with Retina display"
                            descriptionText2="2.5 GHz quad-core Intel Core i7 procesor
                                            (Turbo  Boost up 3.7 GHz) 6MB shared L3 
                                            cache 128 GB PCle-based flash storage
                                            Built-in battery (10 hours)"
                            price2="$2,483.00"

                            stockImage3="https://i.imgur.com/UvBtnhH.png"
                            headerText3="Apple Mac Mini"
                            descriptionText3="2.8GHz dual-core intel Core i5
                                            8GB memory, 1TB Fusion Drive
                                            Intel Iris Graphics, OS X EL Capitan"
                            price3="$1,103.00"

                            stockImage4="https://i.imgur.com/8ObFu9H.png"
                            headerText4="14 inch Dell Latitude 7000 Series (E7450)"
                            descriptionText4="Intel Core TM i5-5300U (Dual Core, 2.3GHz, 3M cache, 15W)
                                            4GB 1600Hz DDR2L Memory, 128GB SATA Class 20 
                                            SSD, Built-in battery (11.5 hours)"
                            price4="$1,444.15"

                            stockImage5="https://i.imgur.com/GR04M3X.png"
                            headerText5="27 inch Dell U2715H LED Backlit LCD Monitor"
                            descriptionText5="IPS Technology HDMI / Mini DisplayPort / DisplayPort
                                            2560 x 1440 Resolution"
                            price5="$135.63"

                            stockImage6="https://i.imgur.com/1kPEglM.png"
                            headerText6="23 inch Dell P2314H LED Backlit LCD Monitor"
                            descriptionText6="1920 x 1080 8ms IPS Technology D-Sub, 
                                             DVI, DisplayPort, USB 2.0"
                            price6="$165.00">
                </ComputerGrid>
            </div>
        </div>
        <hr/>
        <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
    </div>
    );
  }
}