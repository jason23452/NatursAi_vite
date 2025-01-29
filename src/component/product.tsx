/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "./footer";

import "../all_css/product.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





const Slider = () => {
    // 每張圖只放 ID、文字，以及想對應的 className（用來套用背景圖）
    const images = [
        {
            id: 1,
            Link: "/product",
            className: "slide1",
        },
        {
            id: 2,
            Link: "/product",
            className: "slide2",
        },
        {
            id: 3,
            Link: "/product",
            className: "slide3",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // 下一張
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // 上一張
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // 一次顯示兩張，第一張 = currentIndex，第二張 = (currentIndex + 1) % length
    const getCurrentImages = () => {
        const firstImage = images[currentIndex];
        const secondImage = images[(currentIndex + 1) % images.length];
        return [firstImage, secondImage];
    };

    return (
        <div className="Slider-container">
            {/* 載入兩張圖片 (背景圖) */}
            <div className="Slider-image-wrapper">
                {getCurrentImages().map((imgObj, index) => (
                    // 改用 <a>，使整個背景圖成為超連結
                    <Link
                        key={imgObj.id}
                        to={imgObj.Link}
                        className={`Slider-slide ${index === 0 ? "left-slide" : "right-slide"} ${imgObj.className}`}
                    >
                        {/* 這裡可以包住想顯示在圖片上的文字或其他元素 */}
                    </Link>
                ))}
            </div>

            <button className=" nav-btn-prev" onClick={handlePrev}></button>
            <button className=" nav-btn-next" onClick={handleNext}></button>
        </div>
    );
};







interface Video {
    id: number;
    title: string;
    url: string;
}

const product: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([
        {
            id: 0,
            title: "預設影片 - 本地視頻",
            url: "https://www.example.com/default-video.mp4", // 預設的影片URL
        },
    ]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // 從 Flask API 獲取影片數據
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch("http://172.17.0.4:5000/api/videos");
                const data = await response.json();
                if (data.success) {
                    setVideos(data.videos);
                }
            } catch (error) {
                console.error("Error fetching video data:", error);
                // 使用預設影片
                setVideos([
                    {
                        id: 0,
                        title: "預設影片 - 本地視頻",
                        url: "https://www.example.com/default-video.mp4", // 預設影片URL
                    },
                ]);
            }
        };

        fetchVideos();
    }, []);

    // 切換至上一部影片
    const handlePrevious = () => {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };

    // 切換至下一部影片
    const handleNext = () => {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (videos.length === 0) {
        return <div>Loading...</div>;
    }







    return (
        <div className='product_container'>
            <div className="desktop_product_container">
                <div className="desktop_title_container">
                    <div>
                        <div className="desktop_title_img"></div>
                        <span className="desktop_title_text">夠益營養APP創新的個性化健康飲食規劃及飲食管控, 幫助您輕鬆管理和改進飲食習慣。透過先進的人工智慧技術和實時數據分析,本平台提供量身定制的飲食建議,並透過生活化的遊戲體驗活化個人整合健康管理。</span>
                        <button className="desktop_title_button"><span>盡情期待</span></button>
                    </div>
                    <div className="desktop_title_product_img"></div>
                    <div className="desktop_tilte_animale"></div>
                </div>
                <div className="desktop_product_title2_text_container">
                    <span className="desktop_product_title2_text1">全球首創</span>
                    <span className="desktop_product_title2_text2">高整合</span>
                    <span className="desktop_product_title2_text1">AI營養管理系統</span>
                </div>
                <div className="desktop_title_container2">
                    <div className="desktop_product_vidoe_container">
                        <iframe
                            className="desktop_product_video"
                            src={videos[currentVideoIndex].url}
                            title={videos[currentVideoIndex].title}
                            width="100%"
                            height="100%"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className="desktop_title_container2_object_container">
                        <div className="desktop_product_object1"></div>
                        <div className="desktop_product_object2">
                            <button className="desktop_product_object2_img_left" onClick={handlePrevious}></button>

                            <div>
                                <span className="desktop_product_object2_text1">{String(currentVideoIndex + 1).padStart(2, "0")}</span>
                                <span className="desktop_product_object2_text2">{videos[currentVideoIndex].title}</span>
                            </div>

                            <button className="desktop_product_object2_img_right" onClick={handleNext}></button>

                        </div>
                    </div>
                </div>
                <div className="desktop_product_title3_text_container">
                    <span className="desktop_product_title3_text1">系統核心</span>
                    <span className="desktop_product_title3_text2">三功能</span>
                </div>
                <div className="desktop_title_container3">
                    <div className="desktop_title_container3_object1"></div>
                    <div className="desktop_title_container3_object_container1">
                        <div className="desktop_title_container3_object_container2">
                            <div className="desktop_title_container3_object2"></div>
                            <div className="desktop_title_container3_object3"></div>
                        </div>
                        <div className="desktop_title_container3_object4"></div>

                    </div>

                </div>
                <div className="desktop_title_container4">
                    <div className="desktop_title_container4_object1"></div>
                    <div className="desktop_title_container4_text_ALL_container">
                        <div className="text1_container"><span>體驗產品</span></div>
                        <div className="text2_container"><span>夠益營養APP創新的個性化健康飲食規劃及飲食管控, 幫助您輕鬆管理和改進飲食習慣。透過先進的人工智慧技術和實時數據分析,本平台提供量身定制的飲食建議,並透過生活化的遊戲體驗活化個人整合健康管理。</span></div>
                        <button className="title_container4_button"><span>盡情期待</span></button>
                        <div className="desktop_product_download_object_container">
                            <div className="product_googlePlay_download_object"></div>
                            <div className="product_AppleStore_download_object"></div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="media_product_container">
                <div className="media_title_product_img"></div>
                <div className="media_product_object1">
                    <button className="media_product_object1_img_left" onClick={handlePrevious}></button>

                    <div>
                        <span className="media_product_object1_text_1">{String(currentVideoIndex + 1).padStart(2, '0')}</span>
                        <span className="media_product_object1_text_2">APP操作</span>
                    </div>
                    <button className="media_product_object1_img_right" onClick={handleNext}></button>
                </div>

                <div className="media_product_vidoe_container">
                    <iframe
                        className="media_product_video"
                        src={videos[currentVideoIndex].url}
                        title={videos[currentVideoIndex].title}
                        width="100%"
                        height="100%"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <div className="media_product_object2">
                    <span className="media_product_object2_text_1">聯絡我們</span>
                    <span className="media_product_object2_text_2">邀請您一同全民參與打造全面性健康管理，一起激勵更多注視健康的朋友更好地管理自己的健康和營養，實現個性化的飲食計畫和健康目標。</span>
                    <Link to="/connection" className="media_product_object2_button"><span>前往</span></Link>
                </div>
                <div className="media_product_object3">
                    <div className="media_product_object3_text_1_container">
                        <span className="media_product_object3_text_1">系統核心</span>
                        <span className="media_product_object3_text_2">三功能</span>
                    </div>
                    <span className="media_product_object3_text_3">我們將提供用最優質的APP，具備人性化且極具整合力的設計!</span>

                </div>
                <Slider />
                <div className="media_product_object4">
                    <div className="media_product_object4_img"></div>
                    <Link to="/meal_planning" className="media_product_object4_button"><span>盡情期待</span></Link>
                    <div className="media_product_object4_download_container">
                        <div className="media_product_object4_download_Google_Play"></div>
                        <div className="media_product_object4_download_Apple_Store"></div>


                    </div>

                </div>









            </div>


            <Footer />
        </div>
    );
}

export default product; 