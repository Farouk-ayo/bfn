import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type RouteError = {
  statusText?: string;
  status?: number;
  message: string;
} & Error;

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  console.error(error);

  const errorMessage =
    error.status === 404
      ? `Page ${error.statusText}`
      : error.statusText || error.message;

  return (
    <>
      <div
        id="error-page"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      >
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="mb-6 font-semibold text-xl">
          <i>{errorMessage}</i>
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 text-white bg-primary rounded-md hover:bg-primary-dark transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    </>
  );
}
