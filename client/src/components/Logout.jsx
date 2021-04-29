import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import {userContext} from '../App'

const Logout = () => {
    const {state,dispatch} = useContext(userContext)
    const history = useHistory()

    const LOGOUT =async ()=>{
       const res = await fetch("http://localhost:8000/logout",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:'include'
        }).then(()=>{
            dispatch({type:"USER",payload:false})
            localStorage.setItem('LoggedIn',false)
            history.push('/')
        }
        ).catch((err)=>{console.log(err);})
    }
    useEffect(() => {
        LOGOUT()
    }, [])
    return (
        <div>
            Logouted
        </div>
    )
}

export default Logout
