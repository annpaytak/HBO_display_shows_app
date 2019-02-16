import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import menuIcon from '../resources/images/menuIcon.svg';
import searchIcon from '../resources/images/searchIcon.svg';

class header extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const sideList = (
      <List>
        <ListItem button key="">
          <ListItemText primary="Episodes" />
        </ListItem>

        <ListItem button key="">
          <ListItemText primary="Login" />
        </ListItem>

        <ListItem button key="">
          <ListItemText primary="Sign up" />
        </ListItem>
      </List>
    );


    return (
      <div className="header-wrapper">

        <div className="header-back"></div>

        <AppBar position="static">
          <Toolbar className="sideMenu-Toolbar">

            <div className="sideMenu_icon-wrapper">
              <Button
                className="sidebutton"
                onClick={this.toggleDrawer('left', true)}><img src={menuIcon} className="menu-icons" /></Button>
              <Drawer
                className="sideBg sidedrawer"
                open={this.state.left} onClose={this.toggleDrawer('left', false)}>

                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  {sideList}
                </div>
              </Drawer>
            </div>

            <div className="input-search_icon-wrapper">
              <img src={searchIcon} />
              <InputBase placeholder="Search…" />
            </div>

            <div className="main-header-wrapper">
              <div className="main-header">SERIES</div>
            </div>

            <div className="button-login-register_button-wrapper">
              <Button className="login-button">Login</Button>
              <Button className="register-button">Sign up</Button>
            </div>

          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default header;