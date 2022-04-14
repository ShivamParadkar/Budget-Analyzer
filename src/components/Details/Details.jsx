import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import useStyles from './styles'

//chart src error
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


const DetailsCard = ({title , subheader}) => {
    const classes = useStyles();
    const {total, chartData} = useTransactions(title);
    
    return (
      <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    );
}

export default DetailsCard;