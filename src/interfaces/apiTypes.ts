export interface Ride {
  _id: string;
  pickup: string;
  destination: string;
  passenger: string;
  price: number;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Rides {
  data: Ride[];
}

export interface Driver {
  _id: string;
  fullName: string;
  operationRoute: string;
  phone: number;
  accountNo: number;
  driverId: string;
  photo: string;
  __v: number;
}

export interface DriverType {
  _id: string
  fullName: string
  operationRoute: string
  phone: any
  accountNo: any
  driverId: any
  photo: any
  __v: number
}

export interface DriverData {
  status: string;
  message: string;
  data: Driver[];
}

export interface Passenger {
  isAdmin: boolean;
  _id: string;
  name: string;
  email: string;
  password: string;
  verified: boolean;
  phone: number;
  userType: string;
  gender: string;
  DOB: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  walletBalance: number;
}

export interface Passengers {
  status: string;
  message: string;
  passengerCount: number;
  passengers: Passenger[];
}

export interface FetchDataResult {
  drivers: Driver[];
  passengers: Passenger[];
  rides: Ride[];
  loading: boolean;
  error: string | null;
}


export interface User {
  message: string;
  loginToken: string;
  user: {
    _id: string;
    name: string;
    email: string;
    DOB: string;
    gender: string;
    phone: number;
    isAdmin: boolean;
    verified: boolean;
    password: string;
    walletBalance: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
}

export interface Route {
  _id: string;
  pickup: string;
  destination: string;
  price: number;
  __v: number;
}

export interface IRoute{
  destination: string;
  pickup: string;
  price: number;
  __v: number;
  _id: string;
}

export interface TripIRoute{
  completed: boolean
  destination: string;
  pickup: string;
  price: number;
  __v: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionType {
  _id: string;
  userId: string;
  amount: number;
  transactionType: string;
  processed: boolean;
  ref: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  __v: number;
}


export interface BarChartProps {
  data: Array<[string, number]>
  title: string
}

