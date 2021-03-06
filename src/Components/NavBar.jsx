import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Link from "react-router-dom/es/Link";
import SimpleMenu from "./MenuComponent";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>

            <AppBar position="static">

                <Toolbar>
                    <SimpleMenu className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </SimpleMenu>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        News
                    </Typography>

                    <Button color="inherit"
                            component={Link}
                            to={"login"}
                    >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);