import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../Api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    },[setFetchedCountries])

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Gloabl</option>

                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
