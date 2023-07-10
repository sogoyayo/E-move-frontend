/*eslint-disable*/
import { DriverType } from '../interfaces/apiTypes'
import axios from './axios'




export const signUpUser = async (data: any) => {
  try {
    const response = await axios.post('/users/register', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (err) {
    return err
  }
}

export const verifyUser = async (id: string, token: string) => {
  try {
    const response = await axios.get(`/users/verify/${id}/${token}`)
    return response.data
  } catch (error: any) {
    return error.response
  }
}




export const loginUser = async (data: any) => {
  try {
    const response = await axios.post('/users/login', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', accept: '*/*' },
    })
    return response
  } catch (err) {
    return err
  }
}

export const registerDriver = async (data: DriverType | any) => {
  try {
    const JSONData = JSON.stringify(data)
    const response: any = await axios.post('/admin/register-driver', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response
  } catch (error: any) {
    return error.response
  }
}

export const updateDriver = async (data: DriverType | {}, id: string) => {
  try {
    const response = await axios.put(`/admin/edit-driver/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response
  } catch (error) {
    return error
  }
}

export const deleteDriver = async (id: string) => {
  try {
    const response = await axios.delete(`/admin/drivers/${id}`)
    return response
  } catch (err) {
    return err
  }
}

export const fetchRoutes = async () => {
  try {
    const response = await axios.get('/users/getAllRoutes')
    return response.data
  } catch (err) {
    return err
  }
}

export const fundWallet = async (data: any) => {
  try {
    let stringToken: string = localStorage.getItem('userToken') as string
    let token = JSON.parse(stringToken).loginToken
    const JSONData = JSON.stringify(data)
    const response = await axios.post('/users/paystack/pay', JSONData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (error) {
    return error
  }
}

export const getSingleDriver = async (id: string) => {
  try {
    const response = await axios.get(`/admin/drivers/${id}`)
    return response
  } catch (error) {
    return error
  }
}

export const getUserDetails = async () => {
  let stringToken: string = localStorage.getItem('userToken') as string
  let token = JSON.parse(stringToken).loginToken
  try {
    const response = await axios.get('users/getUser', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response
  } catch (error) {
    return error
  }
}

export const getTripsByPassenger = async () => {
  let stringToken: string = localStorage.getItem('userToken') as string
  let token = JSON.parse(stringToken).loginToken
  try {
    const response = await axios.get('users/tripHistoryByPassenger', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response
  } catch (error) {
    return error
  }
}


export const bookTrip = async (url: string, trip: any) => {
  try {
    let stringToken: string = localStorage.getItem('userToken') as string
    let token = JSON.parse(stringToken).loginToken
    const response = await axios.post(url, trip, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (err: any) {
    return err
  }
}

export const getTransactions = async () => {
  try {
    let stringToken: string = localStorage.getItem('userToken') as string
    let token = JSON.parse(stringToken).loginToken

    const response = await axios.get('/users/transactions', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return response
  } catch (err: any) {
    return err
  }
}

export const retrievePassword = async (url: string, email: string) => {
  try {
    const reset = await axios.post(
      url,
      { email: email },
      { headers: { 'Content-Type': 'application/json' } }
    )
    return reset
  } catch (err) {
    return err
  }
}

export const resetPassword = async (
  url: string,
  newPassword: string,
  confirmPassword: string
) => {
  try {
    const reset = await axios.post(
      url,
      { newPassword, confirmPassword },
      { headers: { 'Content-Type': 'application/json' } }
    )
    return reset
  } catch (err) {
    return err
  }
}

export const getAllRoutes = async () => {
  try {
    const response = await axios.get('/users/getAllRoutes')
    return response
  } catch (error: any) {
    return error.response
  }
}

export const getAllDrivers = async () => {
  try {
    const response = await axios.get('/admin/allDrivers')
    return response
  } catch (error: any) {
    return error.response
  }
}
