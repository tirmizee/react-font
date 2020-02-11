import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPath: ""
        }
        this.activeMenu = this.activeMenu.bind(this);
        this.activeClass = this.activeClass.bind(this);
    }

    componentWillUpdate = (nextProps, nextState) => {
    }

    activeMenu = (path) => {
        this.setState({ currentPath: path });
    }

    activeClass = (...paths) => {
        console.log(this.state.currentPath);
        for (const path of paths) {
            if (path === this.state.currentPath) return "active"
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
                            <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
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
                        <li className={`${this.activeClass("","/", "/dashboard")} treeview menu-open`}>
                            <a href="fake_url">
                                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/dashboard")} onClick={(e) => { this.activeMenu("/dashboard") }}>
                                    <Link to="/dashboard"><i className="fa fa-circle-o" /> Dashboard</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${this.activeClass("/pages/layout/topnav","/pages/layout/boxed", "/pages/layout/fixed","/pages/layout/collapsedsidebar")} treeview`}>
                            <a href="fake_url">
                                <i className="fa fa-files-o" />
                                <span>Layout Options</span>
                                <span className="pull-right-container">
                                    <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li className={this.activeClass("/pages/layout/topnav")} onClick={(e) => { this.activeMenu("/pages/layout/topnav") }}><Link to="/pages/layout/topnav"><i className="fa fa-circle-o" /> Top Navigation</Link></li>
                                <li className={this.activeClass("/pages/layout/boxed")} onClick={(e) => { this.activeMenu("/pages/layout/boxed") }}><Link to="/pages/layout/boxed"><i className="fa fa-circle-o" /> Boxed</Link></li>
                                <li className={this.activeClass("/pages/layout/fixed")} onClick={(e) => { this.activeMenu("/pages/layout/fixed") }}><Link to="/pages/layout/fixed"><i className="fa fa-circle-o" /> Fixed</Link></li>
                                <li className={this.activeClass("/pages/layout/collapsedsidebar")} onClick={(e) => { this.activeMenu("/pages/layout/collapsedsidebar") }}><Link to="/pages/layout/collapsedsidebar"><i className="fa fa-circle-o" /> Collapsed Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className={this.activeClass("/pages/widget")}>
                            <NavLink to="/pages/widget" onClick={(e) => { this.activeMenu("/pages/widget") }}>
                                <i className="fa fa-th" /> <span>Widgets</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-green">new</small>
                                </span>
                            </NavLink >
                        </li>
                        <li className="treeview">
                            <a href="fake_url">
                                <i className="fa fa-pie-chart" />
                                <span>Charts</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/pages/charts/chartjs"><i className="fa fa-circle-o" /> ChartJS</a></li>
                                <li><a href="/pages/charts/morris"><i className="fa fa-circle-o" /> Morris</a></li>
                                <li><a href="/pages/charts/flot"><i className="fa fa-circle-o" /> Flot</a></li>
                                <li><a href="/pages/charts/inline"><i className="fa fa-circle-o" /> Inline charts</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="fake_url">
                                <i className="fa fa-laptop" />
                                <span>UI Elements</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/pages/ui/general"><i className="fa fa-circle-o" /> General</a></li>
                                <li><a href="/pages/ui/icons"><i className="fa fa-circle-o" /> Icons</a></li>
                                <li><a href="/pages/ui/buttons"><i className="fa fa-circle-o" /> Buttons</a></li>
                                <li><a href="/pages/ui/sliders"><i className="fa fa-circle-o" /> Sliders</a></li>
                                <li><a href="/pages/ui/timeline"><i className="fa fa-circle-o" /> Timeline</a></li>
                                <li><a href="/pages/ui/modals"><i className="fa fa-circle-o" /> Modals</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="fake_url">
                                <i className="fa fa-edit" /> <span>Forms</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/pages/forms/general"><i className="fa fa-circle-o" /> General Elements</a></li>
                                <li><a href="/pages/forms/advanced"><i className="fa fa-circle-o" /> Advanced Elements</a></li>
                                <li><a href="/pages/forms/editors"><i className="fa fa-circle-o" /> Editors</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="fake_url">
                                <i className="fa fa-table" /> <span>Tables</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/pages/tables/simple"><i className="fa fa-circle-o" /> Simple tables</a></li>
                                <li><a href="/pages/tables/data"><i className="fa fa-circle-o" /> Data tables</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/pages/calendar">
                                <i className="fa fa-calendar" /> <span>Calendar</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-red">3</small>
                                    <small className="label pull-right bg-blue">17</small>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/pages/mailbox/mailbox">
                                <i className="fa fa-envelope" /> <span>Mailbox</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-yellow">12</small>
                                    <small className="label pull-right bg-green">16</small>
                                    <small className="label pull-right bg-red">5</small>
                                </span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="fake_url">
                                <i className="fa fa-folder" />
                                <span>Examples</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/pages/examples/invoice"><i className="fa fa-circle-o" /> Invoice</a></li>
                                <li><a href="/pages/examples/profile"><i className="fa fa-circle-o" /> Profile</a></li>
                                <li><a href="/pages/examples/login"><i className="fa fa-circle-o" /> Login</a></li>
                                <li><a href="/pages/examples/register"><i className="fa fa-circle-o" /> Register</a></li>
                                <li><a href="/pages/examples/lockscreen"><i className="fa fa-circle-o" /> Lockscreen</a></li>
                                <li><a href="/pages/examples/404"><i className="fa fa-circle-o" /> 404 Error</a></li>
                                <li><a href="/pages/examples/500"><i className="fa fa-circle-o" /> 500 Error</a></li>
                                <li><a href="/pages/examples/blank"><i className="fa fa-circle-o" /> Blank Page</a></li>
                                <li><a href="/pages/examples/pace"><i className="fa fa-circle-o" /> Pace Page</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="fake_url">
                                <i className="fa fa-share" />
                                <span>Multilevel</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right" />
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level One</a></li>
                                <li className="treeview">
                                    <a href="fake_url"><i className="fa fa-circle-o" />
                                        Level One
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right" />
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Two</a></li>
                                        <li className="treeview">
                                            <a href="fake_url"><i className="fa fa-circle-o" />
                                                Level Two
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right" />
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Three</a></li>
                                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level One</a></li>
                            </ul>
                        </li>
                        <li><a to="https://adminlte.io/docs"><i className="fa fa-book" /> <span>Documentation</span></a></li>
                        <li className="header">LABELS</li>
                        <li><a href="fake_url"><i className="fa fa-circle-o text-red" /> <span>Important</span></a></li>
                        <li><a href="fake_url"><i className="fa fa-circle-o text-yellow" /> <span>Warning</span></a></li>
                        <li><a href="fake_url"><i className="fa fa-circle-o text-aqua" /> <span>Information</span></a></li>
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>
        )
    }
}
