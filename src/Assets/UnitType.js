// class UnitType extends React.Component {
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