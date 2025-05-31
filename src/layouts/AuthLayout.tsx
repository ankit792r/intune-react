import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="transform transition-all duration-500 ease-in-out">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 SecureAuth. Designed with precision.
        </p>
      </div>
    </div>
  )
}

export default AuthLayout