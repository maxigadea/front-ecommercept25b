'use client'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const DashboardView = () => {
    const {userData} = useAuth();
  return (
    <div>
        <h1>Bienvenido: {userData?.user.name}</h1>

        <p>Tu dirección de envio {userData?.user.address}</p>
        <p>Tu correo es {userData?.user.email}</p>
    </div>
  )
}

export default DashboardView