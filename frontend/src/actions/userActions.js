import axios from 'axios'

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOGIN_REQUEST',
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer <token>`,
      },
    } //we want to send this as a header.

    const data = await axios.post(
      'http://localhost:3000/login',
      { username, password },
      config
    )

    localStorage.setItem(
      'userInfo',
      JSON.stringify(data),
      (data.token = localStorage.token)
    )

    console.log(data) //pass all these arguments in and then extract data from the response

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data })

    // localStorage.setItem('userInfo', JSON.stringify(data)) //save the userinfo to localstorage. we stringify it cuz localstorage only saves strings. we later parse it back to JSON to use with javascript.
    // //we take the localstorage userinfo data in the initial state in store.js
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }) //the payload here checks for our custom message. if it exists, send the custom message, if not, send generic message}
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: 'USER_LOGOUT' })
  dispatch({ type: 'USER_DETAILS_RESET' })
}

export const register = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_REGISTER_REQUEST',
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer <token>`,
      },
    } //we want to send this as a header

    const { data } = await axios.post(
      'http://localhost:3000/users',
      { username, password },
      config
    ) //pass all these arguments in and then extract data from the response

    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: data })

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data }) //we want the user to be immediately logged in if registration is successful

    localStorage.setItem(
      'userInfo',
      JSON.stringify(data),
      (data.token = localStorage.token)
    ) //save the userinfo to localstorage. we stringify it cuz localstorage only saves strings. we later parse it back to JSON to use with javascript.
    //we take the localstorage userinfo data in the initial state in store.js
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }) //the payload here checks for our custom message. if it exists, send the custom message, if not, send generic message}
  }
}

export const updateUser = (userId, location) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_UPDATE_REQUEST',
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer <token>`,
      },
    } //we want to send this as a header

    const { data } = await axios.put(
      `http://localhost:3000/users/${userId}`,
      location,
      config
    ) //pass the id into this route as well as the config and extract data

    dispatch({ type: 'USER_UPDATE_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }) //the payload here checks for our custom message. if it exists, send the custom message, if not, send generic message}
  }
}

// const updateUserFromDB = (userId, provinceObj) => (dispatch) => {
//   const config = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ locations_id: provinceObj }),
//   }
//   fetch(SPECIFIC_USER_URL(userId), config)
//     .then((r) => r.json())
//     .then((data) => {
//       dispatch(setUserAction(data))
//     })
// }
