const Progress = () => {
  return (
    <div>
      <div className="block p-4 m-auto bg-white rounded-lg shadow w-72">
        <div>
          <span className="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-pink-300">
            Task in progress
          </span>
        </div>
        <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
          <div className="w-3/4 h-full text-center text-xs text-white bg-pink-300 rounded-full">
            75%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress