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
                      subHeader= "Laptops and Desktops"
                      linkRoute="/computers"
                      imageUrl="https://i.imgur.com/1kPEglM.png">
               </Tile>
            </div>

            <div className={styles.tileContainer}>
               <Tile  header="Software" 
                      subHeader= "Adobe, Microsoft, and more"
                      linkRoute="/software"
                      imageUrl="http://i.imgur.com/W26vycT.png">
               </Tile>
            </div>


            <div className={styles.tileContainer}>
               <Tile  header="Accessories" 
                      subHeader= "Keyboards, Mice, and more"
                      linkRoute="/accessories"
                      imageUrl="http://i.imgur.com/Tglnzvi.png">
               </Tile>
            </div>

            <div className={styles.tileContainer}>
               <Tile  header="Mobile" 
                      subHeader= "Tablets and Mifis"
                      linkRoute="/mobile"
                      imageUrl="http://i.imgur.com/ywx7XAw.png?1">
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
