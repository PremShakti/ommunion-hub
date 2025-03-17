import { format } from "date-fns";
interface EventCardPropsTypes {
  category: string;
  title: string;
  date: string;

  location: string;
  description: string;
}

const EventCard: React.FC<EventCardPropsTypes> = ({
  category,
  title,
  date,
  location,
  description,
}) => {
  const Formateddate = new Date(date); // Example date
  const formattedDate = format(Formateddate, "MMMM d, yyyy • h:mm a");
  return (
    <div className="    bgevencontainer rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow transition duration-300">
      <div className="bg-blue-50 px-4 py-2 border-b border-gray-200">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          {category}
        </span>
      </div>
      <div className="bgimgevent p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formattedDate}
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
