import style from './MovieItemDetail.module.css'

const MovieItemDetail = (props) => {
    return (
        <div className={style.itemDetail}>
            <div className={style.itemDetailTitle}>{props.title}</div>
            <div className={style.itemDetailOverview}>{props.overview}</div>
        </div>
    )
}

export default MovieItemDetail;