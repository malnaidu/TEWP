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
        
         <Tile  header="Hardware" 
                subHeader= "Featured Laptop"
                discription="Macbook Pro"
                imageUrl="url"
                linkRoute="/computers">
         </Tile>
      </div>
    );
  }
}
