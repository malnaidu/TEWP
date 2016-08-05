import React, {Component, PropTypes} from 'react';
import styles from './ComputerGrid.scss';
import { Link } from 'react-router';


export default class ComputerGrid extends Component { 
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-2"/>
					<div className="col-md-4">
							<div id="stockimage">
								<img src={this.props.stockImage}/>
							</div>

							<br/>
							<br/>

							<div id="headerText" className={styles.headerText}>
								{this.props.headerText}
							</div>

							<div id="descriptionText" className={styles.descriptionText}>
								{this.props.descriptionText}
							</div>

							<br/>
							<br/>

							<div id="price" className={styles.price}>
								{this.props.price}
							</div>
					</div>

					<div className="col-md-1"/>
					<div className="col-md-4">
							<div id="stockimage2">
								<img src={this.props.stockImage2}/>
							</div>

							<br/>
							<br/>

							<div id="headerText2" className={styles.headerText2}>
								{this.props.headerText2}
							</div>

							<div id="descriptionText2" className={styles.descriptionText2}>
								{this.props.descriptionText2}
							</div>

							<br/>
							<br/>

							<div id="price2" className={styles.price2}>
								{this.props.price2}
							</div>
						
						</div>
					</div>

				<div className="row">
					<div className="col-md-2"/>
					<div className="col-md-4">
							<div id="stockImage5">
								<img src={this.props.stockImage5}/>
							</div>

							<br/>
							<br/>

							<div id="headerText5"className={styles.headerText5}>
								{this.props.headerText5}
							</div>

							<div id="descriptionText5" className={styles.descriptionText5}>
								{this.props.descriptionText5}
							</div>

							<br/>
							<br/>

							<div id="price5" className={styles.price5}>
								{this.props.price5}
							</div>
						
					</div>

					<div className="col-md-1"/>
					<div className="col-md-4">
							<div id="stockimage6">
								<img src={this.props.stockImage6}/>
							</div>
							
							<br/>
							<br/>
							<div id="headerText6" className={styles.headerText6}>
								{this.props.headerText6}
							</div>

							<div id="descriptionText6" className={styles.descriptionText6}>
								{this.props.descriptionText6}
							</div>

							<br/>
							<br/>

							<div id="price6" className={styles.price6}>
								{this.props.price6}
							</div>
						
					</div>
				</div>

				<div className="row">
					<div className="col-md-2"/>
					<div className="col-md-4">
							<div id="stockimage3">
								<img src={this.props.stockImage3}/>
							</div>

							<br/>
							<br/>
			
							<div id="headerText3" className={styles.headerText3}>
								{this.props.headerText3}
							</div>

							<div id="descriptionText3" className={styles.descriptionText3}>
								{this.props.descriptionText3}
							</div>

							<br/>
							<br/>

							<div id="price3" className={styles.price3}>
								{this.props.price3}
							</div>
					</div>

					<div className="col-md-1"/>
					<div className="col-md-4">
							<div id="stockImage4">
								<img src={this.props.stockImage4}/>
							</div>

							<br/>
							<br/>

							<div id="headerText4"className={styles.headerText4}>
								{this.props.headerText4}
							</div>

							<div id="descriptionText4" className={styles.descriptionText4}>
								{this.props.descriptionText4}
							</div>

							<br/>
							<br/>

							<div id="price4" className={styles.price4}>
								{this.props.price4}
							</div>
					</div>
				</div>
			</div>
		);
	}
}

SquareGrid.propTypes =  {
	stockImage: PropTypes.string,
	stockImage2: PropTypes.string,
	stockImage3: PropTypes.string,
	stockImage4: PropTypes.string,
	stockImage5: PropTypes.string,
	stockImage6: PropTypes.string,
	headerText: PropTypes.string,
	headerText2: PropTypes.string,
	headerText3: PropTypes.string,
	headerText4: PropTypes.string,
	headerText5: PropTypes.string,
	headerText6: PropTypes.string,
	descriptionText: PropTypes.string,
	descriptionText2: PropTypes.string,
	descriptionText3: PropTypes.string,
	descriptionText4: PropTypes.string,
	descriptionText5: PropTypes.string,
	descriptionText6: PropTypes.string,
	price:PropTypes.string,
	price2:PropTypes.string,
	price3:PropTypes.string,
	price4:PropTypes.string,
	price5:PropTypes.string,
	price6:PropTypes.string,
}