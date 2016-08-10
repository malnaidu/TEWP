import React, {Component} from 'react';
import styles from './Accessories.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import SquareGrid from '../../components/SquareGrid';

export default class Accessories extends Component {
	render() {
		return (
			<div>
				<Navbar/>

				<div className={styles.titleBanner}>
                	<span className={styles.title}>Accessories</span>
           	 	</div>

				<div className={styles.navContainer}>
					<LeftSideNav/>
						<div className="col-md-2"/>
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

				</div>

				<hr/>
				<Footer bottomPage="Need immediate zHelp Assistance? Call us: 206.470.7007"/>
			</div>
		);
	}
}