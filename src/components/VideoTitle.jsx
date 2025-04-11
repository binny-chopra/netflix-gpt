const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 text-white absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold"> {title}</h1>
      <p className="py-6 text-lg w-3/4">{overview}</p>
      <div>
        <button className="cursor-pointer bg-white text-black text-xl p-4 w-40 rounded-lg hover:bg-white/80">
          Play
        </button>
        <button className="mx-2 cursor-pointer bg-gray-500/50 text-white text-xl p-4 w-40 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
