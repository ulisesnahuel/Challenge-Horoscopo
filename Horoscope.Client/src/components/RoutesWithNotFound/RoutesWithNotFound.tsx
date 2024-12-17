import { ReactNode } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import {NotFound} from '@/public/NotFound'
interface Props {
  children: ReactNode
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<NotFound/>} />
      {/* <Route path="/404" element={<h1>Página no encontrada</h1>} /> */}
    </Routes>
  )
}
