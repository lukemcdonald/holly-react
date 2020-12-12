import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setupHeaderBg } from '../../assets/js/main';
import Logo from './Logo';

class Header extends Component {
	componentDidMount() {
		setupHeaderBg();
	}

	render() {
		const { title } = this.props;

		return (
			<header className="site-header">
				<div className="container">
					<div className="site-header-large-bg">
						<span />
					</div>
					<div className="site-header-inner">
						<div className="brand header-brand">
							<h1 className="m-0">
								<Link to="/">
									<Logo /> {title}
								</Link>
							</h1>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
