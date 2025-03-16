const EventCardSkeleton = () => {
    return (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
          <div className="h-4 w-20 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="p-6">
          <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse mb-2"></div>
          <div className="flex items-center text-sm mb-2">
            <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse mr-2"></div>
            <div className="h-4 w-32 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
          <div className="flex items-center text-sm mb-4">
            <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse mr-2"></div>
            <div className="h-4 w-24 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
          <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>
    );
  };
  
  export default EventCardSkeleton;