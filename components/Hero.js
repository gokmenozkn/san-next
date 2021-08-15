/* eslint-disable */

function Hero() {
  return (
    <div style={{ 
      backgroundImage: "url('https://wallpapermemory.com/uploads/213/watch-background-hd-1080p-139951.jpg')"
    }}
      className="w-full h-96 md:h-screen bg-cover bg-left bg-no-repeat"
    >
      <div className="bg-black bg-opacity-75 h-full flex items-center">
        <div className="flex px-8 flex-col md:flex-row items-center text-white lg:px-40 md:px-10 sm:px-6">
          <h1 className="md:text-5xl text-lg uppercase md:mr-8 mr-0 mb-2 md:mb-0">Ecommerce</h1>
          <div>
            <p className="text-gray-300 text-sm md:text-lg">
              It is a long established fact that a reader will be 
              distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', making it look like readable English.
              It is a long established fact that a reader will be 
              distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
              as opposed to using 'Content here, content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;