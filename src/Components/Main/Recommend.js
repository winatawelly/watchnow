import React, {Fragment , useState} from 'react'
import MoviesBox from './MoviesBox.js'
const Recommend = () => {
    const [page , setPage] = useState(1);
    console.log(page)
    return (
        
        <section className='content-section text-center'>
            <h1>CHOOSE 3 MOVIES THAT YOU LIKE</h1>
            <div className='button-div'>
            <button type='button' className='btn btn-secondary' onClick={() => setPage(page-1)}>Prev Page</button>
            <button type='button' className='btn btn-secondary' onClick={() => setPage(page+1)}>Next Page</button>
            </div>
            <MoviesBox currentPage={page}/>
            <div className='button-div'>
            <button type='button' className='btn btn-secondary' onClick={() => setPage(page-1)}>Prev Page</button>
            <button type='button' className='btn btn-secondary' onClick={() => setPage(page+1)}>Next Page</button>
            </div>
        </section>
    )
}

export default Recommend
