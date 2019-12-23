import React from 'react';

import './result.styles.scss';

const Result = ({ result }) => {
	const { name, field, year, country, sharedWith = [] } = result;
	return (
		<div className="result">
			<h3>{name}</h3>
			<p>
				Field : {field} &nbsp;
				Year: {year}
			</p>
			<p>Country: {country}</p>
			{
				sharedWith.length > 0 && (
					<p>Shared With :  
					{sharedWith.map((name, idx) =>
						<span key={idx}> {name},</span>)}
					</p>
				)
			}
		</div>
	);
};

export default Result;
