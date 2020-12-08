
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function CountryDataBlock({ data: { Country, TotalConfirmed, TotalDeaths, TotalRecovered } }) {
    return (
        <Paper style={infoBlockStyle}>
            <Typography variant="h6">{Country}</Typography>
            <Typography variant="subtitle1">Confirmed: {TotalConfirmed}</Typography>
            <Typography variant="subtitle1">Deaths: {TotalDeaths}</Typography>
            <Typography variant="subtitle1">Recovered: {TotalRecovered}</Typography>
        </Paper>
    )
}

export default CountryDataBlock

const infoBlockStyle = {
    padding: '10px'
}
