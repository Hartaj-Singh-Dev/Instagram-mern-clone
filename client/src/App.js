import {React , createContext,useReducer,Fragment} from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Navlog from './components/Navlog';
import Home from './components/Home'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {reducer , initialState} from './Reducer/userRed'

export const userContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const Routelog = ()=>{
    return(
      <div>
        <Route path='/' exact component={Home}/>  
        {/* <Route path='/signup' exact component={SignUp} />  
        <Route  path='/signin' exact component={SignIn}/> */}
         
      </div>
    )
  }
  const RouteSign = ()=>{
    return(
      <div>
        <Route path='/signup' exact component={SignUp} />  
        <Route  path='/signin' exact component={SignIn}/>
        
      </div>
    )
  }

  return (
    <Fragment>
    <userContext.Provider value={{state,dispatch}}>
      { state ? <Navlog/> : <Navbar/>}
      <Switch>
        {state ? <Routelog/>: <RouteSign/>}
        <Route component={Error} />
      </Switch>
      </userContext.Provider>
    </Fragment>
  );
}

export default App;