import star from "../Images/star1.png"
import { Shimmer } from './Shimmer';
import {ITEM_IMG_CDN_URL} from '../utils/contants'
import { useParams } from 'react-router-dom';
import { useRestaurantMenu } from "../utils/useRestaurantMenu";





export const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);
 

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(swigy_apiMenuIt + resId);
  //     const json = await data.json();
  //     setResInfo(json.data);
  //     // console.log(json.data)
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };



  if (resInfo === null) {
    return <Shimmer />;
  } else {

    /* 
    This code will dynamically find the objects containing restaurant information, offer information, and item cards by iterating through the resInfo.cards array and checking for the presence of the required properties. If found, it extracts the necessary data; otherwise, it defaults to an empty object or array to prevent errors.
    */
    const restaurantCard = resInfo.cards.find(card => card?.card?.card?.info);
    const { name, cuisines, avgRating, city } = restaurantCard?.card?.card?.info || {};
    
    // Find the object containing offer information
    const offerCard = resInfo.cards.find(card => card?.card?.card?.gridElements?.infoWithStyle?.offers);
    const { header, couponCode, description } = offerCard?.card?.card?.gridElements?.infoWithStyle?.offers[0]?.info || {};
    
    // Find the object containing item cards
    const itemCardsGroup = resInfo.cards.find(card =>
      card?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    );
    const { itemCards } = itemCardsGroup?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    return (
          <div className='menu'>
        <h4 className="name_menu">{name}</h4>
        <div className='cuisine_container'>
        <p className='cuisines_menu'>{cuisines.join(",")}</p>
        <p className='city_menu'>{city}</p>
        </div>
        <p className='rating_menu'>
          {avgRating}  <img src={star} alt="" /> 
          </p>
          <div className="line"></div>



          <div className='cardinfo_display'>
          <div className='cardinfo_details'>
            <p className='cardheader'>{header}</p>
            <p className='cardcoupon'>{couponCode} | {description} </p>
            
          </div>

          <div className='cardinfo_details'>
            <p className='cardheader'>{header}</p>
            <p className='cardcoupon'>{couponCode} | {description} </p>
            
          </div>

          <div className='cardinfo_details'>
            <p className='cardheader'>{header}</p>
            <p className='cardcoupon'>{couponCode} | {description} </p>
            
          </div>


          </div>


            <div className='menu_carditems'>
              <ul className='item_card_list'>
                {itemCards.map(item => (
                  <li className='item_card_name' key={item.card.info.id}>{item.card.info.name}
                  <p className='item_card_price'> ₹ {item.card.info.price / 100 || item.card.info.defaultPrice /100} </p>
                  <p className='item_card_descript'>{item.card.info.description}</p>
                  <div>
                  <img className="rounded-3xl w-[100px] h-[100px]" src={ITEM_IMG_CDN_URL + item.card.info.imageId} alt="" />
                  <button className='item_card_button'><p>Add</p></button>
                  </div>
                  
                  <hr className='line_item' />
                  </li>
            
                  ))}
                
                
              </ul>

            </div>
            
      </div>


    
      
    
    );
  }
};
