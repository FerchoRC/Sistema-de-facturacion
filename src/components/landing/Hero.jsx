import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Hero = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="relative bg-[#fbfbfb] overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-blue-950 leading-tight mb-6">
            Facturación Automatizada, Hecha Sin Esfuerzo
          </h1>
          <p className="text-base sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Nuestra plataforma crea facturas desde texto simple, genera recordatorios de pago y proporciona análisis avanzados para ayudarte a administrar tus finanzas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {isAuthenticated ? (
              <Link to="/dashboard" className="bg-gradient-to-r from-blue-950 to-blue-900 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-900 transition-all duration-200 hover:scale-105 hover:shadow-2xl transform">
                Go to Dashboard
              </Link>
            ): (
              <Link to="/signup" className="bg-gradient-to-r from-blue-950 to-blue-900 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-2xl transform">
                Empezar Gratis
              </Link>
            )}
            <a href="#Más Información" className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-200 hover:scale-105">
              Más Información
            </a>
          </div>
        </div>
        {/* <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
          <img src="" alt="" className="rounded-2xl shadow-2xl shadow-gray-300 border-4 border-gray-200/20"/>
        </div> */}
      </div>
    </section>
  )
}

export default Hero