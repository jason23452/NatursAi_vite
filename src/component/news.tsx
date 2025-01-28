import NewsComponent from "./newsComponent";
import "../all_css/news.css";
import Footer from "./footer";

function news() {

    return (
            <div className='news_container'>
                    <NewsComponent/>

                    <Footer/>
            </div>
            
    );
}

export default news; 