function NotFoundPage() {
 return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Page Not Found</h2>
                <p className="not-found-text">
                    The page you're looking for doesn't exist.
                </p>
                <Link to="/home" className="btn btn-primary">
                    Go to Home
                </Link>
            </div>
        </div>
    );
  }
export default NotFoundPage;