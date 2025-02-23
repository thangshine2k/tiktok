import React, { useRef, useState } from 'react';
import video1 from '~/videos/video1.mp4';
import video2 from '~/videos/video2.mp4';
import video3 from '~/videos/video3.mp4';
import video4 from '~/videos/video4.mp4';
import './styles.css'; // Thêm đường dẫn tới file CSS

function Home() {
    const videoRefs = useRef([]);
    const [isPlaying, setIsPlaying] = useState(Array(4).fill(false));

    const handleClick = (index) => {
        if (videoRefs.current[index]) {
            const videoElement = videoRefs.current[index];
            if (videoElement.paused) {
                videoElement.play();
                setIsPlaying((prevState) => prevState.map((state, i) => (i === index ? true : state)));
            } else {
                videoElement.pause();
                setIsPlaying((prevState) => prevState.map((state, i) => (i === index ? false : state)));
            }
        }
    };

    const videos = [video4, video1, video2, video3];

    return (
        <div className="video-container">
            {videos.map((video, index) => (
                <div key={index} className="video-wrapper">
                    <video ref={(el) => (videoRefs.current[index] = el)} src={video} width={1150} />
                    <button
                        onClick={() => handleClick(index)}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '24px',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                        }}
                    >
                        {isPlaying[index] ? '||' : '>'}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Home;
