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
///////////////////////

//     class UnitType extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             List: [
//                 "Feet",
//                 "Inch",
//                 "Centimeter",
//                 "Yard"
//             ],
//             unitType: "LENGTH"
//         }
//     }
//
//     handleChange = (event) => {
//         let Length =
//             [
//                 "Feet",
//                 "Meter",
//                 "Centimeter",
//                 "Yard"
//             ];
//         let Weight =
//             [
//                 "Kilograms",
//                 "Grams",
//                 "Tonne"
//             ];
//         let Volume =
//             [
//                 "Litre",
//                 "Millilitre",
//                 "Gallon"
//             ];
//
//         let Temperature =
//             [
//                 "Celcius",
//                 "Fahrenheit"
//             ];
//         let unitType = event.target.value;
//         let array;
//         if (unitType === "Length")
//             array = Length;
//         else if (unitType === "Weight") {
//             array = Weight;
//         } else if (unitType === "Temperature")
//             array = Temperature;
//         else
//             array = Volume;
//         this.setState({
//                 unitType: event.target.value,
//                 List: array,
//             }
//         )
//         ReactDOM.findDOMNode(document.getElementById('inputValue')).value = "";
//         ReactDOM.findDOMNode(document.getElementById('outputValue')).value = "";
//     }
//
//     render() {
//         return (
//             <form className="form">
//                 <div className="unit-type">
//                     <select id="myList" defaultValue={"Length"} onChange={this.handleChange}>
//                         <option>Length</option>
//                         <option>Weight</option>
//                         <option>Temperature</option>
//                         <option>Volume</option>
//                     </select>
//                 </div>
//                 <br/>
//                 <Unit unitType={this.state.unitType} list={this.state.List}/>
//             </form>
//         )
//     }
// }
//
// export default UnitType;
//    
//     ////////
//     handleChange = (id) => {
//         let json = {
//             "inputUnit": ReactDOM.findDOMNode(document.getElementById('inputUnit')).value.toUpperCase(),
//             "inputValue": ReactDOM.findDOMNode(document.getElementById('inputValue')).value,
//             "outputUnit": ReactDOM.findDOMNode(document.getElementById('outputUnit')).value.toUpperCase(),
//             "unitType": this.props.unitType.toUpperCase()
//         }
//         axios.put("http://localhost:8081/unitConversion/addConversion/", json).then(function (response) {
//             console.log(response);
//             var thisSession = JSON.parse(JSON.stringify(response.data));
//             ReactDOM.findDOMNode(document.getElementById('outputValue')).value = thisSession.outputValue;
//         })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
//
//     handleChangeReverse = () => {
//         let json = {
//             "inputUnit": ReactDOM.findDOMNode(document.getElementById('outputUnit')).value.toUpperCase(),
//             "inputValue": ReactDOM.findDOMNode(document.getElementById('outputValue')).value,
//             "outputUnit": ReactDOM.findDOMNode(document.getElementById('inputUnit')).value.toUpperCase(),
//             "unitType": this.props.unitType.toUpperCase()
//         }
//         axios.post("http://localhost:8081/unitConversion/addConversion/", json).then(function (response) {
//             console.log(response);
//             let thisSession = JSON.parse(JSON.stringify(response.data));
//             ReactDOM.findDOMNode(document.getElementById('inputValue')).value = thisSession.outputValue;
//         })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }

    ///////
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