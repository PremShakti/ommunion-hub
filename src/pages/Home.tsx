import { Calendar, Earth, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="bgimg min-h-screen pt-5 lg:pt-0">
      <div className="px-1 py-12 md:py-20 lg:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="wave-container flex items-center justify-center flex-wrap w-full">
            <WaveText text="Welcome" delayStart={0} />
            <WaveText text=" to " delayStart={0.6} />
            <WaveText text="Communion" delayStart={0.8} />
          </div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Connecting people of all faiths through events and community support
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 ">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Connecting People Across Faiths & Interests
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Communion is a platform designed to bring together individuals
              from diverse faith backgrounds, fostering understanding,
              friendship, and community. Our app makes it easy to discover
              events, connect with like-minded people, and participate in
              activities that promote spiritual growth and interfaith dialogue.
            </p>
            <Link
              to="/events"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Explore Events
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-blue-50 rounded-xl p-2 sm:p-6 border border-blue-100 w-full sm:max-w-md">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center mb-4 gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    {<Users />}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">
                      Community First
                    </h3>
                    <p className="text-sm text-gray-600">
                      Build meaningful connections
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center mb-4 gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Calendar />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">
                      Discover Events
                    </h3>
                    <p className="text-sm text-gray-600">
                      Find gatherings that match your interests
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Earth />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">
                      Interfaith Dialogue
                    </h3>
                    <p className="text-sm text-gray-600">
                      Promote understanding across beliefs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Communion Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to discover events, connect with
              community members, and organize gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Discover
              </h3>
              <p className="text-gray-600">
                Find events and gatherings based on your interests, faith
                background, or location. Our smart filters help you find exactly
                what you're looking for.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Connect
              </h3>
              <p className="text-gray-600">
                Meet like-minded individuals and build meaningful relationships
                within your community. Engage in discussions and share your
                experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Create
              </h3>
              <p className="text-gray-600">
                Easily organize and promote your own events. Whether it's a
                prayer group, community service, or social gathering, Communion
                makes it simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

interface WaveTextProps {
  text: string;
  delayStart: number;
}
const WaveText: React.FC<WaveTextProps> = ({ text, delayStart }) => {
  return (
    <h1 className="wave-text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ animationDelay: `${delayStart + index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};
