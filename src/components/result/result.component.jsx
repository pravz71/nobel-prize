import React from 'react';

import './result.styles.scss';

const Result = ({ result }) => {
	const { name, field, year, country, sharedWith = [] } = result;
	return (
		<div className="result">
			<h3>{name}</h3>
			<p>
				<span>Field : {field}</span>
				<span>Year: {year}</span>
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
