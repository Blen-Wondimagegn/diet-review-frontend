import React, { Component } from 'react'
import DietItem from '../components/DietItem'
import { connect } from 'react-redux'
import { fetchDiets } from '../actions/index'


export class DietList extends Component {
    componentDidMount() {
        this.props.fetchDiets()
    }

    render() {
        const diets = this.props.diets.map((diet, i) => <DietItem key={i} diet={diet} />)
        return (
            <div>
                <h2 className="center ">Deit Reviews </h2>
                <ul className="collection">
                    {diets}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        diets: state.diets
    }
}


export default connect(mapStateToProps, { fetchDiets })(DietList)