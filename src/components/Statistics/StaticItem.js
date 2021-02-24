import React from 'react';

const StaticItem = ({ label, percentage }) => {
	return (
		<div>
			<span className="label">{label}</span>
			<span className="percentage">{percentage}%</span>
		</div>
	);
};

export default StaticItem;
