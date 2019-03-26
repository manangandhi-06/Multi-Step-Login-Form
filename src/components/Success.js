import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
  
class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>     
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Success
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1>Thank You for your Submission!!</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success
