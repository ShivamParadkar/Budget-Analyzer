import React from 'react'
import {Card, CardHeader,CardContent, Typography, Grid, Divider} from '@material-ui/core';

import useStyle from './styles';

import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyle();
  return (
    <Card className={classes.root}>
        <CardHeader title="Expence Manager" subheader="Powered by Speechely" />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance 9lakh</Typography>
            <Typography variant="subtitle1" style={{lineWeight: '1.5em',marginTop: '20px'}}>
                {/* InfoCard */}
                Try saying : Add income for 2lach in category salary for monday
            </Typography>
            <Divider/>
            <Form/>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main