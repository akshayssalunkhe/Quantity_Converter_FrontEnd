import React, {Component} from 'react';
import './Quantity.css'

class QuantityConversion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unitType: ['Length'],
            units: ['Inch', 'Feet', 'Yard', 'Centimeter'],
            selectedUnitType: '',
        };
        this.changeUnitType = this.changeUnitType.bind(this);
    }

    componentDidMount() {
        this.setState({
            unitType: [
                {name: 'Length', units: ['Inch', 'Feet', 'Yard', 'Centimeter']},
                {name: 'Weight', units: ['Kilogram', 'Gram', 'Tonne']},
                {name: 'Volume', units: ['Litre', 'Gallon', 'Millilitre']},
                {name: 'Temperature', units: ['Celsius', 'Fahrenheit']},
            ]
        });
    }

    changeUnitType(event) {
        this.setState({selectedUnitType: event.target.value});
        this.setState({units: this.state.unitType.find(unitType => unitType.name === event.target.value).units});
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
                <input id="inputValue" type={"number"} placeholder='value'></input>
                <input id="outputValue" type={"number"} placeholder='value'></input>
                <br/>
                <select id="inputUnit">
                    {this.state.units.map((e, key) => {
                        return <option key={key}>{e}</option>;
                    })}
                </select>

                <select id="outputUnit">
                    {this.state.units.map((e, key) => {
                        return <option key={key}>{e}</option>;
                    })}
                </select>
                <br/><br/>
                <button id="button" className='form'>Convert</button>
            </div>

        )
    }

}

export default QuantityConversion;