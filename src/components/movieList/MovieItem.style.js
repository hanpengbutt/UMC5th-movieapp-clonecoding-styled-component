import { useState } from 'react';
import MovieItemDetail from './MovieItemDetail.style';
import styled from 'styled-components';

const MovieItem = (props) => {
    const [detail, setDetail] = useState(false);

    return (
        <MovieItemWrapper onMouseOver={() => setDetail(true)} onMouseOut={() => setDetail(false)}>
            <ItemPoster src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt='영화 포스터 사진' />
            <ItemInfo>
                <ItemTitle>{props.title}</ItemTitle>
                <div>{props.voteAverage}</div>
            </ItemInfo>
            <MovieItemDetail title={props.title} overview={props.overview} display={detail}/>
        </MovieItemWrapper>
    )
}

const MovieItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`

const ItemPoster = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1.5;
    object-fit: cover;
`

const ItemInfo = styled.div`
    width: 100%;
    aspect-ratio: 2 / 1;
    background-color: #373b69;
    color: white;
    display: flex;
    box-sizing: border-box;
    padding: 14px;
    line-height: 1.4;
    justify-content: space-between;
`

const ItemTitle = styled.div`
    width: 80%;
    height: 100%;
    word-break: keep-all;
`

export default MovieItem;