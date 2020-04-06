import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './Components/';
import fetchData from './Api';

import styles from './app.module.scss';

export default class app extends Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetcheData = await fetchData();

        this.setState({ data: fetcheData },()=>{
            //console.log(this.state.data);
        })
    }
    render() {

        const { data } = this.state

        

        return (
            <div className={styles.container}>
                <Cards data={ data } />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}
