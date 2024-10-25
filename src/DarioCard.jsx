const DarioCard = ({ name, description, imageUrl }) => {
  return (
    <div className="card text-center shadow-sm rounded-4" style={{ width: "26rem" }}>
      {/* Header colored section */}
      <div className="bg-primary p-4 rounded-top-4">
        <div className="position-relative">
          <img
            src={"/img/DarioPic.jpg" || "/api/placeholder/150/150"}
            className="rounded-circle border border-4 border-white shadow mx-auto"
            alt="Profile"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "cover",
              marginBottom: "-4rem"
            }}
          />
        </div>
      </div>

      <div className="card-body pt-5 mt-3">
        <h5 className="card-title fw-bold mb-3">{name}</h5>

        {/* Tags */}
        <div className="d-flex justify-content-center gap-2 mb-3">
          <span className="badge bg-primary bg-opacity-10 text-primary">
            Java
          </span>
          <span className="badge bg-info bg-opacity-10 text-info">
            Python
          </span>
        </div>

        <p className="card-text text-muted fst-italic px-4 mb-4">
          {description}
        </p>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button
            onClick={() => window.open("https://github.com/darioque", "_blank")}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <i className="bi bi-github"></i>
            GitHub
          </button>

          <button
            onClick={() => window.open("https://linkedin.com/in/dario-skidelsky", "_blank")}
            className="btn btn-outline-primary d-flex align-items-center gap-2"
          >
            <i className="bi bi-linkedin"></i>
            LinkedIn
          </button>

          <button
            onClick={() => window.open("mailto:darioque@dsk.ar", "_blank")}
            className="btn btn-outline-primary d-flex align-items-center gap-2"
          >
            <i className="bi bi-envelope"></i>
            Email
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer bg-light text-muted small py-3">
        <i className="bi bi-clock me-1"></i>
        Disponible para proyectos
      </div>
    </div>
  );
};

export default DarioCard;