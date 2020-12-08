import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom';

function header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={appName}>
                    Statistics of Covid19
                </Typography>
                <Button color="inherit" component = {Link} to = "/">Summary</Button>
                <Button color="inherit" component = {Link} to = "/detailed">Details</Button>
            </Toolbar>
        </AppBar>
    )
}

export default header


const appName = { flexGrow: 1 }