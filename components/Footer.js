function Footer() {
  return (
    <footer className="footer bg-gray-800 pt-10 mt-20">
      <div className="container mx-auto px-6">
        <div> {/* small: flex */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase mb-2">Company</span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">About</a></span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">Support</a></span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">FAQ</a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Useful Links</span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">Coupons</a></span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">Blog Post</a></span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">Return Policy</a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Follow Us</span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">Instagram</a></span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">Facebook</a></span>
              <span className="my-2"><a href="#" className="text-gray-600 text-md hover:text-gray-500">Twitter</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mt-16 border-t border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-300 font-bold mb-2">
              © 2021 by Gökmen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;