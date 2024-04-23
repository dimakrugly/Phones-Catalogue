import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../types/Icons';
import { scrollToTop } from '../../utils/functions';
import { Icon } from '../Icon';
import './Footer.scss';

export const Footer = memo(() => {
  return (
    <footer className="footer">
      <span className="footer__logo" />
      <ul className="footer__navigation">
        <li className="footer__navigation-item">
          <Link to="https://github.com/dimakrugly">
            GITHUB
          </Link>
        </li>
        <li className="footer__navigation-item">
          <Link to="https://www.linkedin.com/in/dmytro-torop-124845298/">
            CONTACTS
          </Link>
        </li>
        <li className="footer__navigation-item">
          <Link
            to="https://www.figma.com/file/uEetgWenSRxk9jgiym6Yzp/Phone-catalog
            -redesign?type=design&node-id=0-1&mode=design&t=LbOWNQ3UYc0KOhqH-0"
          >
            RIGHTS
          </Link>
        </li>
      </ul>
      <button
        aria-label="toTop"
        type="button"
        className="footer__button"
        onClick={scrollToTop}
      >
        <p className="footer__button-text">Back to top</p>
        <div className="footer__button-icon">
          <Icon icon={Icons.ArrowLeft} />
        </div>
      </button>
    </footer>
  );
});
