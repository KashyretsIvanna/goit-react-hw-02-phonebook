import styles from '../Filter/index.module.css';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const Filter = props => {
	return (
		<Fragment>
			<p className={styles.p}>Find contacts by name</p>
			<input
				className={styles.input}
				type="text"
				value={props.filter}
				onChange={e => {
					props.onFilter(e);
				}}
			/>
		</Fragment>
	);
};
Filter.propTypes = {
	onFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
};

export default Filter;
