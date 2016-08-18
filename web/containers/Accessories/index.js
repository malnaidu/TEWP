import React, {Component} from 'react';
import styles from './Accessories.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import SquareGrid from '../../components/SquareGrid';
import Other from '../../components/Other';

export default class Accessories extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<br/>
				<br/>
				<div className={styles.titleBanner}>
                	<span className={styles.title}>Accessories</span>
           	 	</div>

           	 	<br/>
           	 	<br/>

				<div className={styles.navContainer}>
					<LeftSideNav/>
						<div className="col-md-5"/>
	                        <div className="row">
	                            <div className="col-md-8"> 
	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">
	                                </SquareGrid>

	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">    
	                                </SquareGrid>

	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price=""> 
	                                </SquareGrid>
	                            </div>
	                        </div>

	                        <div class="row">
	                            <div className="col-md-8">
	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">
	                                </SquareGrid>
	      
	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">
	                                </SquareGrid>

	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">
	                                </SquareGrid>
	                            </div>
	                        </div>

							<div class="row">
	                            <div className="col-md-8">
	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">
	                                </SquareGrid>
	      
	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">
	                                </SquareGrid>

	                                <SquareGrid stockImage=""
	                                            headerText=""
	                                            descriptionText=""
	                                            price="">
	                                </SquareGrid>
	                            </div>
	                        </div>
						</div>

				<Other/>
				<hr/>
				<Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
			</div>
		);
	}
}