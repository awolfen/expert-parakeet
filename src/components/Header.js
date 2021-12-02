import classes from './Header.module.css';

import { authActions } from '../store/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Header = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loggedIn && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
