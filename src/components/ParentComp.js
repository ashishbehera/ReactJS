import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';


class ParentComp extends Component {
     constructor(props) {
         super(props)

         this.state = {
              name: 'Learning React JS'
         }
     }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Learning React JS'
            });
        }, 3000);
    };

    render() {
        console.log('ParentComp Rendered');
        return (
            <div>
                I'm the parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
