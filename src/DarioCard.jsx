import React, { useState, useEffect } from 'react';

// Avatar Component

const Avatar = ({ imageUrl }) => (
    <>
      <div className="position-relative">
        <img
          src={imageUrl}
          className="rounded-circle border border-4 border-white shadow mx-auto transition-transform hover:scale-110"
          alt="Profile"
          style={{
            width: "130px",
            height: "130px",
            objectFit: "cover",
            marginBottom: "-4rem",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </>
  );

// ProfileHeader Component
const ProfileHeader = ({ name }) => (
  <div className="text-center">
    <h5 className="card-title fw-bold mb-3">{name}</h5>
    <div className="d-flex justify-content-center gap-2 mb-3">
      <span className="badge bg-primary bg-opacity-10 text-primary">Java</span>
      <span className="badge bg-info bg-opacity-10 text-info">Python</span>
      <span className="badge bg-success bg-opacity-10 text-success">React</span>
    </div>
  </div>
);

// SocialLinks Component
const SocialLinks = () => {
  const handleClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <button
        onClick={(e) => handleClick(e, "https://github.com/darioque")}
        className="btn btn-primary d-flex align-items-center gap-2 hover:opacity-80"
      >
        <i className="bi bi-github"></i>
        GitHub
      </button>
      <button
        onClick={(e) => handleClick(e, "https://linkedin.com/in/dario-skidelsky")}
        className="btn btn-outline-primary d-flex align-items-center gap-2 hover:opacity-80"
      >
        <i className="bi bi-linkedin"></i>
        LinkedIn
      </button>
      <button
        onClick={(e) => handleClick(e, "mailto:darioque@dsk.ar")}
        className="btn btn-outline-primary d-flex align-items-center gap-2 hover:opacity-80"
      >
        <i className="bi bi-envelope"></i>
        Email
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
    transform: isExpanded ? 'scale(1)' : 'scale(0.95)',
    transition: 'all 0.4s ease-in-out',
    marginTop: isExpanded ? '1rem' : '0',
  };

  return (
    <div style={contentStyle}>
      <div className="p-4 bg-gray-50 rounded-lg">
        <h6 className="fw-bold mb-3">Experiencia Profesional</h6>
        <ul className="text-start list-unstyled">
          <li className="mb-2">
            <strong>Java Developer</strong>
            <br />
            <small className="text-muted">Globant • 2024 - Presente</small>
            <p className="small mb-1">Desarrollo de aplicaciones web usando Java y Springboot</p>
          </li>
          <li className="mb-2">
            <strong>Analista Programador</strong>
            <br />
            <small className="text-muted">Recursos Informaticos 2023 - 2024</small>
            <p className="small mb-1">Desarrollo de sistemas ERP utilizando Centura y SQL</p>
          </li>
        </ul>

        <h6 className="fw-bold mb-3 mt-4">Educación</h6>
        <ul className="text-start list-unstyled">
          <li>
            <strong>Ingeniería en Sistemas</strong>
            <br />
            <small className="text-muted">Universidad Nacional • 2019 - 2023</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Main DarioCard Component
const DarioCard = ({ name, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  useEffect(() => {
    const loadProfileData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    };
    loadProfileData();
  }, []);

  const handleExpandClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`card text-center shadow-sm rounded-4 uniform-card ${isCardHovered ? 'hovered' : ''}`}
      style={{
        transform: isCardHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="bg-primary p-4 rounded-top-4">
        <Avatar imageUrl={imageUrl} />
      </div>

      <div className="card-body pt-5 mt-3">
        <ProfileHeader name={name} />

        <p className="card-text text-muted fst-italic px-4 mb-4">
          {description}
        </p>

        <SocialLinks />

        <button
          className="btn btn-link mt-4 text-decoration-none"
          onClick={handleExpandClick}
          style={{ transition: 'opacity 0.2s' }}
        >
          {isExpanded ? (
            <>
              <i className="bi bi-chevron-up me-1"></i>
              Ver menos
            </>
          ) : (
            <>
              <i className="bi bi-chevron-down me-1"></i>
              Ver más
            </>
          )}
        </button>

        <ExpandableContent isExpanded={isExpanded} />
      </div>

      <div className="card-footer bg-light text-muted small py-3">
        <i className="bi bi-clock me-1"></i>
        Disponible para proyectos
      </div>
    </div>
  );
};

export default DarioCard;
