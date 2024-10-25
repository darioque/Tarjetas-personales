import {useState} from 'react'
const CaroCard = ({ name, description }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div className="card shadow-lg rounded-5 pink-card uniform-card">
      <div className="card-body text-center p-4 d-flex flex-column justify-content-between">
        <div className="img-div p-4">
          {/* Imagen de perfil con borde circular y sombra */}
          <img
            src="/img/perfilCaro.jpg"
            className="rounded-circle mb-4 shadow"
            alt="Foto de perfil"
            style={{
              width: "7em",
              height: "7em",
              objectFit: "cover",
              border: "#bdbdbd solid 0.2em",
              transition:"transform 0.3s ease-in-out",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}
          />
        </div>
      

        {/* Nombre y descripción */}
        <h5 className="card-title libre-baskerville-bold">{name}</h5>
        <p className="card-text text-muted libre-baskerville-regular-italic" >
          {description}
        </p>

        {/* Grupo de botones para redes sociales */}
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <button
            onClick={() => window.open("https://github.com/Caroamarfil", "_blank")}
            className="btn btn-light rounded-pill d-flex align-items-center gap-2"
            style={{ backgroundColor: "#dbdbdb" }}
          >
            <i className="bi bi-github"></i> {/* Icono */}
            GitHub
          </button>

          <button
            onClick={() => window.open("https://www.linkedin.com/in/carolina-amarfil-3a8125261/", "_blank")}
            className="btn btn-light rounded-pill d-flex align-items-center gap-2"
            style={{ backgroundColor: "#dbdbdb" }}
          >
            <i className="bi bi-linkedin"></i>
            LinkedIn
          </button>

          <button
            onClick={() => window.open("https://wa.me/543518017680", "_blank")}
            className="btn btn-light rounded-pill d-flex align-items-center gap-2"
            style={{ backgroundColor: "#dbdbdb" }}
          >
            <i className="bi bi-whatsapp"></i>
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaroCard;
