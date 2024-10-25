import './App.css'
import TiagoCard from './TiagoCard'
import CaroCard from './CaroCard'
import DarioCard from './DarioCard'
import MaxiCard from './MaxiCard'
import MariaCard from './MariaCard'
import BackButton from './BackButton'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <main className='container'>
        <h1 className='text-center arvo-regular' style={{ textDecoration: 'underline', color:'#1974b0' ,textDecorationColor: '#1974b0' }}>Tarjetas personales G6</h1>
        <Routes>
          {/* Ruta por defecto: Muestra todas las tarjetas */}
          <Route
            path="/"
            element={
              <div className="d-flex justify-content-center gap-4 flex-wrap" style={{ margin: "20px" }}>
                
                <Link to="/tiago" style={{ textDecoration: 'none' }}>
                  <TiagoCard
                    name="Tiago Ibarrola"
                    description="Me encanta el mundo de la tecnología y siempre estoy buscando nuevos desafíos."
                  />
                </Link>
                <Link to="/dario" style={{ textDecoration: 'none' }}>
                  <DarioCard
                    name="Dario Skidelsky"
                    description="Desarrollador apasionado por crear experiencias digitales innovadoras e impactantes."
                  />
                </Link>
                <Link to="/caro" style={{ textDecoration: 'none' }}>
                  <CaroCard
                    name="Carolina Amarfil"
                    description="Disfruto de los desafíos que me presenta la programación y me encanta aprender nuevas cosas todos los días."
                  />
                </Link>
                <Link to="/maxi" style={{ textDecoration: 'none' }}>
                  <MaxiCard
                    name="Maximiliano Pereyra"
                    description="Enfocado en crear proyectos webs intuitivos y eficientes. Me gusta aportar soluciones creativas y funcionales."
                  />
                </Link>
                <Link to="/maria" style={{ textDecoration: 'none' }}>
                  <MariaCard
                    name="Maria Ozuna"
                    description="Soy una desarrolladora de software apasionada por el diseño de interfaces amigables y accesibles."
                  />
                </Link>
              </div>
            }
          />
          
          {/* Ruta para la tarjeta de Tiago */}
          <Route
            path="/tiago"
            element={
              <div className="d-flex flex-column align-items-center text-center">
                <TiagoCard
                  name="Tiago Ibarrola"
                  description="Me encanta el mundo de la tecnología y siempre estoy buscando nuevos desafíos."
                />
                <BackButton />
              </div>
            }
          />
          {/* Ruta para la tarjeta de Dario */}
          <Route
            path="/dario"
            element={
              <div className="d-flex flex-column align-items-center text-center">
                <DarioCard
                  name="Dario Skidelsky"
                  description="Desarrollador apasionado por crear experiencias digitales innovadoras e impactantes."
                />
                <BackButton />
              </div>
            }
          />
          {/* Ruta para la tarjeta de Caro */}
          <Route
            path="/caro"
            element={
              <div className="d-flex flex-column align-items-center text-center">
                <CaroCard
                  name="Carolina Amarfil"
                  description="Disfruto de los desafíos que me presenta la programación y me encanta aprender nuevas cosas todos los días."
                />
                <BackButton /> 
              </div>
            }
          />
          {/* Ruta para la tarjeta de Maxi */}
          <Route
            path="/maxi"
            element={
              <div className="d-flex flex-column align-items-center text-center">
                <MaxiCard
                  name="Maximiliano Pereyra"
                  description="Enfocado en crear proyectos webs intuitivos y eficientes. Me gusta aportar soluciones creativas y funcionales."
                />
                <BackButton /> 
              </div>
            }
          />
          {/* Ruta para la tarjeta de Maria */}
          <Route
            path="/maria"
            element={
              <div className="d-flex flex-column align-items-center text-center">
                <MariaCard
                  name="Maria Ozuna"
                  description="Soy una desarrolladora de software apasionada por el diseño de interfaces amigables y accesibles."
                />
                <BackButton /> 
              </div>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}
