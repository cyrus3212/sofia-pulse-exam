import img from './images/image.png';

const Card = ({card, index}) => {
    return (
        <div className={`card card-${index +1} ${index}`}
            style={{zIndex: index + 1, animationDelay: `${index}s`}}>
            <img src={img} alt="new" />
            <div className="card-details">
                <div>Title</div>
                <div>Description</div>
            </div>

            <span className="card-shadow"></span>
        </div>
    )
};

export default Card;