"use client";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Protect Your Eyes from Blue Light",
    slug: "protect-your-eyes-from-blue-light",
    excerpt:
      "Blue light from screens can affect your sleep cycle and cause eye strain. Learn how to reduce its impact.",
    imageUrl: "https://via.placeholder.com/400x200",
    date: "October 12, 2024",
  },
  {
    id: 2,
    title: "The Importance of Regular Eye Checkups",
    slug: "regular-eye-checkups",
    excerpt:
      "Regular eye exams are crucial for maintaining eye health and detecting potential problems early.",
    imageUrl: "https://via.placeholder.com/400x200",
    date: "October 14, 2024",
  },
  // Add more posts as needed
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="text-2xl font-bold text-blue-600">
            EyeCare Blog
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Eye Care Insights
        </h1>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-xl font-semibold mb-2">
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600"
                  >
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="bg-blue-600 text-white py-12 px-4 mt-16 rounded-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8">
              Stay updated with the latest eye care tips and news.
            </p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 px-4 py-2 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
