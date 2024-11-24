import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-secondary/80 to-ternary/70 flex items-center justify-center px-4">
      <div className="text-center">
        {/* SVG Illustration */}
        <svg
          className="w-64 h-64 mx-auto mb-8"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M297.5 123.1c-1.8-1.8-4.1-2.8-6.6-2.8H180.9c-2.5 0-4.8 1-6.6 2.8-1.8 1.8-2.8 4.1-2.8 6.6v70.5c0 2.5 1 4.8 2.8 6.6 1.8 1.8 4.1 2.8 6.6 2.8h110c2.5 0 4.8-1 6.6-2.8 1.8-1.8 2.8-4.1 2.8-6.6v-70.5c0-2.5-1-4.8-2.8-6.6z"
            fill="#fff"
            opacity="0.2"
          />
          <path
            d="M235.9 168.9c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14zm0-20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
            fill="#fff"
            opacity="0.5"
          />
          <path
            d="M404.1 386H96.9c-2.5 0-4.5-2-4.5-4.5V118.5c0-2.5 2-4.5 4.5-4.5h307.2c2.5 0 4.5 2 4.5 4.5v263c0 2.5-2 4.5-4.5 4.5z"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="10"
          />
          <path
            d="M250.5 327.5c-38.7 0-70-31.3-70-70s31.3-70 70-70 70 31.3 70 70-31.3 70-70 70zm0-130c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.9-60-60-60z"
            fill="#fff"
          />
          <path
            d="M250.5 274.9c-9.6 0-17.4-7.8-17.4-17.4s7.8-17.4 17.4-17.4 17.4 7.8 17.4 17.4-7.8 17.4-17.4 17.4z"
            fill="#fff"
          />
        </svg>

        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/80 mb-8">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white bg-primary/20 px-6 py-3 rounded-lg hover:bg-primary/30 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
