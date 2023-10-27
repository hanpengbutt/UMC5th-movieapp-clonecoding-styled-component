import style from './MovieContainer.module.css'
import movies from '../../services/movieDummy'
import MovieItem from './MovieItem'

const MovieContainer = () => {
    return(
        <div className={style.movieContainer}>
            {
                movies.results.map((item) => {
                    return(
                        <MovieItem title={item.title} poster={item.poster_path} voteAverage={item.vote_average} overview={item.overview}></MovieItem>
                    )
                })
            }
        </div>
    )
}

export default MovieContainer;