const TiagoCard = ({ name, description }) => {
  return (
    <div
      className="card text-center rounded shadow border border-dark-subtle bg-light bg-gradient uniform-card"
    >
      <img
        src="/img/perfilTiago.jpg"
        className="card-img-center p-5 w-50 h-50"
        alt="Foto de perfil"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text my-4 fst-italic px-5 text-muted">
          {description}
        </p>
        <div className="btn-group gap-2 d-flex justify-content-center flex-wrap">
          <button
            onClick={() =>
              window.open("https://github.com/tiago-appdev", "_blank")
            }
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
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tiagoibarrola/",
                "_blank",
              )
            }
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
            onClick={() =>
              window.open("https://wa.me/5493704232537?text=Tiago", "_blank")
            }
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
      </div>
    </div>
  );
};

export default TiagoCard;

