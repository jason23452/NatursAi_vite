
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import "../all_css/news.css";

interface NewsItem {
  title: string;
  url: string;
  published: string;
  description: string;
  image: string;
}

const newsComponent: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]); // 使用 TypeScript 定義狀態的類型

  useEffect(() => {
    // 使用 fetch 從 Flask API 獲取資料
    fetch("http://172.17.0.4:5000/api/videos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setNews(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="desktop_news_container">
      <span className="desktop_news_text_style_1">新聞報導</span>
      <div className="desktop_news_all_item_container">
        {news.map((item, index) => (


          <div
            key={index}
            className="desktop_news_item_container"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.title}
                className="desktop_news_item_img"
              />
            </a>

            <div className="desktop_news_text_contaner">
              <span className="desktop_news_text_style_2">{item.title}</span>
              <span className="desktop_news_text_style_3">{item.description}</span>

            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default newsComponent;
