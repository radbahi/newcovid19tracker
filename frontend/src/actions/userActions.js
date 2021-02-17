import axios from 'axios'

export const login = (username, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    } //we want to send this as a header.

    const response = await axios.post(
      'http://localhost:3000/login',
      { username, password },
      config
    )

    //
    localStorage.setItem('token', response.data.token)

    console.log(response)

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data.user })

    // localStorage.setItem('userInfo', JSON.stringify({userInfo: data.data.user})) //save the userinfo to localstorage. we stringify it cuz localstorage only saves strings. we later parse it back to JSON to use with javascript.
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
  localStorage.removeItem('token')
  dispatch({ type: 'USER_LOGOUT' })
}

export const register = (username, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer <token>`,
      },
    } //we want to send this as a header

    const response = await axios.post(
      'http://localhost:3000/users',
      { username, password },
      config
    ) //pass all these arguments in and then extract data from the response

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data.user }) //we want the user to be immediately logged in if registration is successful

    localStorage.setItem('token', response.data.token)
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
// if were expecting to pass the whole user object every time, its extra.
// eventually it will have to sort through too many endpoints.
// Config is reusable
// other functions w/switch statement
// EXPAND UPDATEUSER TO HAVE MULTIPLE ROUTES TO UPDATE INFO ACCORDINGLY
// DONT NEED ANOTHER ROUTE LIKE UPDATE_LOCATION. ALREADY HAVE UPDATE METHOD IN USER CONTROLLER.
export const updateUser = (user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
      },
    } //we want to send this as a header. POSSIBLY NOT HOW TOKEN GETS SENT.
    const newPayload = {
      id: user.id,
      country: user.location[0].country,
    }
    const { data } = await axios.put(
      `http://localhost:3000/update_location`,
      newPayload,
      config
    ) //pass the id into this route as well as the config and extract data

    dispatch({ type: 'USER_UPDATE_SUCCESS', payload: data.location })

    console.log(data)

    // USER LOCATION BEING CHANGED MIGHT BE PROBLEMATIC IF TOKEN DOESN'T REFLECT THE CHANGE. MIGHT IS THE KEY WORD HERE.
    // localStorage.setItem(
    //   'userInfo',
    //   JSON.stringify({ ...data }),
    //   (data.token = localStorage.token)
    // )
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
