import { BrowserRouter, Navigate, Route } from 'react-router-dom'

import { RoutesWithNotFound } from './components/RoutesWithNotFound/RoutesWithNotFound'
import { AppRoutes } from './models'

import {GeneroPage} from '@/public/Gender'
import {DatosPage} from '@/public/AddData'
import {HoroscopoPage} from '@/public/Horoscope'
import { Inicio } from "@/public/Home"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>

        {/* <Route path={AppRoutes.root} element={<Inicio/>} /> */}

        <Route>
          <Route path="/" element={<Navigate to={AppRoutes.root} />} />
          <Route path={`${AppRoutes.root}/*`} element={<Inicio />}/>
          <Route path={AppRoutes.chooseGender} element={<GeneroPage />} />
          <Route path={AppRoutes.dataUser} element={<DatosPage />} />          
          <Route path={AppRoutes.horoscope} element={<HoroscopoPage />} />
        </Route>
      
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}
