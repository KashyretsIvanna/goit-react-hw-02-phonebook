import styles from './index.module.css';
import PropTypes from 'prop-types';

const Contact = props => {
	return (
		<li className={styles.li}>
			{props.name + ': ' + props.number}
			<button
				className={styles.button}
				onClick={() => {
					props.onDelete(props.id);
				}}
			>
				Delete
			</button>
		</li>
	);
};

Contact.propTypes = {
	onDelete: PropTypes.func.isRequired,
	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Contact;
