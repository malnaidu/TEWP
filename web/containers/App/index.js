import React, {Component} from 'react';
import styles from './App.scss';
import Navbar from '../../components/Navbar';
import Tile from '../../components/Tile';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.subHeader}>
          <span className={styles.subHeaderText}>Tech Request</span>
        </div>
        
        <div className={styles.content}>
            <div className={styles.tileContainer}>
               <Tile  header="Hardware" 
                      subHeader= "Featured Laptop"
                      description="Macbook Pro 15 inch with retina display"
                      imageUrl="http://i.imgur.com/u5XPlQd.png"
                      linkRoute="/computers">
               </Tile>
            </div>

            <div className={styles.tileContainer}>
               <Tile  header="Software" 
                      subHeader= "Featured Software"
                      description="Sketch 3 Interface Design App"
                      imageUrl="http://i.imgur.com/KAVydLd.png"
                      linkRoute="/software">
               </Tile>
            </div>
        </div>
      </div>
    );
  }
}
