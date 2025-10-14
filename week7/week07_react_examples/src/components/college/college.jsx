// function College(params){
//     return <h1>College: George Brown College</h1>;
// }

import React from 'react';

class College extends React.Component{
    constructor(props){
        super();
        this.props = {

        }
        
        this.state = {
            x: 100,
            name: "Paritesh"
        }
    }
1
    render(){
        return <h1 className='Text'>College: George Brown College</h1>;
    }
}

export default College;