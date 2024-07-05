const ResCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card m-4 p-3 w-[200] min-h-[400] bg-gray-200 rounded-lg hover:border border-solid border-black" >
        <img
          className="cardLogo rounded-lg"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/"+resData.info.cloudinaryImageId}/>
        <div className="info m-2">
        <h3 className="font-bold">{resData.info.name}</h3>
        <h5 >{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRating}</h5>
        <h4 >{resData.info.costForTwo}</h4>
        </div>
      </div>
    );
  };

export const ResCardWithPromoted=(ResCard)=>{
  return(props)=>{
    return(      
        <div>
        <label>promoted{...props}</label>
        <ResCard/>
        </div>    
    );
  };
};
  export default ResCard;