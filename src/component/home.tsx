import { Link } from "react-router-dom";
import { useState } from "react";


import "../all_css/home.css"
import Footer from "./footer";







const Carousel: React.FC = () => {
    const totalItems = 3; // 总共 3 张图片
    const [currentIndex, setCurrentIndex] = useState(0);

    const links = [
        { text: "健康管理APP", url: "/" },
        { text: "遊戲機制", url: "/" },
        { text: "專屬商城", url: "/" },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const getPosition = (index: number): string => {
        const diff = (index - currentIndex + totalItems) % totalItems;
        if (diff === 0) return "center"; // 当前图片（中间）
        if (diff === 1) return "right";  // 右侧图片
        if (diff === 2) return "left";   // 左侧图片
        return "";
    };

    return (
        <div className="carousel-container">
            <div className="carousel-inner">
                {[0, 1, 2].map((index) => (
                    <div key={index} className={`carousel-item ${getPosition(index)}`}>
                        <div className={`carousel-bg bg-${index}`} />
                        <Link className="carousel-button" to={links[index].url}>
                                <span>{links[index].text}</span>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="carousel-arrow">
                <div onClick={handlePrev} className="carousel_arrow_left"></div>
                <div onClick={handleNext} className="carousel_arrow_right"></div>
            </div>
        </div>
    );
};






function Home() {
    const [isChecked, setIsChecked] = useState(false);

    const [email, setEmail] = useState("");

    const handleButtonClick = () => {
        if (isChecked === true) {
            if (!email.trim()) {
                alert("輸出不能空白");
                return 1;
            }

            // 使用正則表達式檢查是否為有效的電子郵件格式
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("請輸入有效的電子郵件地址");
                return 1;
            }

            alert(email + " 成功");
        } else {
            alert("你尚未同意");
            return 1;
        }


    };

    return (
        <div className="home_container">
            <div className="desktop_home_container">
                <div className="home_title_container">
                    <div className="home_first_text_container">
                        <div className="title_container ">
                            <span className="title_text_1">Naturs
                                <span className="title_text_2">ai</span>
                            </span>
                            <span className="title_text_3">劃時代的AI健康管理</span>
                        </div>
                        <div className="title_container2">
                            <span className="title_text_4">我們著重於打造真實虛實體驗，將現實生活中的健康管理透過與各健康專案、遊戲、活動結合形成虛實整合的強大工作，讓人從小事情開始關注健康議題，比較枯燥乏味的健康管理，立即加入
                                <span className="title_text_5">Naturs
                                    <span className="title_text_6">ai</span>
                                </span>
                                所有產品，體驗真實的生活管理系統。
                            </span>
                        </div>
                        <Link to="/" className="title_button">
                            <span>深入了解</span>
                        </Link>
                    </div>
                    <div className="home_first_button_container">
                        <Link to="/" className="title_button">
                            <span>新聞動態</span>
                        </Link>
                        <Link to="/" className="title_button">
                            <span>健康管理APP</span>
                        </Link>
                    </div>
                </div>
                <div className="home_title2_container">
                    <div className="home_second_text_container">
                        <div className="title_container3">
                            <span>健康管理首選</span>
                        </div>
                        <div className="title_container4">
                            <span>線上的健康管理師，您將於日常紀錄餐點並透過專業醫療人員進一步引導與協助，管理的瑣碎由Natursai為您把關，提供優質個人化健康管理，讓管理成為日常。</span>
                        </div>
                    </div>
                    <div className="connet_container">
                        <div className="connet_img_logo1"></div>
                        <div className="connet_button_container">

                            <span className=" connet_text1">Natursai
                                <span className="connet_text2"> 團隊</span>
                            </span>
                            <div className="connet_us_img"></div>

                        </div>
                        <div className="connet_img_logo2"></div>
                        <div className="connet_button_container">
                            <span className="connet_text2">夠益營養APP</span>
                            <div className="connet_us_img"></div>
                        </div>
                    </div>
                </div>
                <div className="home_title3_container">
                    <div className="title_container5">
                        <span className="title_text_7">專業首選</span>
                        <span className="title_text_8">的健康管理團隊</span>
                    </div>
                    <div className="title_container6">
                        <span className="title_text_4">立即訂閱
                            <span className="title_text_5">Naturs
                                <span className="title_text_6">ai</span>
                            </span>
                            電子報，以了解我們所有產品和公告的最新資訊。
                        </span>
                    </div>
                    <div className="title_container7">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="電子信箱(Email)*" />
                        <button onClick={handleButtonClick} >訂閱</button>
                    </div>
                    <div className="title_container8">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            className="custom-checkbox"
                        />
                        <span>我同意接收來自 NatursAi 的信息分享。</span>
                    </div>
                    <div className="title_container9">
                        <span className="title_text_9">您可以隨時取消訂閱這些通訊。欲了解如何取消訂閱、我們的隱私實踐以及我們如何承諾保護和尊重您的隱私，請參閱我們的
                            <span className="title_text_10">《<span>隱私政策</span>》</span>。
                            <br /><br />
                            點擊下方的「訂閱」按鈕，即表示您同意允許 NatursAi 存儲並處理您提交的個人信息，以便為您提供所需的內容。
                        </span>
                    </div>
                </div>
            </div>
            <div className="media_home_container">
                <div className="media_home_title1_container">
                    <div className="media_home_title1_logo"></div>
                    <div className="media_home_title1_text_container">
                        <span>劃時代的AI健康管理</span>
                    </div>
                </div>
                <div className="media_home_title2_text_container">
                    <span className="media_home_title2_text1">拒絕枯燥的健康管理工具</span>
                    <span className="media_home_title2_text2">是否有過被管理工具的繁瑣過程逼退呢？</span>
                </div>
                <div className="media_home_title3_text_container">
                    <span>專業人性化的設計</span>
                </div>
                <Carousel />
                <div className="media_home_title4_text_container">
                    <span className="media_home_title4_text1">關於我們</span>
                    <span className="media_home_title4_text2">Natursai 致力協助客戶讓健康成為日常首要目標。<br /><br />我們不僅鼓勵用戶探索更健康的生活方式，更以創新思維引領時尚健康的未來潮流。健康是豐富有趣且充滿動力的人生泉源！</span>
                    <button className="media_home_title4_button"><span className="media_home_title4_text3">一同打造</span></button>
                </div>
                <div className="media_home_title5_text_container">
                    <div className="media_home_title5_img_container">
                        <div className="media_home_title5_img logo "></div>
                        <Link to="/connection" className="media_home_title5_button_container connection_img"></Link>
                    </div>
                    <div className="media_home_title5_img_container">
                        <div className="media_home_title5_img goeat"></div>
                        <Link to="/product" className="media_home_title5_button_container understand_img"></Link>
                    </div>
                </div>
                <div className="media_home_title6_text_container">
                    <span className="media_home_title6_text1">專業首選</span>
                    <span className="media_home_title6_text2">的健康管理團隊</span>
                </div>
                <div className="media_home_title7_text_container">
                    <span className="media_home_title7_text1">立即訂閱<span className="media_home_title7_text2">Naturs</span><span className="media_home_title7_text3">ai</span>電子報</span>
                    <span className="media_home_title7_text1">以了解我們所有產品和公告的最新資訊</span>
                </div>

                <div className="media_home_title8_text_container">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="電子信箱(Email)*"
                        className="media_home_title8_input"
                    />
                    <button onClick={handleButtonClick} className="media_home_title8_button">
                        <span>訂閱</span>
                    </button>
                </div>
                <div className="media_home_title9_text_container">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="custom-checkbox"
                    />
                    <span>我同意接收來自 NatursAi 的信息分享。</span>
                </div>
                <div className="media_home_title10_text_container">
                    <span className="media_home_title10_text1">您可以隨時取消訂閱這些通訊。欲了解如何取消訂閱、我們的隱私</span>
                    <span className="media_home_title10_text1">實踐以及我們如何承諾保護和尊重您的隱私，請參閱我們的

                        <Link to="/privacy_policy" className="media_home_title10_link">
                            <span className="media_home_title10_text2">《</span>
                            <span className="media_home_title10_text3">隱私政策</span>
                            <span className="media_home_title10_text2">》</span>
                        </Link>

                    </span>
                    <br />
                    <span className="media_home_title10_text1">點擊下方的「訂閱」按鈕，即表示您同意允許 NatursAi 存儲並</span>
                    <span className="media_home_title10_text1">處理您提交的個人信息，以便為您提供所需的內容</span>

                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Home; 