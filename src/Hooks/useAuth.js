import React from 'react'
import { useSelector } from 'react-redux'
import { getAccessToken, getUser } from '../Store/AuthSlice'

const useAuth = () => {
    // const user = JSON.parse(useSelector(getUser))
    const user = JSON.parse(localStorage.getItem('user'))
    const accessToken = useSelector(getAccessToken)
  return {user, accessToken}
}

export default useAuth