import React from "react";
import {faCheckDouble, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{background:"#e42256"}}>
      {/* Brand Logo */}
      <a className="brand-link">
        {/*<img*/}
        {/*  src="dist/img/AdminLTELogo.png"*/}
        {/*  alt="AdminLTE Logo"*/}
        {/*  className="brand-image img-circle elevation-3"*/}
        {/*  style={{ opacity: ".8" }}*/}
        {/*/>*/}
        <span className="brand-text font-weight-light">OK' 200</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            {/*<img*/}
            {/*  src="dist/img/user2-160x160.jpg"*/}
            {/*  className="img-circle elevation-2"*/}
            {/*  alt="User Image"*/}
            {/*/>*/}
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {localStorage.getItem('username')}
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            
            {/*<li className="nav-item has-treeview">*/}
            {/*  <a className="nav-link">*/}
            {/*    <i className="nav-icon fas fa-money-check" />*/}
            {/*    <p>*/}
            {/*      Customer*/}
            {/*      <i className="fas fa-angle-left right" />*/}
            {/*      /!*<span className="badge badge-info right">6</span>*!/*/}
            {/*    </p>*/}
            {/*  </a>*/}
            {/*  <ul className="nav nav-treeview">*/}
            {/*    <li className="nav-item">*/}
            {/*      <a href="/customer/form" className="nav-link">*/}
            {/*        <i className="far fa-circle nav-icon" />*/}
            {/*        <p>Form Customer</p>*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*      <a*/}
            {/*        href="/customer"*/}
            {/*        className="nav-link"*/}
            {/*      >*/}
            {/*        <i className="far fa-circle nav-icon" />*/}
            {/*        <p>List Customer</p>*/}
            {/*      </a>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link" href="/users">*/}
            {/*    <FontAwesomeIcon icon={faUsers}/>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className="nav-item has-treeview">
              <a href="/users" className="nav-link">
                <i className="nav-icon fas fa-users" />
                <p>
                  List Account
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="/customer/form" className="nav-link">
                <i className="nav-icon fas fa-user-check" />
                <p>
                  Form Customer
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="/customer" className="nav-link">
                <i className="nav-icon fas fa-list-alt" />
                <p>
                  List Customer
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="/transaction" className="nav-link">
                <i className="nav-icon fas fa-wallet" />
                <p>
                  Transaction
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="/report" className="nav-link">
                <i className="nav-icon fas fa-check-double" />
                <p>
                  Report
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}