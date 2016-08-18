import React, {Component, PropTypes} from 'react';
import styles from './CartBox.scss';

export default class CartBox extends Component {
  render() {
      return (        
        <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Comments</th>
                  <th>Order Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><img src="http://i.imgur.com/EOZe7rq.png" width="160" height="160"/></th>
                  <td><textarea rows="3" cols="35"/></td>
                  <td>Accessories: Wireless Headset(1)</td>
                </tr>
                <tr>
                  <th><img src="http://i.imgur.com/xfPo5lT.png" width="160" height="160"/></th>
                  <td><textarea rows="3" cols="35"/></td>
                  <td>Accessories: Mouse(1)</td>
                </tr>
                <tr>
                  <th><img src="http://i.imgur.com/7BtgjmK.png" width="160" height="160"/></th>
                  <td><textarea rows="3" cols="35"/></td>
                  <td>Accessories: Keyboard(1)</td>
                </tr>
              </tbody>
            </table>
        </div>
      );
    }
  }