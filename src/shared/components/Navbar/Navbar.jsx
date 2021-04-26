import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Navbar.scss';
import { Select } from '../../library';
import { cities } from '../../constants';
import useForm from '../../hooks/useForm';
import { setCity } from '../../store/actions/weather';


const Navbar = ({ setCity }) => {
  const { state, selectChangeHandler } = useForm({ city: '' });

  useEffect(() => {
    setCity(state.city);
  }, [setCity, state]);

  const selectOptions = cities.map((city, i) => {
    return (
      <div
        key    = {i}
        label  = {city}
        value  = {city}
        icon   = {<i className="far fa-building" />}
      />
    );
  });

  return (
    <header className="navbar">
      <h3>Weather App</h3>

      <nav>
        <ul>
          <li>
            <Select 
              optsMaxHeight = {300} 
              name          = "city"
              value         = {state.city}
              placeholder   = "Select City..."
              onChange      = {selectChangeHandler}
            >
              {selectOptions}
            </Select>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default connect(null, { setCity })(Navbar);
