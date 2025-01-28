import "../all_css/footer.css"

function footer() {

    return (
        <footer>
            <div className="desktop_footer_container">
                <div className="footer_title_container1">
                    <div className="footer_column1">
                        <div className="footer_logo"></div>
                        <span className="footer_text_style1">有疑問嗎？請聯絡我們。</span>
                        <span className="footer_text_style1">Email: Naturs.ai.2024@gmail.com</span>
                    </div>

                    <div className="footer_column2">
                        <span className="footer_text_style2">服務技術支援</span>
                        <span className="footer_text_style3">用戶操作問題</span>
                        <span className="footer_text_style3">夥伴平台教學</span>
                    </div>

                    <div className="footer_column2">
                        <span className="footer_text_style2">合作機會</span>
                        <span className="footer_text_style3">合作或工作</span>
                        <span className="footer_text_style3">媒體室</span>
                    </div>

                    <div className="footer_column3">
                        <span className="footer_text_style2">帳戶資訊</span>
                        <span className="footer_text_style3">帳戶登入</span>
                        <span className="footer_text_style3">註冊帳戶</span>
                        <span className="footer_text_style3">帳號刪除</span>
                    </div>

                    <div className="footer_column4">
                        <span className="footer_text_style2">追蹤我們</span>
                        <span className="footer_text_style3">電子報</span>
                    </div>

                </div>
                <div className="footer_title_container2">
                    <a href="#"><div className="footer_Facebook"></div></a>
                    <a href="#"><div className="footer_Instagram"></div></a>
                    <a href="#"><div className="footer_Youtube"></div></a>
                </div>
                <div className="footer_title_container3">
                    <span>© 2024 NatursAi All rights reserved.</span>


                </div>

            </div>
            <div className="media_footer_container">
                <div className="media_footer_logo"></div>
                <div className="media_footer_link_container">
                    <div className="media_footer_link">
                      <a href="https://www.youtube.com/"></a>  <div className="media_footer_link_youtube"></div>
                       <a href="https://www.facebook.com/"></a> <div className="media_footer_link_instagram"></div>
                       <a href="#"></a> <div className="media_footer_link_facebook"></div>
                    </div>
                    <div className="media_footer_text_container">
                        <span className="media_footer_text_1">Email:</span>
                        <span className="media_footer_text_2">Naturs.ai.2024@gmail.com</span>
                    </div>


                </div>
                <span className="media_footer_text_3">© 2024 NatursAi All rights reserved.</span>

            </div>




        </footer>
    );
}

export default footer; 