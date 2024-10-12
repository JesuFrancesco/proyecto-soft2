const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <h1 className="text-9xl font-bold text-white mb-4">500</h1>
      <h2 className="text-4xl text-white font-semibold">Algo salio mal</h2>
      <p className="text-lg text-white mt-4">
        Lo sentimos! Algo salio mal por nuestra parte. Intente de nuevo más
        tarde.
      </p>
      <button className="mt-6 px-4 py-2 bg-white text-pink-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
