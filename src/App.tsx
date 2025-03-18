import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="h-24 hover:scale-110 transition-transform" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="h-24 animate-spin-slow hover:animate-none" alt="React logo" />
              </a>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                  Vite + React + Tailwind
                </h1>
                <p className="text-center">
                  Click the button below to count
                </p>
                <div className="text-center">
                  <button
                    className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-full shadow-sm hover:bg-blue-600 transition-colors"
                    onClick={() => setCount((count) => count + 1)}
                  >
                    Count is {count}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
