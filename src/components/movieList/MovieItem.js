import { useState } from 'react';
import style from './MovieItem.module.css'
import MovieItemDetail from './MovieItemDetail';

const MovieItem = (props) => {
    const [detail, setDetail] = useState(false);

    return (
        <div className={style.movieItem} onMouseOver={() => setDetail(true)} onMouseOut={() => setDetail(false)}>
            <img src={`https://image.tmdb.org/t/p/original/${props.poster}`} className={style.itemPoster} alt='영화 포스터 사진' />
            <div className={style.itemInfo}>
                <div className={style.itemTitle}>{props.title}</div>
                <div className={style.itemVoteAverage}>{props.voteAverage}</div>
            </div>
            {
                detail && <MovieItemDetail title={props.title} overview={props.overview} />
            }
        </div>
    )
}

export default MovieItem;