import React, {Fragment} from 'react'
import MoviesBox from './MoviesBox.js'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Result = ({data, loading}) => {
    console.log(data);
    const completedLoading = (
        <section className='content-section text-center'>
            {data.length == 0
                ? <h1>WE DO NOT HAVE RECOMMENDATIONS FOR SELECTED MOVIE :(
                    </h1>
                : <h1>HERE ARE THE RECOMMENDATIONS BASED ON SELECTED MOVIES</h1>}

            <MoviesBox recommended={data}/>
        </section>

    )
    
    return (
        <Fragment>
            {(completedLoading)}
        </Fragment> 
    )
}

const mapStateToProps = state => ({loading: state.recommend.loading, data: state.recommend.recommended})

Result.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, null)(Result)
