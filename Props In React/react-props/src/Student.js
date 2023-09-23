import React from "react";

// class Student extends React.Component {
//     render(){

//         console.log(this.props);
//         const {stuname, marks} = this.props;

//         return (
//             <>
//              <h1>Hello, {stuname}</h1>
//              <p>You have secured {marks} %</p>
//              <hr />
//             </>
//         )
//     }
// }


/* Functional Based Components */
// function Student({stuname, marks}) {
//     return (
//         <>
//          <h1>Hello, {stuname}</h1>
//          <p>You have secured {marks} %</p>
//         </>
//     )
// }


function Student(props) {

    const {stuname, marks} = props;
    
    return (
        <>
         <h1>Hello, {stuname}</h1>
         <p>You have secured {marks} %</p>
        </>
    )
}


export default Student;