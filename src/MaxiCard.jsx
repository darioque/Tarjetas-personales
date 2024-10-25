const MaxiCard = ({ name, description }) => {
    return (
        <div
            className="card text-center rounded shadow border border-dark-subtle bg-light bg-gradient"
            style={{ width: "26rem" }}
        >
            <img
                src="/img/perfilMaxi.jpg"
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
                <h5 className="card-title bad-script-regular">{name}</h5>
                <p className="card-text my-4 px-5 arvo-regular">
                    {description}
                </p>
                <div className="btn-group gap-2 d-flex justify-content-center flex-wrap">
                    <button
                        onClick={() =>
                            window.open("https://github.com/maxip98", "_blank")
                        }
                        className="btn btn-secondary rounded amiko-regular"
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
                                "https://www.linkedin.com/in/maximiliano-emanuel-pereyra/",
                                "_blank",
                            )
                        }
                        className="btn btn-primary rounded amiko-regular"
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
                            window.open("https://wa.me/543436101943?text=Maxi", "_blank")
                        }
                        className="btn btn-success rounded amiko-regular"
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

export default MaxiCard;