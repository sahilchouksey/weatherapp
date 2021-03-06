import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import debounce from 'lodash.debounce';
import './App.css';

// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/UserOutput'

// class App extends Component {
//   state = {
//     input: null,

//     response: {
//       city: null,
//       country: null,
//       weather: null,
//       temp: null,
//       windSpeed: null,
//       pressure: null,
//       humidity: null
//     }
//   }

//   inputChangeHandler = (inputID, event) => {
//     console.log("Input Changed")
//     event.preventDefault();
//     const inputField = document.getElementById(inputID);

//     this.setState({
//       input: inputField.value
//     })

//     console.log(this.state.input, inputField.value);

//     this.getWeaterInfo(this.state.input)

//   }


//   getWeaterInfo = async (cityName) => {
//     console.log(cityName);

//     if (cityName) {
//       const data = await axios(`https://openweathermap.org/data/2.5/find?q=${cityName}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`);     
//       const cityWeatherInfo = data.data.list[0];
//       return this.setState({
//         response: {
//           city: cityWeatherInfo.name,
//           country: cityWeatherInfo.sys.country,
//           weather: cityWeatherInfo.weather.description,
//           temp: cityWeatherInfo.main.temp - 273.15,
//           windSpeed: cityWeatherInfo.wind.speed,
//           pressure: cityWeatherInfo.main.pressure,
//           humidity: cityWeatherInfo.main.humidity
//         }
//       })
//     }
//   }


//   render() {

//     return (
//       <div className="App">
//         <h1>Enter Your City Name:</h1>
//         <UserInput changed={this.inputChangeHandler} input={this.state.input}/>
//         {this.state.input ? <UserOutput data={this.state.response}/> : <span></span>}
//       </div>
//     );
//   }}




/*
class ComponentOne extends Component {
 
  // Defining the componentWillUnmount method
  componentWillUnmount() {
    alert('The component is going to be unmounted');
  }
 
  render() {
    return <h1>Hello Geeks!</h1>;
  }
}
 
class App extends Component {
  state = { display: true };

  delete = () => {
    this.setState({ display: false });
  };
 
  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponentOne />;
    }
    return (
      <div>
        {comp}
        <button onClick={this.delete}>
          Delete the component
        </button>
      </div>
    );
  }
}
 
*/

/*
const OkChanger = ({ setOkState }) => { // {setOkState} === props.setOkState

  return <button onClick={() => setOkState("NIGGAAAAAAAAAAAAAAA")} >Change Ok</button>
}

const App = () => {
  const [okState, setOkState] = useState('');

  return (
    <div>
      {okState}

      { okState === '' ? <OkChanger setOkState={setOkState} /> : <span></span>}
    </div>
  )
}
*/


// Conditional Rendering

/*
class App extends Component {
  state = { isLogged: false };
  
  handleLoginClick = () => {
    this.setState({ isLogged: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLogged: false });
  }
  
  render() {
    const isLogged = this.state.isLogged;
    let button = !isLogged ? <LoginButton clickHandler={this.handleLoginClick}/> : <LogoutButton clickHandler={this.handleLogoutClick}/>; 
    
    return (
      <div>
        <Greeting isLogged={isLogged}/>
        {button}
      </div>
    );
  }
}

const UserGreeting = (props) => <h1>Welcome back!</h1>;


const GuestGreeting = (props) => <h1>Please sign up.</h1>;


const Greeting = (props) => {
  const isLogged = props.isLogged;
  return (isLogged ? <UserGreeting/> : <GuestGreeting/>);
};

const LoginButton = (props) => {
  return (
    <button onClick={props.clickHandler}>
      Login
    </button>
  )
}

const LogoutButton = (props) => {
  return (
    <button onClick={props.clickHandler}>
      Logout
    </button>
  )
}
*/








/* invitation checker

function InvitationChecker(props) {
  if (props.personName) {
   let flag = 0; 
   let msg;
   props.list.forEach(person => {
     
     if (person.toLowerCase() === props.personName) {
       flag++;
       console.log(person.toLowerCase() === props.personName, flag)

       msg = <p>You are invited!</p>;
     };
   });
    
    if (flag === 0) msg = <p>Ops! sorry you are not invited</p>;
    
    return msg;
  } 
  return <p></p>;
}

class Party extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      list: [
        "Sahil",
        "xix3r",
        "nerd",
        "doomer",
        "Harshit",
        "eren",
        "Adarsh"
      ]
    };
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    const name = this.state.name;
    
    const fieldStyle = {
      textAlign: "center"
    }
    
    return (
      <fieldset style={fieldStyle}>
        <legend>Enter Your Name to Check whether you get Invited or not:</legend>
        <input
          type="text"
          value={name}
          onChange={this.handleChange} />
        <InvitationChecker
          personName={name}
          list={this.state.list}  />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Party />,
  document.getElementById('root')
);

  
*/















// temperature converter
/**
 
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};


function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = ( Number.isNaN(this.state.temperature) ? false : this.state.temperature);
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
        <p> {console.log( !(isNaN(parseInt(temperature))) )} {(temperature && !(isNaN(parseInt(temperature)))) ? `${tryConvert(temperature, this.props.converter)}°${scale.toUpperCase() === "C" ? "F" : "C"}` :  " "} </p>
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  }

  render() {
    return (
      <div>
        <TemperatureInput scale="c" converter={this.toFahrenheit.bind(this)}/>
        <TemperatureInput scale="f" converter={this.toCelsius.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);



 
 */







// Showing Danger to the user
/*
const ThrowWarning = (props) => {
  !props.warn && null;

  return (
      <div className="warning">
        Warning!
      </div>
  )

}

class App extends Component {
  state = { showWarning: true };

  handleToggleClick = () => {
    this.setState({ 
      showWarning: !this.state.showWarning
    })
  }

  styles = {
    textAlign: 'center'
  }

  render() {
    return (
      <div style={this.stychnageles}>
        <ThrowWarning warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? "Hide" : "Show"}</button>
      </div>
    )
  }
}
*/

























// Temperature Converter (C, F, K)
/*----------------------------------------------------------------
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin'
};

// Convert Fahrenheit & Kelvin W Celsius
const toFahrenheitWCelsius = (celsius) => {
  return (celsius * (9/5)) + 32;
}

const toKelvinWCelsius = (celsius) => { 
  return celsius + 273.15;
}

// Convert Celsius & Kelvin W Fahrenheit
const toCelsiusWFahrenheit = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
}

const toKelvinWFahrenheit = (fahrenheit) => { 
  return (fahrenheit - 32) * 5/9 + 273.15;
}


// Convert Celsius & Fahrenheit W Kelvin
const toCelsiusWKelvin = (kelvin) => {
  return kelvin - 273.15;
}

const toFahrenheitWKelvin = (kelvin) => { 
  return (kelvin - 273.15) * 9/5 + 32;
}



const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) '';
  
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


const CalculatorInput = (props) => {
  const handleChange = e => props.onTemperatureChange(e.target.value);

  const temperature = props.temperature;
  const scale = props.scale;
  return (
    <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input className="inputBox" value={temperature}
               onChange={handleChange.bind(this)} />
    </fieldset>
  )
};


const Calculator = props => {
  const [temperature, changeTemperature] = useState('');
  const [scale, changeScale] = useState('c');

  const handleCelsiusChange = temperature => {
    changeTemperature(temperature);
    changeScale('c');
  }  
  
  const handleFahrenheitChange = temperature => {
    changeTemperature(temperature);
    changeScale('f');
  }  
  
  const handleKelvinChange = temperature => {
    changeTemperature(temperature);
    changeScale('k');
  }


  
  const converter = (scale) => {
    if (scale === 'c') {
      const celsius = temperature;
      const fahrenheit = temperature ? tryConvert(temperature, toFahrenheitWCelsius) : temperature;
      const kelvin = temperature ? tryConvert(temperature, toKelvinWCelsius) : temperature;

      return [celsius, fahrenheit, kelvin];
    }

    else if (scale === 'f') {
      const fahrenheit = temperature;
      const celsius = temperature ? tryConvert(temperature, toCelsiusWFahrenheit) : temperature;
      const kelvin = temperature ? tryConvert(temperature, toKelvinWFahrenheit) : temperature;

      return [celsius, fahrenheit, kelvin];
    }
    
    else if (scale === 'k') {
      const kelvin = temperature;
      const celsius = temperature ? tryConvert(temperature, toCelsiusWKelvin) : temperature;
      const fahrenheit = temperature ? tryConvert(temperature, toFahrenheitWKelvin) : temperature;

      return [celsius, fahrenheit, kelvin];
    }
  }

  const [celsius, fahrenheit, kelvin] = converter(scale);


  return (
    <div className="container">
      <CalculatorInput
        scale='c'
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <CalculatorInput
        scale='f'
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <CalculatorInput
        scale='k'
        temperature={kelvin}
        onTemperatureChange={handleKelvinChange}
      />
    </div>
  );
};

const App = Calculator;
----------------------------------------------------------------*/



// // Searchable product data table

// // Product API response
// const PRODUCTS = [
//   {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//   {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//   {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//   {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//   {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//   {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];


// const ProductCategoryRow = props => {
//   const category = props.category;

//   return (
//     <tr>
//       <th>{category}</th>
//     </tr>
//   )
// };

// const ProductRow = props => {
//   const product = props.product;
//   const input = props.input;
//   const productName = product.name;
//   const productPrice = product.price;
//   const productStock = product.stocked;
  
//   let flag = 0;

//   const productStyle = {
//     color: 'red'
//   }

//   if (input) {
//     if (product.name.toLowerCase().startsWith(input.toLowerCase())) {
//       return (
//         <tr>
//           <td style={productStock ? {} : productStyle}>{productName}</td>
//           <td>{productPrice}</td>
//         </tr>
//       )
//     } else {
//       return <tr></tr>
//     }
//   }

  
//   return (
//     <tr>
//       <td style={productStock ? {} : productStyle}>{productName}</td>
//       <td>{productPrice}</td>
//     </tr>
//   );
// };


// const ProductTable = props => {
//   const products = props.products;
//   const input = props.input;
//   const checked = props.checked;
//   let rows = [];
//   const categories = [];

//   products.forEach(product => {
//     if (!categories.includes(product.category)) {
//       categories.push(product.category);
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} />
//       )
//     }

//     if (checked) {
//       if (product.stocked) {
//         rows.push(
//           <ProductRow
//             product={product}
//             key={product.name}
//             input={input} />
//         );
//       }
//     } else {
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//           input={input} />
//       );
//     }
//   });

//   console.log(rows);

//   return (
//   <table>
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Price</th>
//       </tr>
//     </thead>
//     <tbody>
//       {rows}
//     </tbody>
//   </table>
//   )
// };

// const SearchBar = props => {
//   const handleInputChange = e => props.handleInput(e.target.value);
//   const handleCheckboxChange = () => props.handleCheckbox();

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={props.input}
//         onChange={handleInputChange} />
//       <br/>
//       <input
//         type="checkbox"
//         onChange={handleCheckboxChange.bind(this)} />
//       Only show products in stock
//     </div>
//   )
// };

// const FilterableProductTable = props => {
//   const [input, handleInputChange] = useState('');
//   const [checkbox, handleCheckboxChange] = useState(false);

//   const handleInput = (input) => handleInputChange(input);
//   const handleCheckbox = () => handleCheckboxChange(!checkbox);

//   return (
//     <div>
//       <SearchBar
//         input={input}
//         handleInput={handleInput}
//         handleCheckbox={handleCheckbox} />
//       <ProductTable 
//         products={PRODUCTS}
//         input={input}
//         checked={checkbox} />
//     </div>
//   )
// }

// const App = FilterableProductTable;












// convert kelvin to celsius 
const toCelsius = (kelvin) => {
  const celsius = kelvin - 273.15;
  return Math.round(parseFloat(celsius.toString().substr(0,5)))
}


// debounce function
const debounce = (func, delay) => { 
  let debounceTimer 
  return function() { 
      const context = this
      const args = arguments 
          clearTimeout(debounceTimer) 
              debounceTimer 
          = setTimeout(() => func.apply(context, args), delay) 
  } 
}


// limit City name
const limitCityName = (cityName, limit = 15) => {
  const newName = [];
  if (cityName.length > limit) {
    cityName.split(' ').reduce((prev, curr) => {
      const name = prev + curr.length;
      if (name <= limit) {
        newName.push(curr);
      }
      return name;
    }, 0)
    const len = cityName.split(' ').length;
    return `${newName.join(' ')}... ${cityName.split(' ')[len-1]}`;
  }
  return cityName;
};


















const ThrowCharLimitError = (props) => {
  return <strong className="error--char">City name must be at least 3 characters long</strong>
}



const City = ({result}) => {
  const [clicked, handleClick] = useState(false);


  const weather = result.main;
  const id = `#${result.id}`; 
  const handleClickChange = (bol) => handleClick(bol);

  return (
    <li className="cities__item" onClick={handleClickChange.bind(this, !clicked)}>
      <p className="cities__name">{limitCityName(result.name)}, {result.sys.country}</p>
      <span className="cities__temp">{toCelsius(weather.temp)}&deg;C</span>
      <a className="cities__btn" >view details</a>
      <div className="popup-box" style={clicked ? {display: 'block'} : {display: 'none'}} >
        <div className="popup-content">
          <div className="popup-header">
            <a onClick={handleClickChange.bind(this, !clicked)}>
              <svg className="popup-header__icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" >
                <path fillRule="evenodd" clipRule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black"></path>
              </svg>
            </a>
            <h2 className="popup-header__heading">{limitCityName(result.name)}, {result.sys.country}</h2>
          </div>

          <div className="popup-body">
            <ul className="popup-list">
              <li className="popup-item">
                <p className="popup-type">Temperature</p>
                <p className="popup-val">{toCelsius(weather.temp)}&deg;C</p>
              </li>

              <li className="popup-item">
                <p className="popup-type">Feels like</p>
                <p className="popup-val">{toCelsius(weather.feels_like)}&deg;C</p>
              </li>

              <li className="popup-item">
                <p className="popup-type">Description</p>
                <p className="popup-val">{result.weather[0].description}</p>
              </li>
              
              <li className="popup-item">
                <p className="popup-type">Wind Speed</p>
                <p className="popup-val">{result.wind.speed}M/S</p>
              </li>

              <li className="popup-item">
                <p className="popup-type">Humidity</p>
                <p className="popup-val">{weather.humidity}%</p>
              </li>

              <li className="popup-item">
                <p className="popup-type">Pressure</p>
                <p className="popup-val">{weather.pressure}hPa</p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
};











const UserOutput = ({input}) => {
  const [list, handleList] = useState('');

  useEffect(() => {
    const response = async (cityName) => {
      if (cityName.trim().length > 0 && cityName.trim().length <= 2) handleList(<ThrowCharLimitError/>)
      else if (cityName.trim().length > 2) {
  
        try {
          const data = await axios(`https://openweathermap.org/data/2.5/find?q=${cityName}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`);
  
          const list = data.data.list
  
          if (list.length > 0) handleList(list.map(el => <City result={el} key={el.id}/>));
          else handleList(<p className="error--noResultsFound">No results found</p>);

        } catch (error) {
          alert(error)
        }
      }
    
      else handleList('')
    };
    response(input);
  
  }, [input]);


  return (
    <ul className="cities__list">
      {list}
    </ul>
  )
};







const UserInput = ({input, handleInputChange}) => {
  const handleInput = (e) => handleInputChange(e.target.value);

  return (
    <form className="AutoSearchForm">
      <div className="AutoSearchInput-search-box">
      <span className="AutoSearchInput-icon-container">
        <svg xlinkHref="http://www.w3.org/1999/xlink" className="AutoSearchInput-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100"  height="100" ><g fill="black"><rect height="10.24" rx="2.29" transform="rotate(45 78.75 78.75)" width="38.41" x="59.55" y="73.63"/><path d="M60.675 57.051l9.05 9.051-3.62 3.62-9.05-9.05z"/><path d="M37.16 5a32.16 32.16 0 1032.15 32.16A32.16 32.16 0 0037.16 5zm0 56.27a24.12 24.12 0 1124.11-24.11 24.12 24.12 0 01-24.11 24.11zM65.26 67.27l-2.53 2.53-.93-3.46-.93-3.46 3.46.93 3.46.93z"/><path d="M67.27 65.26l-2.53 2.53-.93-3.46-.93-3.46 3.46.93 3.46.93z"/></g></svg>
      </span>
      <input 
        className="AutoSearchInput-inputbox"
        placeholder="Search city"
        onChange={e => {
          e.persist();

          debounce(() => {
            handleInput(e)
          }, 750)();

         }}
        />
      </div>
    </form>
  )
};




const Search = (props) => {
  const [input, handleInputChange] = useState('');
  const handleInput = userInput => handleInputChange(userInput); 

  return (
    <div className="container">
      <h1 className="heading">Weather App</h1>
      <UserInput
       input={input}
       handleInputChange={handleInput}
        />
      <UserOutput
        input={input}
         />
    </div>
  )
}





const DisplayWeather = (props) => {
  return (
    <Search/>
  );
};

const App = DisplayWeather;

export default App;
