import React from "react";
import ArticleImage from "./ArticleImage";

const Article = () => {
  const articles = [
    {
      heading: "Our Holiday Gift Picks",
      img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHwxfDB8fHww",
      title: "The best presents for everyone on your list.",
      button: "Read More",
    },
    {
      heading: "Cleaner Fashion",
      img: "https://images.unsplash.com/photo-1528122819723-9dca3a31295d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzdGFpbmFiaWxpdHl8ZW58MHwxfDB8fHww",
      title: "See the sustainability efforts behind each of our products.",
      button: "Learn More",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className=" container mx-auto flex gap-6 items-center h-screen justify-center">
        <ArticleImage obj={articles[0]} />
        <ArticleImage obj={articles[1]} />
      </div>
      <hr class="container mx-auto h-px bg-gray-800 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Article;