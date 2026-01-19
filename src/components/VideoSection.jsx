const VideoSection = () => {
  const videoUrl = "https://youtu.be/KCzmah0Vdrc?si=I7jR70WB0P2bHj9n";

  return (
    <section className="video">
      <h2 className="visually-hidden">Видео про ЖК LoftHouse</h2>
      <div className="container">
        <a href={videoUrl} className="video__link" target="_blank" rel="noopener noreferrer">
          <img className="video__icon" src="/icons/play-button.svg" alt="Play video" />
          <img className="video__img" src="/images/Rectangle 2.jpg" alt="Video thumbnail" />
        </a>
      </div>
    </section>
  );
};

export default VideoSection;