

const About = () => {
  return (
    <div className="min-h-screen  py-16 px-4 md:px-8">
      <div className=" text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">About CommunionHub</h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
          CommunionHub is a platform dedicated to connecting people of all faiths
          through events and community support. Our goal is to foster
          inclusivity, encourage engagement, and create meaningful connections
          among individuals and communities.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
        {/* Mission Section */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 ">
            We aim to bridge cultural and religious gaps by providing an inclusive
            space where people can find and participate in events that align with
            their beliefs and interests.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Features</h2>
          <ul className="text-gray-600  list-inside">
            <li>Discover and join events in your area</li>
            <li>Filter events by category (Religious, Social, Charity)</li>
            <li>Create and manage your own events</li>
            <li>Connect with like-minded individuals</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
