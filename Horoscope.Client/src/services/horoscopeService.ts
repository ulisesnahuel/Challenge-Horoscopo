const BASE_URL ="http://localhost:32775/api/Horoscope/"

import { PostHoroscope, GetHoroscope } from '../models'
import axios from 'axios'
// import { Controller } from 'react-hook-form'
import { loadAbort } from '@/utilities'
import { UseApiCall } from '../models'



export const SearchHoroscopeAsync = (data:PostHoroscope): UseApiCall<GetHoroscope> =>{
    const controller = loadAbort();
    return {call: axios.post<GetHoroscope>(`${BASE_URL}Horoscope`,data,{signal:controller.signal}),
controller};
};