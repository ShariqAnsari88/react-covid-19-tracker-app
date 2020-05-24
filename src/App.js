import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './Components/';
import { fetchData } from './Api';

import styles from './app.module.scss';

export default class app extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetcheData = await fetchData();

        this.setState({ data: fetcheData })
    }

    handleCountryChange = async ( country ) => {
        const fetcheData = await fetchData(country);
        
        this.setState({ data: fetcheData, country: country })
    }

    render() {

        const { data, country } = this.state

        

        return (
            <div className={styles.container}>
                <Cards data={ data } />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={ data } country={ country } />
            </div>
        )
    }
}
