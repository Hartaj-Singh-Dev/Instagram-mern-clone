import {React , createContext,useReducer,Fragment} from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Navlog from './components/Navlog';
import Home from './components/Home'
import Profile from './components/Profile'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {reducer , initialState} from './Reducer/userRed'
import HomeSign from './components/HomeSign';

export const userContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const Routelog = ()=>{
    return(
      <>
        <Route path='/' exact component={Home}/>
        <Route path='/profile' exact component={Profile}/>  
        {/* <Route path='/signup' exact component={SignUp} />  
        <Route  path='/signin' exact component={SignIn}/> */}
         
      </>
    )
  }
  const RouteSign = ()=>{
    return(
      <>
        <Route path='/' exact component={HomeSign}/>  
        <Route path='/signup' exact component={SignUp} />  
        <Route  path='/signin' exact component={SignIn}/>
      </>
    )
  }

  return (
    <Fragment>
    <userContext.Provider value={{state,dispatch}}>
      { state ? <Navlog/> : <Navbar/>}
      <Switch>
        {state ? <Routelog/>: <RouteSign/>}
        
      </Switch>
      </userContext.Provider>
    </Fragment>
  );
}

export default App;