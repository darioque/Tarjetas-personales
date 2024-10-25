import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className="text-center mb-4">
      <Link to="/" className="btn btn-primary rounded" style={{ marginTop: '20px' }}>
        Volver
      </Link>
    </div>
  );
};

export default BackButton;
