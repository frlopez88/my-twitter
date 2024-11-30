export const Wall = () => {
  // Simulación de publicaciones (puedes reemplazarlo con datos reales)
  const posts = [
    {
      id: 1,
      user: "John",
      content: "Today I will learn react",
      time: "1 minute ago",
    },
    {
      id: 2,
      user: "Fernando",
      content: "Do you know JavaScript? 🤔",
      time: "10 minutes ago",
    },
    {
      id: 3,
      user: "Pax",
      content: "I finish my project! 🚀",
      time: "20 minutes ago",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4 text-center">What is new</h2>

          <div className="card mb-4">
            <div className="card-body">
              <textarea
                className="form-control mb-2"
                rows="3"
                placeholder="What are you thinking about..."
              ></textarea>
              <button className="btn btn-primary w-100">Publish</button>
            </div>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-1">{post.user}</h5>
                <p className="card-text text-muted">{post.time}</p>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

