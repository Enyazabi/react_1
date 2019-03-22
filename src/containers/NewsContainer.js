import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsComponent from "../Components/NewsComponent"
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class NewsContainer extends React.Component {
    state = {
        spacing: '16',
    };


    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[  {newsCardTitle:'fdffdddd'}, {newsDescription:'iofgrsdsysyys'},
                            {newsCardTitle:'fgsdksdjksdjksdf'}, {newsDescription:'iofgrsfvcfxddxfsfzsdzsfdfzszsfdfdsysyys'},
                            {newsCardTitle:'fdffdddghhhjjjjjjjjjjjjjjjjjjj'}, {newsDescription:'iofgrsdsysyysfdddddddddddd'},
                            {newsCardTitle:'ldkfjrrhnffkdldl'}, {newsDescription:'fdlkjgertyfchjss'},
                            {newsCardTitle:'jfkdlroituyuyuyuy'}, {newsDescription:'aaaaaaaaaaaaaaaaaaaaaaaaa'},
                            {newsCardTitle:'ssssssssssssssssssssssssssssukaaaaaaaaaaaaa'}, {newsDescription:'pizdeeeeeec'}
                            ].map(value => (
                            <Grid key={value} item xs={4}>
                                <NewsComponent
                                    news={value}

                                />

                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

NewsContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsContainer);
