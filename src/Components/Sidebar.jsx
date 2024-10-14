import {Link} from 'react-router-dom';
import '../index.css'

function Sidebar() {
  // const handlePremiumDemoClick = (e) => {
  //   e.preventDefault();
  //   alert('Coming soon');
  // };

  return (
    <aside className="aside is-placed-left is-expanded">
      <div className="aside-tools">
        <div>
          Health<b className="font-black">Well</b>
        </div>
      </div>
      <div className="menu is-menu-main">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li className="active">
            <Link to='/Dashboard' >
              <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
              <span className="menu-item-label">Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li className="active">
            <Link to='/Profile' >
              <span className="icon"><i className="mdi mdi-account"></i></span>
              <span className="menu-item-label">Profile</span>
            </Link>
          </li>
        </ul>
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <li className="--set-active-tables-html">
            <Link to='/Exercises'>
              <span className="icon"><i className="mdi mdi-table"></i></span>
              <span className="menu-item-label">Exercises</span>
            </Link>
          </li>
          <li className="--set-active-forms-html">
            <Link to='/Nutritions'>
              <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
              <span className="menu-item-label">Nutritions</span>
            </Link>
          </li>
          <li className="--set-active-forms-html">
            <Link to='/HealthGoals'>
              <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
              <span className="menu-item-label">HealthGoals</span>
            </Link>
          </li>
          {/* <li>
            <Link to='/Login'>
              <span className="icon"><i className="mdi mdi-lock"></i></span>
              <span className="menu-item-label">Login</span>
            </Link>
          </li> */}
          {/* <li>
            <a className="dropdown">
              <span className="icon"><i className="mdi mdi-view-list"></i></span>
              <span className="menu-item-label">Submenus</span>
              <span className="icon"><i className="mdi mdi-plus"></i></span>
            </a>
            <ul>
              <li>
                <a href="#void">
                  <span>Sub-item One</span>
                </a>
              </li>
              <li>
                <a href="#void">
                  <span>Sub-item Two</span>
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
        <p className="menu-label">About</p>
        <ul className="menu-list">
          {/* <li>
            <a
              href="https://justboil.me"
              onClick={handlePremiumDemoClick}
              target="_blank"
              className="has-icon"
              rel="noopener noreferrer"
            >
              <span className="icon"><i className="mdi mdi-credit-card-outline"></i></span>
              <span className="menu-item-label">Premium Demo</span>
            </a>
          </li> */}
          <li>
            {/* <a
              href="https://justboil.me/tailwind-admin-templates"
              className="has-icon"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <Link to='/About'>
              <span className="icon"><i className="mdi mdi-help-circle"></i></span>
              <span className="menu-item-label">About</span>
            </Link>
          </li>
          {/* <li>
            <a
              href="https://github.com/justboil/admin-one-tailwind"
              className="has-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon"><i className="mdi mdi-github-circle"></i></span>
              <span className="menu-item-label">GitHub</span>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
