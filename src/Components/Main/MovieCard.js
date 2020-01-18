import React, {useState} from 'react'

const MovieCard = (props) => {
    const [selected,
        setSelected] = useState(false);

    const select = () => {
        if (!selected) {
            props.setPicked({
                movies: [
                    ...props.picked.movies,
                    props.id
                ]
            });
        }else{
            props.setPicked({
                movies:props.picked.movies.filter(movie => movie != props.id)
            })
        }

        setSelected(!selected);

    }

    return (

        <div onClick={select} className='card'>
            <div className='another-overlay'>
                <p className='movie-title'>{props.title}</p>
            </div>
            {selected && <div className='dark-overlay'></div>}
            <img
                src={`http://image.tmdb.org/t/p/w185//${props.poster}`}
                className="card-img-top"
                alt="..."/>
        </div>
    )
}

export default MovieCard
