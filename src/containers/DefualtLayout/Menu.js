import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.activeClass = this.activeClass.bind(this);
    }

    componentDidMount = () => {
        console.log("Menu : " + JSON.stringify(this.props.location));
    };

    activeClass = (...paths) => {
        for (const path of paths) {
            if (path === this.props.location.pathname) return "active"
        }
    }

    render() {
        return (
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>
                    {/* search form */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                    <i className="fa fa-search" />
                                </button>
                            </span>
                        </div>
                    </form>
                    {/* /.search form */}
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className={`${this.activeClass("", "/", "/dashboard")} treeview menu-open`}>
                            <a href="#">
                                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/dashboard")}>
                                    <Link to="/dashboard"><i className="fa fa-circle-o" /> Dashboard</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${this.activeClass("/pages/layout/topnav", "/pages/layout/boxed", "/pages/layout/fixed", "/pages/layout/collapsedsidebar")} treeview`}>
                            <a href="#">
                                <i className="fa fa-files-o" />
                                <span>Layout Options</span>
                                <span className="pull-right-container">
                                    <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/pages/layout/topnav")}><Link to="/pages/layout/topnav"><i className="fa fa-circle-o" /> Top Navigation</Link></li>
                                <li className={this.activeClass("/pages/layout/boxed")}><Link to="/pages/layout/boxed"><i className="fa fa-circle-o" /> Boxed</Link></li>
                                <li className={this.activeClass("/pages/layout/fixed")}><Link to="/pages/layout/fixed"><i className="fa fa-circle-o" /> Fixed</Link></li>
                                <li className={this.activeClass("/pages/layout/collapsedsidebar")}><Link to="/pages/layout/collapsedsidebar"><i className="fa fa-circle-o" /> Collapsed Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className={this.activeClass("/pages/widget")}>
                            <NavLink to="/pages/widget">
                                <i className="fa fa-th" /> <span>Widgets</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-green">new</small>
                                </span>
                            </NavLink >
                        </li>
                        <li className={`${this.activeClass("/pages/charts/chartjs", "/pages/charts/morris", "/pages/charts/flot", "/pages/charts/inline")} treeview`}>
                            <a href="#">
                                <i className="fa fa-pie-chart" />
                                <span>Charts</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/pages/charts/chartjs")}><Link to="/pages/charts/chartjs"><i className="fa fa-circle-o" /> ChartJS</Link></li>
                                <li className={this.activeClass("/pages/charts/morris")}><Link to="/pages/charts/morris"><i className="fa fa-circle-o" /> Morris</Link></li>
                                <li className={this.activeClass("/pages/charts/flot")}><Link to="/pages/charts/flot"><i className="fa fa-circle-o" /> Flot</Link></li>
                                <li className={this.activeClass("/pages/charts/inline")}><Link to="/pages/charts/inline"><i className="fa fa-circle-o" /> Inline charts</Link></li>
                            </ul>
                        </li>
                        <li className={`${this.activeClass("/pages/ui/general", "/pages/ui/icons", "/pages/ui/buttons", "/pages/ui/sliders", "/pages/ui/timeline", "/pages/ui/modals")} treeview`}>
                            <a href="#">
                                <i className="fa fa-laptop" />
                                <span>UI Elements</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/pages/ui/general")}><Link to="/pages/ui/general"><i className="fa fa-circle-o" /> General</Link></li>
                                <li className={this.activeClass("/pages/ui/icons")}><Link to="/pages/ui/icons"><i className="fa fa-circle-o" /> Icons</Link></li>
                                <li className={this.activeClass("/pages/ui/buttons")}><Link to="/pages/ui/buttons"><i className="fa fa-circle-o" /> Buttons</Link></li>
                                <li className={this.activeClass("/pages/ui/sliders")}><Link to="/pages/ui/sliders"><i className="fa fa-circle-o" /> Sliders</Link></li>
                                <li className={this.activeClass("/pages/ui/timeline")}><Link to="/pages/ui/timeline"><i className="fa fa-circle-o" /> Timeline</Link></li>
                                <li className={this.activeClass("/pages/ui/modals")}><Link to="/pages/ui/modals"><i className="fa fa-circle-o" /> Modals</Link></li>
                            </ul>
                        </li>
                        <li className={`${this.activeClass("/pages/forms/general","/pages/forms/advanced","/pages/forms/editors")} treeview`}>
                            <a href="#">
                                <i className="fa fa-edit" /> <span>Forms</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/pages/forms/general")}><Link to="/pages/forms/general"><i className="fa fa-circle-o" /> General Elements</Link></li>
                                <li className={this.activeClass("/pages/forms/advanced")}><Link to="/pages/forms/advanced"><i className="fa fa-circle-o" /> Advanced Elements</Link></li>
                                <li className={this.activeClass("/pages/forms/editors")}><Link to="/pages/forms/editors"><i className="fa fa-circle-o" /> Editors</Link></li>
                            </ul>
                        </li>
                        <li className={`${this.activeClass("/pages/tables/simple", "/pages/tables/data")} treeview`}>
                            <a href="#">
                                <i className="fa fa-table" /> <span>Tables</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/pages/tables/simple")}><Link to="/pages/tables/simple"><i className="fa fa-circle-o" /> Simple tables</Link></li>
                                <li className={this.activeClass("/pages/tables/data")}><Link to="/pages/tables/data"><i className="fa fa-circle-o" /> Data tables</Link></li>
                            </ul>
                        </li>
                        <li className={this.activeClass("/pages/calendar")}>
                            <Link to="/pages/calendar">
                                <i className="fa fa-calendar" /> <span>Calendar</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-red">3</small>
                                    <small className="label pull-right bg-blue">17</small>
                                </span>
                            </Link>
                        </li>
                        <li className={this.activeClass("/pages/mailbox/mailbox")}>
                            <Link to="/pages/mailbox/mailbox">
                                <i className="fa fa-envelope" /> <span>Mailbox</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-yellow">12</small>
                                    <small className="label pull-right bg-green">16</small>
                                    <small className="label pull-right bg-red">5</small>
                                </span>
                            </Link>
                        </li>
                        <li className={`treeview`}>
                            <a href="#">
                                <i className="fa fa-share" />
                                <span>Multilevel</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="#"><i className="fa fa-circle-o" /> Level One</Link></li>
                                <li className={`treeview`}>
                                    <Link to="#"><i className="fa fa-circle-o" />
                                        Level One
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </Link>
                                    <ul className="treeview-menu">
                                        <li><Link to="#"><i className="fa fa-circle-o" /> Level Two</Link></li>
                                        <li className={`treeview`}>
                                            <Link to="#"><i className="fa fa-circle-o" />
                                                Level Two
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right" />
                                                </span>
                                            </Link>
                                            <ul className="treeview-menu">
                                                <li><Link to="#"><i className="fa fa-circle-o" /> Level Three</Link></li>
                                                <li><Link to="#"><i className="fa fa-circle-o" /> Level Three</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="#"><i className="fa fa-circle-o" /> Level One</Link></li>
                            </ul>
                        </li>
                        <li><a to="https://adminlte.io/docs"><i className="fa fa-book" /> <span>Documentation</span></a></li>
                        <li className="header">LABELS</li>
                        <li><a href="#"><i className="fa fa-circle-o text-red" /> <span>Important</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-yellow" /> <span>Warning</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></a></li>
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>
        )
    }
}
