  import ResCard,{ResCardWithPromoted}from "./ResCard";
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import useOnlineStatus from "./useOnlineStatus";
  



  const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filterListOfRes, setFilterListOfRes] = useState([]);

    let [searchText,setSearchText]=useState("")

    useEffect(() => {
      fetchData();
    }, []);

    fetchData = async () => {
      

      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19630&lng=72.96750&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);
      setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus=useOnlineStatus()
    if(onlineStatus==false)return(<h1>No internet Connection</h1>);
    const PromotedResCard=ResCardWithPromoted(ResCard)

    return listOfRes.length == 0 ? (
      <h3>Loading...</h3>
    ) : (
      <div className="container">
        <div className="filter flex m-3 p-3">
          <div className=" search ">
            <input type="text" className="border border-solid border-black rounded-sm " value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button className="ml-5 px-3 py-1 rounded-lg  bg-green-100 hover:border border-solid border-black" onClick={()=>{
              const filterLists=listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilterListOfRes(filterLists)
            }}>Search</button>
          </div>
          <button
            className="btn ml-5 px-3 py-1 rounded-lg  bg-green-100 hover:border border-solid border-black"
            onClick={() => {
              filterList = filterListOfRes.filter((res) => res.info.avgRating>4 );
              setFilterListOfRes(filterList);
            }}>Top Rated restaurant</button>
        </div>
        <div className="res-container grid grid-cols-6 gap-3">
          {filterListOfRes.map((restaurant) => ( 
            <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
              {restaurant.info.promoted?(<PromotedResCard resData={restaurant}/>) :(<ResCard resData={restaurant}/>)}  
              </Link>
          ))}
        </div>
      </div>
    );
  };
  export default Body;
