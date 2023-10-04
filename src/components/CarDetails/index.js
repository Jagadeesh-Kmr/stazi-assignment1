import {AiOutlineHeart} from 'react-icons/ai'
import {RiSteering2Line} from 'react-icons/ri'
import {GiSpeedometer} from 'react-icons/gi'
import {BiGasPump} from 'react-icons/bi'
import {MdPeopleOutline} from 'react-icons/md'

import './index.css'

const CarDetails = props => {
  const {carDetails} = props
  const {name, imgUrl, model, people, type, km, engine, dollars} = carDetails

  return (
    <li className="car-item">
      <div className="car-container">
        <img src={imgUrl} alt={name} className="car-image" />
        <div className="car-name-container">
          <p className="name">{name}</p>
          <button type="button" className="model-button">
            {model}
          </button>
        </div>
        <div className="car-capacity-container">
          <MdPeopleOutline className="react-icons" />
          <p style={{paddingRight: '50px'}}>{people}</p>
          <BiGasPump className="react-icons" />
          <p>{type}</p>
        </div>
        <div className="car-capacity-container">
          <GiSpeedometer className="react-icons" />
          <p style={{paddingRight: '20px'}}>{km}</p>
          <RiSteering2Line className="react-icons" />
          <p>{engine}</p>
        </div>
        <hr />
        <div className="car-capacity-container">
          <div>
            <p className="dollar">
              {dollars} <span className="month"> / month</span>
            </p>
          </div>
          <button type="button" className="like-btn">
            <AiOutlineHeart className="react-icons" />
          </button>
          <button type="button" className="rent-now">
            Rent Now
          </button>
        </div>
      </div>
    </li>
  )
}

export default CarDetails
