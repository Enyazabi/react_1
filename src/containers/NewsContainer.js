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
    constructor(props) {
        super(props);
        this.state = {
            news: [
              {newsCardTitle: 'title', newsDescription: 'description'},
              {newsCardTitle: 'title1', newsDescription: 'description1'},
              {newsCardTitle: 'title2', newsDescription: 'description2'},
              {newsCardTitle: 'title3', newsDescription: 'description3'},
              {newsCardTitle: 'title4', newsDescription: 'description4'},
              {newsCardTitle: 'ssukaaaaaaa', newsDescription: 'pizdeeec'}
                ],
            spacing: '16',
        }


    };


    render() {
        const { news } = this.state;
        const {classes} = this.props;
        const {spacing} = this.state;

        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {news.map(value => (
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
