import {React , createContext,useReducer,Fragment, useEffect} from 'react'
import './App.css';
import {Switch,Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';
import Navlog from './components/Navlog';
import Home from './components/Home'
import Profile from './components/Profile'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {reducer , initialState} from './Reducer/userRed'
import HomeSign from './components/HomeSign';
import CreatePost from './components/CreatePost';
import Logout from './components/Logout';

export const userContext = createContext()


function App() {
  let [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    localStorage.setItem('state',state)
    localStorage.setItem('LoggedIn',false)
  }, [state])
  useEffect(() => {
    console.log(localStorage.getItem('state'))
    console.log(localStorage.getItem('LoggedIn'))
  }, [])
  const Routelog = ()=>{
    return(
      <>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/profile' exact component={Profile}/> 
        <Route path='/createPost' exact component={CreatePost}/> 
        <Route path='/logout' exact component={Logout}/>
        <Redirect to='/'/>
        </Switch>

         
      </>
    )
  }
  const RouteSign = ()=>{
    return(
      <>
       <Switch>
        <Route path='/' exact component={HomeSign}/> 
        <Route path='/signup' exact component={SignUp} />  
        <Route  path='/signin' exact component={SignIn}/>
        <Redirect to='/'/>
        </Switch>
      </>
    )
  }

  return (
    <Fragment>
    <userContext.Provider value={{state,dispatch}}>
      {/* { islogged ? <Navlog/> : <Navbar/>}
       { islogged ? <Routelog/>: <RouteSign/>} */}
      { state ? <Navlog/> : <Navbar/>}
       {state ? <Routelog/>: <RouteSign/>}
      </userContext.Provider>
    </Fragment>
  );
}

export default App;