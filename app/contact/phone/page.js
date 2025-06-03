import React from 'react'

const Phone = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg p-8 text-center max-w-md w-full space-y-4">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Call Me
        </h2>
        <p className="text-xl font-semibold text-blue-400">
          +880 1615 997 121
        </p>
        <p className="text-gray-400 text-sm">
          Available on WhatsApp, Telegram, and direct call.
        </p>
      </div>
    </div>
  )
}

export default Phone
