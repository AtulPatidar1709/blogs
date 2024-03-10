import Post from "../components/Post";

async function getPost() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data.data;
}

export default async function Posts() {
  const posts = await getPost();
  return (
    <>
      <h1> Posts </h1>

      <div className="grid grid-cols-4 gap-1">
        {posts.map((post) => {
          return (
            <Post 
            className="w-20 h-24 overflow-hidden"
              key={post.id}
              id={post.id}
              body={post.body}
              title={post.title}
            />
          );
        })}
      </div>
    </>
  );
}
