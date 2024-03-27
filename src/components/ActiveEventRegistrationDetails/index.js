import './index.css'

const statusList = {
  yetTo: 'YET_TO_REGISTER',
  completed: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getActiveStatus} = props

  const noAction = () => (
    <div className="no-active-cont">
      <p className="register-desc">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const registerView = () => (
    <div className="active-event-bg-container">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-register"
        />
        <p className="register-desc">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you to fall totally in love with this
          beautiful art form.{' '}
        </p>
        <button type="button" className="register-btn">
          Register Here
        </button>
      </div>
    </div>
  )

  const registeredView = () => (
    <div className="active-event-bg-container">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered"
        />
        <h1 className="registered-desc">
          You have already registered for the event
        </h1>
      </div>
    </div>
  )

  const closedView = () => (
    <div className="active-event-bg-container">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registrations-closed"
        />
        <h1 className="closed-head">Registrations Are closed Now! </h1>
        <p className="closed-desc">
          Stay tuned. We will reopen the registration soon
        </p>
      </div>
    </div>
  )

  const result = () => {
    switch (getActiveStatus) {
      case statusList.yetTo:
        return registerView()
      case statusList.completed:
        return registeredView()
      case statusList.closed:
        return closedView()
      default:
        return noAction()
    }
  }

  return result()
}

export default ActiveEventRegistrationDetails
