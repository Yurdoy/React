function VideoComponent() {
  return (
    <div className="App">
      <video width={300} height={200} controls>
        <source
          src="https://videos.pexels.com/video-files/20629761/20629761-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoComponent;
