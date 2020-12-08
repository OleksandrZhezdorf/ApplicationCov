import React, { useEffect, useState } from 'react';
import api from '../api';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chart from './Chart';

function Detailed() {
    const [countries, setCountries] = useState([]);
    const [countryCode, setCountryCode] = useState('ukraine');
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        api.get('/countries').then((res) => setCountries(res.data));
    }, []);


    useEffect(() => {
        api.get('/total/country/' + countryCode).then((res) => setCountryData(prepareData(res.data)));
    },[countryCode])

    function handleChange(e) {
        setCountryCode(e.target.value);
    }

    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryCode}
                onChange={handleChange}
            >
                {countries.map((country) => (<MenuItem value={country.Slug} key={country.Slug}>{country.Country}</MenuItem>))}
            </Select>
            {countryData ?
            <Chart data = {countryData}></Chart>
            : null}
        </div>
    )
}

export default Detailed

function prepareData (data) {
    const charData = {
        labels: [],
        active: [],
        deaths: [],
        recovered: [],
    };

    data.forEach(element => {
        charData.labels.push(element.Date.replace(/T.*$/, ''));
        charData.active.push(element.Active);
        charData.deaths.push(element.Deaths);
        charData.recovered.push(element.Recovered);
    });
    return charData;
}
