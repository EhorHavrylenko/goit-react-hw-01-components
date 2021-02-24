import React from 'react';
import styles from './transaction.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
	return (
		<table className={styles.container}>
			<thead className={styles.header_container}>
				<tr className={styles.header}>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(({ id, type, amount, currency }) => (
					<tr key={id}>
						<td className={styles.title}>{type}</td>
						<td className={styles.data}>{amount}</td>
						<td className={styles.data}>{currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

TransactionHistory.propTypes = {
	type: PropTypes.string,
	amount: PropTypes.string,
	currency: PropTypes.string,
	id: PropTypes.string
};

export default TransactionHistory;
