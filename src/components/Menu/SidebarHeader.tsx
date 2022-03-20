import React from 'react';
import { NavLink } from 'react-router-dom';
import { Disc, X, Circle } from 'react-feather';
import classnames from 'classnames';
import TremandaosLogo from '../../assets/img/logo/TLOGO.png';

export default function SidebarHeader({
  collapsed,
  toggle,
  sidebarVisibility,
}: any) {
  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto">
          <NavLink to="/" className="navbar-brand">
            <img src={TremandaosLogo} alt="Tremandaos Logo" className="brand-logo" />
            <h1 className="brand-text mb-0">Tremandaos</h1>
          </NavLink>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle">
            {collapsed === false ? (
              <Disc
                onClick={() => toggle()}
                className={classnames(
                  'toggle-icon icon-x d-none d-xl-block font-medium-4 text-primary'
                )}
                size={20}
                data-tour="toggle-icon"
              />
            ) : (
              <Circle
                onClick={() => toggle()}
                className={classnames(
                  'toggle-icon icon-x d-none d-xl-block font-medium-4 text-primary'
                )}
                size={20}
              />
            )}
            <X
              onClick={sidebarVisibility}
              className={classnames(
                'toggle-icon icon-x d-block d-xl-none font-medium-4 text-primary'
              )}
              size={20}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
