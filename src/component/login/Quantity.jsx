//  import React from 'react';
// import './Quantity.css';
//
//
// export default class QuantityBody extends React.Component {
//
//          onChange = (unitType, inputUnit, outputUnit) => {
//         let optionArray;
//         let s1 = document.getElementById(unitType);
//         let s2 = document.getElementById(inputUnit);
//         let s3 = document.getElementById(outputUnit);
//         s2.innerHTML = "";
//         s3.innerHTML = "";
//         if (unitType === "LENGTH") {
//             optionArray = ["INCH", "FEET", "YARD"];
//         } else if (unitType === "VOLUME") {
//             optionArray = ["LITRE", "MILLILITRE"];
//         } else if (unitType === "WEIGHT") {
//             optionArray = ["GRAM", "KILOGRAM", "TONNE"];
//         }
//         let i;
//         let j;
//         for (i = 0; i < (optionArray.length); i++) {
//             let newOption = document.createElement("option");
//             newOption.value = optionArray[i];
//             newOption.innerHTML = optionArray[i];
//             s2.options.add(newOption);
//         }
//         for (j = 0; j < optionArray.length; j++) {
//             let newOption = document.createElement("option");
//             newOption.value = optionArray[j];
//             newOption.innerHTML = optionArray[j];
//             s3.options.add(newOption);
//         }
//     };
//
//     render() {
//         return (
//             <div className="quantity-body"><br/> QUANTITY CONVERTER <br/><input id="UnitTyped" type="text"
//                                                                                 placeholder="Unit Type"/>
//                 <br/>
//                 <select id="unitType" name="unitType" onChange={this.onChange(this.id, 'inputUnit', 'outputUnit')}>
//
//                     <option value=""> </option>
//                     <option value="LENGTH">LENGTH</option>
//                     <option value="VOLUME">VOLUME</option>
//                     <option value="WEIGHT">WEIGHT</option>
//                 </select>
//                 <br/><br/>
//                 <input id="inputValue" type="text" placeholder="InputValue"/> = <input id="outputValue" type="text"
//                                                                                        placeholder="outputValue"/><br/>
//                 <select id="inputUnit" name="inputUnit"> </select>
//
//                 <select id="outputUnit" name="outputUnit"> </select>
//             </div>
//         )
//     }
// }
