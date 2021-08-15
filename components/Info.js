function Info() {
  return (
    <div className="md:container md:mx-auto my-20">
      <div 
        className="flex flex-col space-y-4 md:space-y-0
        md:flex-row bg-green-100 md:justify-between
        md:px-10 md:py-8 rounded-md py-5"
      >
        <div className="flex items-center justify-center">
          {/* <img src="" alt="icon" /> */}
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          </div>
          <figcaption>
            <h3 className="text-base md:text-lg -mb-1 uppercase font-semibold">Free Shipping</h3>
            <span>Making it look like readable</span>
          </figcaption>
        </div>
        <div className="flex items-center justify-center">
          {/* <img src="" alt="icon" /> */}
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
            </svg>
          </div>
          <figcaption>
            <h3 className="text-base md:text-lg -mb-1 uppercase font-semibold">45 Days Return</h3>
            <span>Making it look like readable</span>
          </figcaption>
        </div>
        <div className="flex items-center justify-center">
          {/* <img src="" alt="icon" /> */}
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <figcaption>
            <h3 className="text-base md:text-lg -mb-1 uppercase font-semibold">Cash On Delivery</h3>
            <span>The internet tends to repeat</span>
          </figcaption>
        </div>
        <div className="flex items-center justify-center">
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <figcaption>
            <h3 className="text-base md:text-lg -mb-1 uppercase font-semibold">Cash On Delivery</h3>
            <span>8AM — 9PM</span>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Info;