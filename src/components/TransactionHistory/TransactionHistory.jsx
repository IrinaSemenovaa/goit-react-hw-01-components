import PropTypes from 'prop-types';
import css from './TransaktionHistory.module.css';

const Transaction = ({ items }) => {
  return (
    <table className={css.transaction__history}>
      <thead>
        <tr className={css.transaction__history}>
          <th className={css.table__th}>Type</th>
          <th className={css.table__th}>Amount</th>
          <th className={css.table__th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.table__tr}>
              <td className={css.table__td}>{type}</td>
              <td className={css.table__td}>{amount}</td>
              <td className={css.table__td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Transaction;