
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">Communion Hub</h2>
            <p className="mt-2 text-gray-400">Communion is a platform designed to bring together individuals from diverse faith backgrounds, fostering understanding, friendship, and community. Our app makes it easy to discover events, connect with like-minded people, and participate in activities that promote spiritual growth and interfaith dialogue.</p>
          </div>
  
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.66-4.788 1.324 0 2.464.098 2.795.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.765v2.313h3.588l-.467 3.622h-3.121V24h6.118c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.165-2.723 9.86 9.86 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482 13.978 13.978 0 01-10.141-5.14 4.822 4.822 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.061a4.923 4.923 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.926 4.926 0 004.6 3.417A9.867 9.867 0 010 19.54a13.945 13.945 0 007.548 2.212c9.055 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 2.1 6.07 1 7.48 1s2.5 1.1 2.5 2.5S8.89 6 7.48 6 4.98 4.9 4.98 3.5zM1 8h5v13H1V8zm7 0h5v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.3 0 6.2 3.5 6.2 7.8V21h-5v-7c0-1.7-.6-3-2.1-3s-2.4 1.3-2.4 3v7h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
   
        </div>
  
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Communion Hub. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  