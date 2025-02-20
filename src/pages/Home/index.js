import React, { useRef, useState } from 'react';
import video1 from '~/videos/video1.mp4';
import video2 from '~/videos/video2.mp4'; // Thêm các video khác
import video3 from '~/videos/video3.mp4';
import video4 from '~/videos/video4.mp4';

import styles from '~/Home/Home.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);
function Home() {
    const videoRefs = useRef([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = (index) => {
        if (videoRefs.current[index]) {
            const videoElement = videoRefs.current[index];
            if (videoElement.paused && !isPlaying) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        }
        setIsPlaying(!isPlaying);
    };

    const videos = [video4, video1, video2, video3];

    return (
        <div>
            <div className={cx('video-list')}>
                {videos.map((video, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'relative',
                            display: 'block',
                            margin: '10px',
                            width: '100%',
                            height: '100%',
                            marginBottom: '20px',
                            marginTop: '22%',
                            marginLeft: '10%',
                        }}
                    >
                        <video ref={(el) => (videoRefs.current[index] = el)} src={video} width={400} />
                        <button
                            onClick={() => handleClick(index)}
                            style={{
                                display: 'block',
                                position: 'absolute',
                                top: '50%',
                                left: '26%',
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
                            {isPlaying ? '||' : '>'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
