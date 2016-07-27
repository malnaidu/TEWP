import React, {Component} from 'react';
import styles from './App.scss';
import Tile from '../../components/Tile';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
       	 <Tile header="Hardware" 
  	      		 subHeader= "Featured Laptop"
  	      		 discription="Macbook Pro"
  	      		 imageUrl="url"
  	      		 linkRoute="/computers">
      	 </Tile>
      </div>
    );
  }
}
