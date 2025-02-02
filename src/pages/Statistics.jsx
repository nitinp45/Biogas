import React from 'react';

export const Statistics = () => {
  return (
    <div
      className="py-20 px-6 sm:px-12 lg:px-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('https://th.bing.com/th/id/OSK.HEROMd_YRi2KivzjamC1CULoQ4Bl2aGZ_nkMRML7sYtN9os?rs=1&pid=ImgDetMain')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Statistics 1 */}
        <div className="flex flex-col items-center space-y-2 bg-opacity-60 p-6 rounded-lg">
          <div className="text-white text-6xl mb-4">♻</div>
          <p className="text-3xl font-extrabold text-green-500">25,000+</p>
          <p className="text-lg font-semibold text-white text-center">Tons of Waste Recycled</p>
        </div>

        {/* Statistics 2 */}
        <div className="flex flex-col items-center space-y-2 bg-opacity-60 p-6 rounded-lg">
          <div className="text-white text-6xl mb-4">🔋</div>
          <p className="text-3xl font-extrabold text-green-500">10,000+</p>
          <p className="text-lg font-semibold text-white text-center">Cubic Meters of Biogas Produced</p>
        </div>

        {/* Statistics 3 */}
        <div className="flex flex-col items-center space-y-2 bg-opacity-60 p-6 rounded-lg">
          <div className="text-white text-6xl mb-4">🏘</div>
          <p className="text-3xl font-extrabold text-green-500">500+</p>
          <p className="text-lg font-semibold text-white text-center">Communities Served</p>
        </div>

        {/* Statistics 4 */}
        <div className="flex flex-col items-center space-y-2 bg-opacity-60 p-6 rounded-lg">
          <div className="text-white text-6xl mb-4">🌍</div>
          <p className="text-3xl font-extrabold text-green-500">15,000+</p>
          <p className="text-lg font-semibold text-white text-center">Tons of CO₂ Emissions Reduced</p>
        </div>
      </div>
    </div>
  );
};
