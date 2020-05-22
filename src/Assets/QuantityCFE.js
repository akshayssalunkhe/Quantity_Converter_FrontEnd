import React, {Component} from 'react';
import './Quantity.css'
import axios from 'axios'

class QuantityConversion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unitType: ['LENGTH'],
            units: ['INCH', 'FEET', 'YARD', 'CENTIMETER'],
            selectedUnitType: '',
            inputValue:0,
            inputUnit:'INCH',
            outputUnit:'INCH',
            outputValue:0,
        };
        this.changeUnitType = this.changeUnitType.bind(this);
    }

    componentDidMount() {
        this.setState({
            unitType: [
                {name: 'LENGTH', units: ['INCH', 'FEET', 'YARD', 'CENTIMETER']},
                {name: 'WEIGHT', units: ['KILOGRAM', 'GRAM', 'TONNE']},
                {name: 'VOLUME', units: ['LITRE', 'GALLON', 'MILLILITRE']},
                {name: 'TEMPERATURE', units: ['CELSIUS', 'FAHRENHEIT']},
            ]
        });
    }

    changeUnitType(event) {
        this.setState({selectedUnitType: event.target.value});
        this.setState({units: this.state.unitType.find(unitType => unitType.name === event.target.value).units});
    }

    changeInputUnit(event) {
        this.setState({inputUnit: event.target.value});
    }

    changeOutputUnit(event) {
        this.setState({outputUnit: event.target.value});
    }

    setInput(event) {
        this.setState({inputValue: event.target.value})
    }

    getConversion() {
        axios.get("http://localhost:8081/unitConversion/addConversion/")
            .then(response => {
                this.setState({outputValue:response.data})
            })
            .catch(error => {
                alert("Please enter proper value")
            })
    }
    render() {
        return (
            <div className='login-box'>
                <h3>Unit Conversion</h3>
                <input id="unitTyped" type={"text"} placeholder='UNIT TYPE'></input>
                <select id="unitType" value={this.state.selectedUnitType} onChange={this.changeUnitType}>
                    {this.state.unitType.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                    })}
                </select>

                <br/><br/>
                <input id="inputValue" type={"number"} placeholder='value' value={this.state.inputValue} onChange={this.setInput.bind(this)}></input>
                <input id="outputValue" type={"number"} placeholder='value' value={this.state.outputValue} ></input>
                <br/>
                <select id="inputUnit" value={this.state.inputUnit} onChange={this.changeInputUnit.bind(this)}>
                    {this.state.units.map((e, key) =>{
                        return <option key={key}>{e}</option>;
                    })
                    }
                </select>

                <select id="outputUnit" value={this.state.outputUnit} onChange={this.changeOutputUnit.bind(this)}>
                    {this.state.units.map((e, key) => {
                        return <option key={key}>{e}</option>;
                    })
                    }
                </select>
                <br/><br/>
                <button id="button" className='form' onClick={this.getConversion.bind(this)}>Convert</button>
            </div>

        )
    }

}

export default QuantityConversion;