/* eslint-disable react-refresh/only-export-components */

import { Link } from 'react-router-dom';
import '../all_css/header.css'
import { useEffect, useState } from 'react';















const My_header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        const divs = Array.from(document.querySelectorAll<HTMLDivElement>('body div')).filter(
            (div) => !div.closest('header') && !div.closest("footer")// 過濾掉 header 裡的 div
        );
        if (isMenuOpen) {
            divs.forEach((div) => {
                div.style.height = '222.7865vw'; // 設定高度
                div.style.overflow = 'hidden'; // 禁用滾動
            });
        } else {
            divs.forEach((div) => {
                div.style.height = ''; // 恢復原高度
                div.style.overflow = ''; // 恢復滾動
            });
        }
    }, [isMenuOpen]);
    return (
        <header>
            <div className='desktop_header'>
                <div className="desktop_header_left">
                    <Link to='/' className='desktop_logo'></Link>
                    <div className="desktop_header_left_line"></div>
                    <Link to='/' className="desktop_header_left_text1">首頁</Link>
                    <Link to='/product' className="desktop_header_left_text1">產品</Link>
                    <Link to='/meal_planning' className="desktop_header_left_text2">飲食規劃</Link>
                    <Link to='/connection' className="desktop_header_left_text2">聯絡我們</Link>
                    <Link to='/news' className="desktop_header_left_text1">新聞</Link>
                </div>
                <div className="desktop_header_right">
                    <div className='desktop_header_right_translate' ></div>
                    <div className="desktop_header_right_last_container">
                        <div className="desktop_header_right_login_text_img">
                            <div className='desktop_header_login_img'></div>
                            <span className="desktop_header_login_text">登入</span>
                        </div>
                        <div className="desktop_coin_container">
                            <div className='desktop_coin'></div>
                            <div className="desktop_coin_text">1,200</div>
                            <div className="desktop_add"></div>
                        </div>
                        <div className="desktop_header_right_line"></div>
                        <div className='desktop_header_right_listen'></div>
                        <div className="desktop_header_right_bell"></div>
                        <div className="desktop_header_right_user"></div>
                    </div>
                </div>
            </div>
            <div className="media_header">
                <div className="media_header_left">
                    <Link to='/' ><div className='media_logo'></div></Link>
                </div>
                <div className="media_header_right">
                    <div className="media_header_right_translate"></div>

                    <div
                        className={`media_header_right_media_toogle_menu_img_container ${isMenuOpen ? 'media_header_right_media_toogle_menu_open' : 'media_header_right_media_toogle_menu_close'
                            }`}
                        onClick={toggleMenu}
                    >
                    </div>
                    







                </div>
            </div>

            {isMenuOpen && (
                <div className="media_header_right_media_toogle_menu_container">
                    <div className='toogle_nav_container'>
                        <Link to="/" className='toogle_Link_container' onClick={handleCloseMenu}>
                            <span>首頁</span>
                            <div className='toogle_Link_arrow'></div>
                        </Link>
                        <div className="toogle_Line"></div>
                        <Link to="/product" className='toogle_Link_container ' onClick={handleCloseMenu}>
                            <span>產品</span>
                            <div className='toogle_Link_arrow'></div>
                        </Link>
                        <div className="toogle_Line"></div>
                        <Link to="/meal_planning" className='toogle_Link_container' onClick={handleCloseMenu}>
                            <span>飲食規劃</span>
                            <div className='toogle_Link_arrow'></div>
                        </Link>
                        <div className="toogle_Line"></div>

                        <Link to="/connection" className='toogle_Link_container' onClick={handleCloseMenu}>
                            <span>聯絡我們</span>
                            <div className='toogle_Link_arrow'></div>
                        </Link>
                        <div className="toogle_Line"></div>
                        <Link to="/news" className='toogle_Link_container' onClick={handleCloseMenu}>
                            <span>新聞</span>
                            <div className='toogle_Link_arrow'></div>
                        </Link>
                    </div>
                    <div className="toogle_img_container">
                    <a href='https://www.youtube.com/'><div className="toogle_img_youtube"></div></a>
                    <a href='https://www.instagram.com/'><div className="toogle_img_Instagram"></div></a>
                    <a href='https://www.facebook.com/' ><div className="toogle_img_facebook"></div></a>
                    <Link to="/connection" onClick={handleCloseMenu}><div className="toogle_img_listen"></div></Link>
                        <div className="toogle_text_container">
                            <span className="toogle_text1">Email:</span>
                            <span className="toogle_text2">Naturs.ai.2024@gmail.com</span>
                        </div>
                    </div>
                    <span className="toogle_text3">© 2024 NatursAi All rights reserved.</span>
                </div>
            )}



        </header>

    );
}


export default My_header;