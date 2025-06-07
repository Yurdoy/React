import React from "react";
import { useEffect, useState } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://683ef3211cd60dca33ddb0f3.mockapi.io/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <main>
        <p>Loading posts...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p>Error: {error}</p>
      </main>
    );
  }

  return (
    <div>
      <main>
        {posts.map(({ id, title, body }) => (
          <Post key={id} title={title} body={body} />
        ))}
      </main>
    </div>
  );
};

export default PostList;

// В этом компоненте реализовано отображение списка всех постов. Сюда
// входит загрузка данных из API, их отображение и передача данных в компоненты
// постов.
