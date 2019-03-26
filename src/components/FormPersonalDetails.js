import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        marginLeft: theme.spacing.unit*80,
    },
    button1: {
        marginLeft: theme.spacing.unit,
    },
});
  
class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault()

        this.props.nextStep();
    }
    back = e => {
        e.preventDefault()

        this.props.prevStep();
    }



    render() {
        const {values, handleChange} = this.props
        const { classes } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>     
                <AppBar position="static" color="primary" textAlign="center">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Enter Personal Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                  className = {classes.button}  
                  id="standard-name"
                  label="Occupation"
                  value={values.occupation}
                  onChange={handleChange('occupation')}
                  margin="normal"
                />
                <br />
                <TextField
                  className = {classes.button}  
                  id="standard-name"
                  label="City"
                  value={values.city}
                  onChange={handleChange('city')}
                  margin="normal"
                />
                <br />
                <TextField
                  className = {classes.button}  
                  id="standard-name"
                  label="Bio"
                  value={values.bio}
                  onChange={handleChange('bio')}
                  margin="normal"
                />
                <br />
                <Button variant="contained" color="primary" className={classes.button} onClick={this.continue}>
                    Continue
                </Button>
                <Button variant="contained" color="primary" className={classes.button1} onClick={this.back}>
                    Back
                </Button>
                
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default withStyles(styles)(FormPersonalDetails)
