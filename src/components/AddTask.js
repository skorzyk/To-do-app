import React, { Component } from 'react'
import './AddTask.css'
class AddTask extends Component {
    state = {
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10)
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {

        const { text, checked, date } = this.state
        if (text.length) {
            const add = this.props.add(text, date, checked) // metoda z App.js 
            if (add === true) {
                this.setState({
                    text: "",
                    checked: false,
                    date: new Date().toISOString().slice(0, 10)
                })
            }
        }
    }

    render() {
        const minDate = new Date().toISOString().slice(0, 10)
        let maxDate = minDate.slice(0, 4) * 1 + 1
        maxDate = maxDate + "-12-31"

        return (
            <div className="form">
                <input type="text" placeholder="Dodaj zadanie" value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
                <label htmlFor="important">Priorytet</label>
                <br />
                <label htmlFor="date">Do kiedy zrobić </label>
                <input type="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate} />
                <br />
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        );
    }
}

export default AddTask;