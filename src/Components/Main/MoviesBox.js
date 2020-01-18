import React, {Fragment, useEffect, useState} from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import {Redirect , Link} from 'react-router-dom'
import {getRecommendations} from '../../Actions/recommend'
import {connect} from 'react-redux'


const MoviesBox = (props) => {
    let count = 0;
    const [data,
        setData] = useState();
    const [picked,
        setPicked] = useState({movies: []})
    const [submit,
        setSubmit] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        setSubmit(true);
        props.getRecommendations(picked)

    }
    
    if (props.recommended) {
        count = Math.floor(Math.random() * Math.floor(1000));
    }

    useEffect(() => {
        if (props.recommended) {
            setData(props.recommended)
        } else {
            const fetchData = async() => {
                const result = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=c128d2e9dac603a95143f47ee37c23ed&language=en-US&page=${props.currentPage}`);
                setData(result.data.results);
                console.log(result.data.results)
            };
            fetchData();
        }

    }, [count , props.currentPage]);

    if (submit) {
        return <Redirect to='/result'/>
    }

    return (
        <Fragment>
            <form onSubmit={e => onSubmit(e)}>
                <div className="moviesBox">
                    {data && data.map(item => <MovieCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        desc={item.overview}
                        poster={item.poster_path}
                        setPicked={setPicked}
                        picked={picked}/>)}
                </div>
                {props.recommended
                    ? <Link
                            to='/recommend'
                            type="button"
                            className="btn btn-primary"
                            id='get-recommendations-submit'
                            >Go Back</Link>
                    : picked.movies.length > 0 && picked.movies.length <= 3
                        ? <input
                                type="submit"
                                className="btn btn-primary"
                                id='get-recommendations-submit'
                                value="Get Recommendations"/>
                        : <input
                            type="submit"
                            className="btn btn-danger"
                            id='get-recommendations-submit'
                            value="Choose max 3 movies"
                            disabled/>}

            </form>

        </Fragment>

    )
}

const mapStateToProps = (state) => ({
    loading:state.recommend.loading
})

export default connect(mapStateToProps, {getRecommendations})(MoviesBox)
