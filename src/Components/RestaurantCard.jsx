import { IMG_CDN_URL } from "../utils/contants";
// import {ITEM_IMG_CDN_URL} from "../utils/contants";
import star from "../Images/star1.png";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const maxCuisinesToShow = 1;

  const { name, avgRating, cuisines, cloudinaryImageId, sla } = resData.info;

  return (
    <div className="rescard">
      <img loading="lazy" className="rounded-3xl w-[90px] h-[150px]" src={IMG_CDN_URL + cloudinaryImageId}  />
      <h4 className="TitleCard text-center">{name}</h4>
      <div className="ratingCard flex items-center justify-center">
        <img src={star} alt="Star" className="w-4 h-4" />
        <span className="ml-1">{avgRating}</span>
        <p className="timeCard ml-2">{sla?.slaString}</p>
        <div className="priceCard ml-5">
          {cuisines.slice(0, maxCuisinesToShow).join(', ')}
        </div>
      </div>
    </div>
  );
};
