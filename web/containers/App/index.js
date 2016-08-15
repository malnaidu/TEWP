import React, {Component} from 'react';
import styles from './App.scss';
import Navbar from '../../components/Navbar';
import Tile from '../../components/Tile';
import Footer from '../../components/Footer';
import { ajaxAction } from '../../actions';

export default class App extends Component {
  constructor(props) {
    super(props);
    ajaxAction("0");
  }

  render() {
    return (
      <div className={styles.container}>
        <Navbar/>
        <br/>
        <div className={styles.subHeader}>
          <span className={styles.subHeaderText}>
            <p>Hardware & Software Marketplace</p>
              <div className={styles.subText}>
                <p> Tools for Efficiency</p>
              </div>
              <div id="search" className={styles.search}>
                <input type="text" placeholder="Search Marketplace" className={styles.searchInput}></input>
              </div>
              <div className={styles.imageContainer}>
                <img src="https://i.imgur.com/C97YNDt.png" width="482" height="315"></img>
              </div>
          </span>
        </div>
        
        <div className={styles.content}>
            <div className={styles.tileContainer}>
               <Tile  header="Computers" 
                      subHeader= "Laptops and Desktops"
                      linkRoute="/computers"
                      imageUrl="https://i.imgur.com/BEPEEkD.jpg">
               </Tile>
            </div>

            <div className={styles.tileContainer}>
               <Tile  header="Software" 
                      subHeader= "Adobe, Microsoft, and more"
                      linkRoute="/software"
                      imageUrl="http://verayo.com/blog/wp-content/uploads/2014/06/Software-and-Hardware.png">
               </Tile>
            </div>


            <div className={styles.tileContainer}>
               <Tile  header="Accessories" 
                      subHeader= "Keyboards, Mice, and more"
                      linkRoute="/accessories"
                      imageUrl="https://i.imgur.com/i6FRuQc.jpg">
               </Tile>
            </div>

            <div className={styles.tileContainer}>
               <Tile  header="Mobile" 
                      subHeader= "Tablets and Mifis"
                      linkRoute="/mobile"
                      imageUrl="https://i.imgur.com/QekuWaE.jpg">
               </Tile>
            </div>
        </div>

            <div className={styles.footerContainer}>
            <hr/>
            <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
        </div>
      </div>
    );
  }
}
