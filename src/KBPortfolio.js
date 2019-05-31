import React, { Component } from 'react'
import ApplicationViews from "./ApplicationViews"


export default class KBPortfolio extends Component {
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <ApplicationViews />
            </div>
        );
    }
}