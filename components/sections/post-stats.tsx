export const PostStats = (): JSX.Element => {
    return (
        <div className="w-full lg:grid lg:grid-cols-3 px-5 lg:px-0">
          <div className="text-center mb-5 lg:mb-0">
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-white font-bold">170+</p>
            <p className="text-xl sm:text-2xl md:text-4xl text-white">Attendees</p>
          </div>
    
          <div className="text-center mb-5 lg:mb-0">
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-white font-bold">35</p>
            <p className="text-xl sm:text-2xl md:text-4xl text-white">Projects</p>
          </div>
    
          <div className="text-center mb-5 lg:mb-0">
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-white font-bold">26</p>
            <p className="text-xl sm:text-2xl md:text-4xl text-white">Hours</p>
          </div>
        </div>
      );
}