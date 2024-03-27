import './index.css'

const EventItem = props => {
  const {eachEvent, activeEvent, isActive} = props
  const {id, imageUrl, name, location} = eachEvent

  const btnClass = isActive ? 'selected-btn' : 'img-btn'

  const activeEventList = () => {
    activeEvent(id)
  }

  return (
    <li className="event-item-card">
      <button type="button" onClick={activeEventList} className={btnClass}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
