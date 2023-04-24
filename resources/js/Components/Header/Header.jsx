
import React from 'react'

export const Header = ({header}) => {
  return (
    <>
   {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

    </>
  )
}
