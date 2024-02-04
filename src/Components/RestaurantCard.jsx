    import {IMG_CDN_URL} from "../utils/contants"
    import star from "../Images/star1.png"
    export const RestaurantCard = (props) => {

        const {resData} = props;
        const maxCuisinesToShow = 3;

        const {name,avgRating,cuisines,cloudinaryImageId,sla} = resData;

        return (
            <div className="rescard">
                <img className="imgrescard" src={ IMG_CDN_URL + cloudinaryImageId}  />
                <h4 className="TitleCard">{name}</h4>

                <div className="ratingCard">
                   <img src={star} alt="" /> 
                    <span> {avgRating}</span>
                    <p className="timeCard"> {sla.slaString}</p>
                    </div>
                    
                    <p className="priceCard">
                    {cuisines.slice(0, maxCuisinesToShow).join(', ')}

                    </p>
        

                {/* // <button className="ButtnCard">Add</button>  */}
            </div>
        )
    }




