import React from 'react'

import locationData from '../constants/LocationData'
import ReturnButton from './ReturnButton'

const HotelInfo = props => {

  let cities = locationData.localCities.map((city) => {
    return(
      <span className="localCity" key={city.name}>
        <span className="cityName">{city.name}</span>
        <div className='distance'>({city.distance} min drive)</div>
      </span>
    )
  })

  let hotels = locationData.localHotels.map((hotel) => {
    return(
      <div className="localHotel" key={hotel.name}>
        <a href={hotel.website}>
          <span className='hotelName'>{hotel.name}</span>
        </a>
        <div className='hotelAddress'>{hotel.address}</div>
        <div className='hotelPhone'>{hotel.phone}</div>
        <div className='distance'>({hotel.distance} min drive)</div>
      </div>
    )
  })

  let haunts = locationData.localHaunts.map((place) => {
    return (
      <div className="localPlace" key={place.name}>
        <a href={place.website}>
          <div className='placeName'>
            {place.name}
          </div>
        </a>
        <p className='placeNote'>{place.note}</p>
      </div>
    )
  })

  return(
    <div className='page hotelPage'>
      <div className='heading'>Location Information</div>
      <br/>
      <div>
        <div className='title'>Ceremony and Reception</div>
        <p>The ceremony and reception are both being held at the beautiful Castle Manor Inn in Gloucester, MA.</p>
        <p className='smallerText'>Clicking on the image below will take you to their website:</p>
        <a href='http://castlemanorinn.com/'><img src='https://i.imgur.com/44n87rO.png' alt='Castle Manor Inn Logo' className='castleLogo'/></a>
        <p>The inn is ours for the weekend, and includes a restaurant as well as a limited supply of available rooms.  Please give Laura a call at (978) 515-7386 as soon as you can to make sure there is a room available.</p>
      </div>
      <div>
        <div className='title'>Booking a Room Elsewhere</div>
        <p>We wanted to share the most beautiful time of year in New England with all of our family and friends; unfortunately, this means that hotels will fill quickly.  The good news is that there are plenty of local hotels.</p>
        <p>Some hotels that are also in Gloucester include:</p>
        <div className='hotelsList'>
          {hotels}
        </div>
        <p>If you are unable to find a hotel in Gloucester the best local cities to check are:</p>
        <div className='citiesList'>
          {cities}
        </div>
      </div>
      <div>
        <div className='title'>Things to Do in the Area</div>
        <p>Since we know that most of our invitees will be coming from out of town, you are more than welcome to spend the whole weekend with us!  If you would like to set out on your own, some fun local haunts are:</p>
        <div className='hauntsList'>
          {haunts}
        </div>
        <p>Of course, you don't have to leave the Inn to have fun!  The grounds are ours for the weekend - you're welcome to take a walk along the grass, enjoy a meal at the restaurant, or even participate in lawn games.</p>
        <p>Have an idea for a fun activity?  Let us know!</p>
      </div>
      <ReturnButton />
    </div>
  )
}

export default HotelInfo
