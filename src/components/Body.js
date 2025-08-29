
import Restaurantcard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";


const Body = () =>{

    const[listOfRestaurants, setlistOfRestaurants] = useState([])
    const[filteredRestaurant1, setfilteredRestaurant1] = useState([])
    const[searchText, setSearchText] =useState("")


    useEffect(() => {
        fetchdata();

    }, []);

    const fetchdata = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )

        const json = await data.json()

        console.log(json)
        const restaurants = json?.data?.cards?.find(
            (card) =>
              card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
          setlistOfRestaurants(restaurants || []);
          setfilteredRestaurant1(restaurants || []);

          
    };
   
    if (!listOfRestaurants || listOfRestaurants.length === 0) {
        return <Shimmer />;
      }
      
        

    return(
        <div className="body">

            <div className="flt-all">

            <div className="search">

                <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) =>{
                    setSearchText(e.target.value)
                }}
                
                />

                <button className="search-btn"
                onClick={() => {

                    const filteredRestaurant1 = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setfilteredRestaurant1(filteredRestaurant1)

                }}  
                > Search </button>

            </div>


            <div className="Filter">

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res=> res.info.avgRating > 4)
                    )
                    setlistOfRestaurants(filteredList)
                    }}
                    >
                        Top Rated Restaurant</button>
            </div>
            </div>

            <div className="res-container">
                {filteredRestaurant1.map((restaurant, index) => (
                <Restaurantcard key={index} resData={restaurant} />
                ))}
            </div>



        </div>
    )
}


export default Body;