import React, { useState, useEffect } from 'react';

// Avatar Component
const Avatar = () => (
  <img
    src="/img/perfilTiago.jpg"
    className="card-img-center p-5 w-50 h-50"
    alt="Foto de perfil"
    style={{
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "50%",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    }}
    onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
  />
);

// ProfileInfo Component
const ProfileInfo = ({ name, description }) => (
  <>
    <h5 className="card-title">{name}</h5>
    <p className="card-text my-4 fst-italic px-5 text-muted">
      {description}
    </p>
  </>
);

// SocialButtons Component
const SocialButtons = () => {
  const handleClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div className="btn-group gap-2 d-flex justify-content-center flex-wrap">
      <button
        onClick={(e) => handleClick(e, "https://github.com/tiago-appdev")}
        className="btn btn-primary rounded"
      >
        Github
        <img
          className="img-fluid mb-1 ms-1"
          style={{ width: "20px" }}
          src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
          alt="Github"
        />
      </button>
      <button
        onClick={(e) => handleClick(e, "https://www.linkedin.com/in/tiagoibarrola/")}
        className="btn btn-primary rounded"
      >
        Linkedin
        <img
          className="img-fluid mb-1 ms-1"
          style={{ width: "20px" }}
          src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
          alt="Linkedin"
        />
      </button>
      <button
        onClick={(e) => handleClick(e, "https://wa.me/5493704232537?text=Tiago")}
        className="btn btn-primary rounded"
      >
        Whatsapp
        <img
          className="img-fluid mb-1 ms-1"
          style={{ width: "20px" }}
          src="https://img.icons8.com/?size=100&id=30448&format=png&color=000000"
          alt="Whatsapp"
        />
      </button>
    </div>
  );
};

// ExpandableContent Component
const ExpandableContent = ({ isExpanded }) => {
  const contentStyle = {
    maxHeight: isExpanded ? '500px' : '0',
    opacity: isExpanded ? 1 : 0,
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    marginTop: isExpanded ? '1rem' : '0'
  };

  return (
    <div style={contentStyle}>
      <div className="p-4 bg-light rounded-3">
        <h6 className="fw-bold mb-3">Habilidades Técnicas</h6>
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          <span className="badge bg-primary">JavaScript</span>
          <span className="badge bg-success">Node.js</span>
          <span className="badge bg-info">React</span>
          <span className="badge bg-warning text-dark">Python</span>
          <span className="badge bg-danger">Java</span>
        </div>

        <h6 className="fw-bold mb-3">Experiencia</h6>
        <div className="text-start">
          <div className="mb-3">
            <div className="fw-bold">Desarrollador Full Stack</div>
            <div className="text-muted small">Empresa Tecnológica • 2022 - Presente</div>
            <ul className="small mb-0 ps-3">
              <li>Desarrollo de aplicaciones web con React y Node.js</li>
              <li>Implementación de APIs RESTful</li>
            </ul>
          </div>
        </div>

        <h6 className="fw-bold mb-3">Hobbies</h6>
        <div className="text-start">
          <div className="fw-bold">Futbol, Arte, Lectura</div>
        </div>
      </div>
    </div>
  );
};

// Main TiagoCard Component
const TiagoCard = ({ name, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const loadProfileData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
    };
    loadProfileData();
  }, []);

  const handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleCardHover = (isHovering) => {
    setScale(isHovering ? 1.02 : 1);
  };

  return (
    <div
      className="card text-center rounded shadow border border-dark-subtle bg-light bg-gradient uniform-card"
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={() => handleCardHover(true)}
      onMouseLeave={() => handleCardHover(false)}
    >
      <Avatar />
      
      <div className="card-body">
        <ProfileInfo name={name} description={description} />
        <SocialButtons />
        
        <button
          className="btn btn-link mt-4 text-decoration-none"
          onClick={handleExpandClick}
        >
          {isExpanded ? (
            <>
              <i className="bi bi-chevron-up me-1"></i>
              Ver menos información
            </>
          ) : (
            <>
              <i className="bi bi-chevron-down me-1"></i>
              Ver más información
            </>
          )}
        </button>

        <ExpandableContent isExpanded={isExpanded} />
      </div>
    </div>
  );
};

export default TiagoCard;
