import React, { useEffect, useState } from 'react'
import api from '../api'
import Grid from '@material-ui/core/Grid';
import GlobalDataBlock from './GlobalDataBlock';
import CountryDataBlock from './CountryDataBlock';


function Summary() {
    const [data, setData] = useState(null)
    useEffect(() => {
        api.get('/summary')
            .then((res) => setData(res.data))
    }, [])
    return data ? (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <GlobalDataBlock data={data.Global}></GlobalDataBlock>
            </Grid>
            {data.Countries.map((country) => (
                <Grid item xs={3} key = {country.CountryCode}>
                <CountryDataBlock data = {country}></CountryDataBlock>
            </Grid>
            ))}
        </Grid>
    ) : null;
}

export default Summary

