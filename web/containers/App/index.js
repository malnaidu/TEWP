import React, {Component} from 'react';
import styles from './App.scss';
import Navbar from '../../components/Navbar';
import Tile from '../../components/Tile';
import LongTile from '../../components/LongTile';
import Footer from '../../components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Navbar/>

        <div className={styles.subHeader}>
          <span className={styles.subHeaderText}>Tech Request</span>
        </div>
        
        <div className={styles.content}>
            <div className={styles.tileContainer}>
               <Tile  header="Computers" 
                      subHeader= "Featured Laptop"
                      description="Macbook Pro 15 inch with retina display"
                      imageUrl="http://i.imgur.com/u5XPlQd.png"
                      linkRoute="/computers">
               </Tile>
            </div>

            <div className={styles.tileContainer}>
               <Tile  header="Software" 
                      subHeader= "Featured Software"
                      description="Sketch 3"
                      description2="Interface Design App"
                      imageUrl="http://i.imgur.com/KAVydLd.png"
                      linkRoute="/software">
               </Tile>
            </div>
        </div>

        <div className={styles.content}>
          <div className={styles.LongTileContainer}>
            <LongTile bottomHeader1="Accessories"
                      imageUrl="https://i.imgur.com/ppLC6Y1.png"
                      itemName="Keyboards"
                      imageUrl2="https://i.imgur.com/zdcgRij.png"
                      itemName2="Mouse"
                      linkRoute="/accessories"
                      bottomHeader2="Mobile"
                      imageUrl3="https://i.imgur.com/toM1cyQ.png"
                      itemName3="Mifi"
                      imageUrl4="https://i.imgur.com/0wfenGQ.jpg"
                      itemName4="Tablet"
                      linkRoute2="/mobile">
            </LongTile>
            <div className={styles.footerContainer}>
            <hr/>
              <Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
