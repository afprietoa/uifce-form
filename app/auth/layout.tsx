import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section
      className="w-full h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/EconomicasUnal.jpg')" }}
    >
      
      <div className='h-screen flex items-center justify-center opacity-90'>
        {children}
      </div>
    </section>
  )
}

export default AuthLayout
