import React, { useState } from "react";
import { useSelector } from "react-redux";
import { searchPost } from "../store/postSlice";
import { Posts } from "../components/Posts/Posts";

export default function SearchPost() {
  const [searchQuery, setSearchQuery] = useState();
  const posts = useSelector((state) => searchPost(state, searchQuery));

  console.log("searched posts", posts);

  return (
    <>
      <h1>Search Post</h1>
      <input
        class="form-control"
        placeholder="SearchBar"
        type="Text"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="mt-4">
        <h3 className="pb-2">Search results:</h3>
        {posts.length > 0 ? <Posts posts={posts} /> : <p>No posts</p>}
      </div>
    </>
  );
}
