// import { restaurantList } from "../../util/mockData1";
import Body from "./Body";

const Restaurantcard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        avgRating,
        name,
        cuisines,
        
    } = resData?.info;
    return(
        <div className="res-card">
            <img
                className="foodimg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt="pic"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData.info.deliveryTime}</h4>
        </div>
    )
}

export default Restaurantcard;