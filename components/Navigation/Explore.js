import React from 'react';
import '../../style/style.css';

const Explore = () => {
  // Sample data for blog posts
  const blogPosts = [
    { id: 1, title: "How to Start Blogging", excerpt: "Learn the basics of starting your own blog and sharing your thoughts with the world." },
    { id: 2, title: "Top 10 Blogging Tips", excerpt: "Discover the top 10 tips for creating engaging and successful blog posts." },
    { id: 3, title: "The Future of Blogging", excerpt: "Explore the trends and predictions for the future of blogging." }
  ];

  return (
    <div className='explore-container'>
      <h1>Explore Blog Posts</h1>
      <div className='blog-posts'>
        {blogPosts.map(post => (
          <div key={post.id} className='blog-post'>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button className='read-more'>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
