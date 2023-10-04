import {Component} from 'react'

import CarDetails from '../CarDetails'

import './index.css'

class AboutCars extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {carsList} = this.props
    const searchResults = carsList.filter(eachCar =>
      eachCar.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="search-container">
        <div className="cars-search-container">
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search..."
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
              className="search-icon"
            />
          </div>

          <ul className="cars-list">
            {searchResults.map(eachCar => (
              <CarDetails key={eachCar.id} carDetails={eachCar} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutCars
