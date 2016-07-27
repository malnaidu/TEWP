import React, {Component, PropTypes} from 'react';
import styles from './Tile.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { routeToPage } from '../../actions/tile';

export default class Tile extends Component {
  constructor(props) {
    super(props)
    this.handleLink=this.handleLink.bind(this)
    console.log(actionCreators);
  }
  handleLink() {
    console.log("click to link");
    console.log(this.props.linkRoute);
    routeToPage(this.props.linkRoute)
  }
  render() {
    console.log(this.props);
    return (
        <div>
            <div id="leftPannel">
                <div id="header">
                    {this.props.header}
                </div>

                <div id="subHeader">
                    {this.props.subHeader}
                </div>

                <div id="description">
                    {this.props.description}  
                </div>

                <div id="linkRoute">
                    <a onClick={this.handleLink}>
                        Show All
                    </a>
                </div>
            </div>

            <div id="rightPannel">
                <div id="imageUrl">
                </div>
            </div>
        </div>

    );
  }
}

Tile.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    linkRoute: PropTypes.string,
    actions: PropTypes.shape({
        routeToPage: PropTypes.func
    }),
};

// //function mapStateToProps(state) {
//     return state 
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actionCreators, dispatch)
//     };
// }

export default (Tile);