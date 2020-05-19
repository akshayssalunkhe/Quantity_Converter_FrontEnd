// import React from 'react'
// // class Quantity extends React.Component {
//
// export default function onChange(s1, s2, s3) {
//     var s1 = document.getElementById(s1);
//     var s2 = document.getElementById(s2);
//     var s3 = document.getElementById(s3);
//     s2.innerHTML = "";
//     s3.innerHTML = "";
//     if (s1.value === "LENGTH") {
//         var optionArray = ["INCH", "FEET", "YARD"];
//     } else if (s1.value === "VOLUME") {
//         var optionArray = ["LITRE", "MILILITRE"];
//     } else if (s1.value === "WEIGHT") {
//         var optionArray = ["GRAM", "KILOGRAM", "TONNE"];
//     }
//     for (var i = 0; i < optionArray.length; i++) {
//         var newOption = document.createElement("option");
//         newOption.value = optionArray[i];
//         newOption.innerHTML = optionArray[i];
//         s2.options.add(newOption);
//     }
//     for (var i = 0; i < optionArray.length; i++) {
//         var newOption = document.createElement("option");
//         newOption.value = optionArray[i];
//         newOption.innerHTML = optionArray[i];
//         s3.options.add(newOption);
//     }
// }