import { useState, useEffect } from 'react'
import {
  Ride,
  Rides,
  DriverType,
  DriverData,
  Passenger,
  Passengers,
  TransactionType,
  Route,
} from '../interfaces/apiTypes'
import axios from '../api/axios'

const useFetchData = () => {
  const [drivers, setDrivers] = useState<DriverType[]>([])
  const [routes, setRoutes] = useState<Route[]>([])
  const [passengers, setPassengers] = useState<Passenger[]>([])
  const [rides, setRides] = useState<Ride[]>([])
  const [transactions, setTransactions] = useState<TransactionType[] | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  let stringToken: string = localStorage.getItem('userToken') as string
  let token = JSON.parse(stringToken).loginToken

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const [
          driversResponse,
          passengersResponse,
          ridesResponse,
          routesResponse,
          transactionsResponse,
        ] = await Promise.all([
          axios.get<DriverData>('/admin/allDrivers'),
          axios.get<Passengers>('/admin/totalPassengers'),
          axios.get<Rides>('/admin/tripHistory'),
          axios.get('/users/getAllRoutes'),
          axios.get<any>('/users/transactions', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }),
        ])
        setDrivers(driversResponse.data.data)
        setPassengers(passengersResponse.data.passengers)
        setRides(ridesResponse.data.data)
        setRoutes(routesResponse.data)
        setTransactions(transactionsResponse.data.reverse())
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }
  ,[]
  )

  return { drivers, passengers, rides, routes, transactions, loading, error }
}

export default useFetchData