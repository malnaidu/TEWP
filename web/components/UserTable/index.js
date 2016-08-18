import React, {Component, PropTypes} from 'react';
import styles from './UserTable.scss';

export default class UserTable extends Component {
  render() {
      return (
        <div>
            <table>
              <thead>
                <tr>
                  <th>Ticket Number</th>
                  <th>Created</th>
                  <th>Project Name</th>
                  <th>Approval Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">TASK0066633</th>
                  <td>2016-08-17 14:06:27</td>
                  <td>Accessories: Wireless Headset(1)</td>
                  <td><img src="https://i.imgur.com/Int0gAs.png" width="115" height="40"/></td>
                </tr>
                <tr>
                  <th scope="row">TASK0066581</th>
                  <td> 2016-08-16 09:55:13</td>
                  <td>Accessories: Mouse(1)</td>
                  <td><img src="https://i.imgur.com/Int0gAs.png" width="115" height="40"/></td>
                </tr>
                <tr>
                  <th scope="row">TASK0066460</th>
                  <td>2016-08-15 11:34:24</td>
                  <td>Accessories: Keyboard(1)</td>
                  <td><img src="https://i.imgur.com/Int0gAs.png" width="115" height="40"/></td>
                </tr>
              </tbody>
            </table>
        </div>
      );
    }
 }
