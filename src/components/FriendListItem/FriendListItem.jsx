import PropTypes from 'prop-types';
import clsx from 'clsx';
//
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={clsx(css.item)}>
    <span className={clsx(css.status, isOnline && css.isOnline)}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
