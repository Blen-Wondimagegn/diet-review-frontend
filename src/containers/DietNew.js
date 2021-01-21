import React, { Component } from 'react'
export class DietNew extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            gender: '',
            height: '',
            diet_type: '',
            start_weight: '',
            lost_weight: '',
            duration: ''
        }
    }
  
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addDiet(this.state)
        this.props.history.push('/diets');
    }

    

    render() {
        return (
          <div>
            </div>
        )
    }
}
export default DietNew;