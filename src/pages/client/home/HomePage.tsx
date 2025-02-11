const HomePage = () => {
  return (
    <div className="bg-banner bg-cover bg-center bg-no-repeat w-full h-screen sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-screen relative">
      <div className="absolute inset-0 bg-[#000000a6] bg-opacity-10 z-0"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
        <div className="text-white text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center leading-tight tracking-tight max-w-4xl mx-auto">
          Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
        </div>
      </div>
    </div>
  );
};

export default HomePage;
