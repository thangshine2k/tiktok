import React, { useRef, useState } from 'react';
import video1 from '~/videos/video1.mp4';
import video2 from '~/videos/video2.mp4';
import video3 from '~/videos/video3.mp4';
import video4 from '~/videos/video4.mp4';
import video5 from '~/videos/video5.mp4';
import video6 from '~/videos/video6.mp4';
import video7 from '~/videos/video7.mp4';
import video8 from '~/videos/video8.mp4';
import './styles.css'; // Thêm đường dẫn tới file CSS
import Image from '~/components/Image';

function Home() {
    const videoRefs = useRef([]);
    const [addTym, setAddTym] = useState(8888);
    const [svgColor, setSvgColor] = useState('#000'); // Đặt giá trị mặc định của màu sắc SVG
    const [isTymClicked, setIsTymClicked] = useState(false); // Đặt giá trị mặc định của trạng thái nút

    const HandleAddTym = () => {
        if (isTymClicked) {
            setAddTym(8888); // Đặt lại giá trị tym về 8888
            setSvgColor('#000'); // Đặt lại màu sắc SVG về màu gốc
        } else {
            setAddTym(addTym + 1);
            setSvgColor('#fe2c55'); // Thay đổi màu sắc SVG khi click vào nút "Thêm Tym"
        }
        setIsTymClicked(!isTymClicked); // Thay đổi trạng thái nút
    };

    const handlePlayPause = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement.paused) {
            videoElement.play();
            // setIsPlaying((prevState) => prevState.map((state, i) => (i === index ? true : state)));
        } else {
            videoElement.pause();
            // setIsPlaying((prevState) => prevState.map((state, i) => (i === index ? false : state)));
        }
    };

    const handleMouseOver = (index) => {
        videoRefs.current[index].controls = true;
    };

    const handleMouseOut = (index) => {
        videoRefs.current[index].controls = false;
    };

    const videos = [video5, video6, video7, video8, video4, video1, video2, video3];

    return (
        <div className="video-container">
            {videos.map((video, index) => (
                <div
                    key={index}
                    className="video-wrapper"
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                >
                    <video
                        // style={{ position: 'relative', left: '30px' }}
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={video}
                        controls={false}
                    />
                    <div className="list-icon">
                        <button
                            onClick={() => handlePlayPause(index)}
                            style={{
                                position: 'relative',
                                // top: '50%',
                                // left: '50%',
                                // transform: 'translate(-50%, -50%)',
                                // fontSize: '24px',
                                // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                // color: 'white',
                                // border: 'none',
                                // borderRadius: '50%',
                                // width: '40px',
                                // height: '40px',
                                // cursor: 'pointer',
                            }}
                        >
                            {/* {isPlaying[index] ? '||' : '>'} */}
                        </button>
                        <Image
                            className="user-avatar"
                            src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/66c9fd27ae8c24c1a47e4c3035740df6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=47315&refresh_token=78aec2578911176a0c46edc4bd50ee1f&x-expires=1740499200&x-signature=lXSMkM4JOljUFc3C0miX%2BhM8LiU%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
                            alt="Nguyen Duc Thang"
                        />
                        <button className="button-addfriend">
                            <svg
                                style={{ position: 'relative', top: '1.4px', opacity: '0.8' }}
                                fill="currentColor"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                            >
                                <path d="M26 7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h15v15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V26h15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H26V7Z"></path>
                            </svg>
                        </button>
                        <button onClick={HandleAddTym} className="button-tym">
                            <svg
                                width="24"
                                data-e2e=""
                                height="24"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ position: 'relative', top: '10px' }}
                            >
                                <g filter="url(#LikeRedShadowColor_filter0_d)">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z"
                                        // fill="#FE2C55"
                                        fill={svgColor}
                                    ></path>
                                </g>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.80371 24.3995C7.17815 29.3932 11.5185 33.8538 15.4999 37.4999C19.1009 40.7978 21.9999 42.9999 23.9999 42.9999C25.9999 42.9999 28.819 40.8144 32.4999 37.4999C38.4621 32.1314 44.9999 24.9999 44.9999 16.9999C44.9999 16.8252 44.9968 16.6513 44.9906 16.4785C41.1344 27.3238 27.3575 37 23.5001 37C20.6255 37 11.2219 31.6262 4.80371 24.3995Z"
                                    fill="black"
                                    fill-opacity="0.03"
                                ></path>
                                <defs>
                                    <filter
                                        id="LikeRedShadowColor_filter0_d"
                                        x="0.6"
                                        y="3.3"
                                        width="46.8"
                                        height="43.3"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        ></feColorMatrix>
                                        <feOffset dy="1.2"></feOffset>
                                        <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                        ></feColorMatrix>
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow"
                                        ></feBlend>
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow"
                                            result="shape"
                                        ></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                            <strong className="count-tym">{addTym}</strong>
                        </button>
                        <button className="button-comment">
                            <svg
                                style={{ position: 'relative', top: '8px' }}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                            >
                                <circle cx="5" cy="12" r="2" />
                                <circle cx="12" cy="12" r="2" />
                                <circle cx="19" cy="12" r="2" />
                            </svg>
                            <strong data-e2e="like-count" className="count-comment">
                                5786
                            </strong>
                        </button>
                        <button className="button-save_local">
                            <svg
                                style={{ position: 'relative', top: '8px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17 3H7C5.9 3 5 3.9 5 5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V5C19 3.9 18.1 3 17 3ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19ZM17 8H7V5H17V8Z" />
                            </svg>
                            <strong data-e2e="like-count" className="count-save_local">
                                5786
                            </strong>
                        </button>
                        <button className="button-share">
                            <svg
                                style={{ position: 'relative', top: '8px' }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 16.08C17.24 16.08 16.56 16.38 16.05 16.88L8.91 13.24C8.96 13.08 9 12.92 9 12.75C9 12.58 8.96 12.42 8.91 12.26L15.96 8.72C16.5 9.22 17.2 9.5 18 9.5C19.66 9.5 21 8.16 21 6.5C21 4.84 19.66 3.5 18 3.5C16.34 3.5 15 4.84 15 6.5C15 6.67 15.04 6.83 15.09 7L8.04 10.54C7.5 10.04 6.8 9.75 6 9.75C4.34 9.75 3 11.09 3 12.75C3 14.41 4.34 15.75 6 15.75C6.8 15.75 7.5 15.46 8.04 14.96L15.18 18.59C15.12 18.73 15.08 18.89 15.08 19.05C15.08 20.71 16.42 22.05 18.08 22.05C19.74 22.05 21.08 20.71 21.08 19.05C21.08 17.39 19.74 16.05 18.08 16.05Z" />
                            </svg>
                            <strong data-e2e="like-count" className="count-share">
                                5786
                            </strong>
                        </button>
                        <Image
                            className="user-avatar_music"
                            src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/66c9fd27ae8c24c1a47e4c3035740df6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=47315&refresh_token=78aec2578911176a0c46edc4bd50ee1f&x-expires=1740499200&x-signature=lXSMkM4JOljUFc3C0miX%2BhM8LiU%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
                            alt="Nguyen Duc Thang"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
