import { FaCheck, FaTimes } from "react-icons/fa";
import './ToggleSwitch.css'

const ToggleSwitch = ({ register, name, options }) => {
  return (
    <fieldset className="container d-flex justify-content-between my-5 px-5">
      <label className="label-available mt-1" htmlFor="switch-input">Available</label>
      <label className="switch-checkbox" htmlFor="switch-input">
      <input type="checkbox" id="switch-input" placeholder="" {...register(name, options)} />
        <span>
          <FaCheck className={`check-icon on ${register(name, options).value ? 'active' : ''}`} />
          <FaTimes className={`check-icon off ${!register(name, options).value ? 'active' : ''}`} />
        </span>
      </label>
    </fieldset>
  )
}

export default ToggleSwitch;