import React, { Component } from 'react'

export default class Auth extends Component {
    login() {
        //alert("login called ")
        console.warn("state", this.state)
    }
    render() {
        return (
            <div>
                <div><br /><br />
                    <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }}
                    /><br /><br />
                    <input type="text" onChange={(e) => { this.setState({ password: e.target.value }) }}
                    /><br /><br />
                    <button onClick={() => this.login()}>Login</button>
                </div>

            </div >
        )
    }
}
