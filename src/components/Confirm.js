import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    button: {
        textAlign: center,
    },
    button1: {
        marginLeft: theme.spacing.unit,
    },
    text: {
        textAlign: 'center',
    }
});
  
class Confirm extends Component {

    continue = e => {
        e.preventDefault()
        // PROCESS FROM //
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault()

        this.props.prevStep();
    }



    render() {
        const {values:{firstName, lastName, email, occupation, city, bio}} = this.props
        const { classes } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>     
                <AppBar position="static" color="primary" alignContent="center">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Confirm User Data
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List className="button">
                    <ListItem>
                        <ListItemText  primary="First Name" secondary={firstName}/>    
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName}/>   
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={email}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Occupation" secondary={occupation}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City" secondary={city}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Bio" secondary={bio}/>        
                    </ListItem>
                </List>
                <br />
                <Button variant="contained" color="primary" className={classes.button} onClick={this.continue}>
                    Confirm & Continue
                </Button>
                <Button variant="contained" color="primary" className={classes.button1} onClick={this.back}>
                    Back
                </Button>
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default withStyles(styles)(Confirm)
