import React from 'react';

import './header.styles.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<h1 className="title">
					<i className="fa fa-award"></i>
					<span>Knowbel</span>
				</h1>
				<h2 className="subtitle">A Nobel Prize encyclopedia</h2>
			</div>
		</div>
	);
}

export default Header;