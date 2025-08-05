export default function HotelFooter() {
  return (
    <footer className="bg-100 text-black border-t">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-15 py-10 bg-[rgb(170,146,133)] min-w-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Hotel Info & Contact */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-black-400 mb-2">Lume Hotel</h3>
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-black-400">★</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div>
                  <p className="text-sm">100 Real Street SW</p>
                  <p className="text-sm">City, Province, A1A 2B2</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <p className="text-sm">+000.000.0000</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <p className="text-sm">email@lumehotel.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Rooms',
                'Photo Gallery',
                'Contact Us'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-black-300 hover:text-black-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Amenities */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black-400">Amenities</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-black-300">Free WiFi</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-black-300">Valet Parking</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-black-300">Room Service</span>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black-400">Stay Connected</h4>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-sm text-black-300 mb-3">Subscribe for exclusive offers and updates</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-black-800 border border-black-700 rounded-l-md text-sm focus:outline-none focus:border-black-400 bg-gray-200"
                />
                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-r-lg shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-black-800 bg-[rgb(35,17,10)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white-400">
             {/* empty */}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#">
                Privacy Policy
              </a>
              <a href="#">
                Terms of Service
              </a>
              <a href="#">
                Cookie Policy
              </a>
              <a href="#">
                Accessibility
              </a>
              <a href="#">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}