import AboutCars from './components/AboutCars'

import './App.css'

const carsList = [
  {
    id: 1,
    name: 'Toyato RAV4',
    imgUrl:
      'https://www.longotoyota.com/blogs/4337/wp-content/uploads/2023/01/2023-Toyota-RAV4.jpg',
    model: '2021',
    people: '4 People',
    type: 'Hybrid',
    km: '6.1Km / 1-liter',
    engine: 'Automatic',
    dollars: '$440',
  },
  {
    id: 2,
    name: 'BMW 3 series',
    imgUrl:
      'https://editorial.pxcrush.net/carsales/general/editorial/bmw-330i-iconic-004.jpg?width=496&height=331',
    model: '2019',
    people: '4 People',
    type: 'Gasoline',
    km: '8.2Km / 1-liter',
    engine: 'Automatic',
    dollars: '$350',
  },
  {
    id: 3,
    name: 'VolksWagen T-Cross',
    imgUrl: 'https://i.ytimg.com/vi/cgFYqnxPMkY/maxresdefault.jpg',
    model: '2020',
    people: '4 People',
    type: 'Gasoline',
    km: '5.3Km / 1-liter',
    engine: 'Automatic',
    dollars: '$400',
  },
  {
    id: 4,
    name: 'Cadillac Escalade',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Cadillac_Escalade_ESV_Platinum_GMTK2XX_Black_Raven_%281%29.jpg',
    model: '2020',
    people: '4 People',
    type: 'Gasoline',
    km: '7.7Km / 1-liter',
    engine: 'Automatic',
    dollars: '$620',
  },
  {
    id: 5,
    name: 'BMW 4 Series GTI',
    imgUrl:
      'https://cdn.bmwblog.com/wp-content/uploads/2018/07/Red-BMW-4-Series-Gran-Coupe-M-Performance-parts-13.jpg',
    model: '2021',
    people: '4 People',
    type: 'Gasoline',
    km: '7.6Km / 1-liter',
    engine: 'Automatic',
    dollars: '$530',
  },
  {
    id: 6,
    name: 'BMW 4 Series',
    imgUrl:
      'https://www.ravenswoodperformance.com/wp-content/uploads/2023/03/3-2.jpg',
    model: '2019',
    people: '4 People',
    type: 'Gasoline',
    km: '7.2Km / 1-liter',
    engine: 'Automatic',
    dollars: '$490',
  },
]

const App = () => (
  <>
    <div className="app-container">
      <AboutCars carsList={carsList} />
    </div>
  </>
)

export default App
