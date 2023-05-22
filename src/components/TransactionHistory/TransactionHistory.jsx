import PropTypes from 'prop-types';
import css from './TransactionHistory.module.scss';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr className={css.headRow}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={css.body}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={css.bodyRow}>
          <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
