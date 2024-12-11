import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient.ts"; // Import Supabase client

export interface BlogPost {
  UUID: string;
  title: string;
  description: string;
  category: string; // This corresponds to category id in the Supabase table
  image_url: string;
  created_at: string;
}

export type Category = {
  id: string; // This is the id you will use to filter
  name: string;
};

export const categories: Category[] = [
  { id: "1", name: "All about lenses" },
  { id: "2", name: "Eye conditions & symptoms" },
  { id: "3", name: "Eyesight by age" },
  { id: "4", name: "Your life and your eyes" },
];

export default function BlogPages() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null); // State to store selected blog for modal

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw new Error(error.message);
        }

        console.log("Fetched blogs data:", data);

        if (data) {
          const blogData = data as BlogPost[];
          setBlogPosts(blogData);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const openBlogModal = (blog: BlogPost) => {
    setSelectedBlog(blog); // Set the selected blog to display in modal
  };

  const closeModal = () => {
    setSelectedBlog(null); // Close the modal by clearing the selected blog
  };

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00205B] mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your home for stories, eye health education, frame fashion, and lots
            more. Explore our articles and topics.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_300px] sm:grid-cols-1 gap-8">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.UUID}
                className="overflow-hidden border rounded-lg shadow-md cursor-pointer"
                onClick={() => openBlogModal(post)} // Open modal on click
              >
                <a href="#" className="block">
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-red-500 text-sm font-medium">
                        {
                          categories.find(
                            (category) => category.id === post.category
                          )?.name
                        }
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#00205B] mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {post.description}
                    </p>
                    <div className="text-sm text-gray-400">
                      {new Date(post.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:order-last">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden mb-4">
              <button
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? "Hide Categories" : "Show Categories"}
              </button>
            </div>

            {/* Sidebar Content */}
            <div
              className={`space-y-3 transition-all ${
                isSidebarOpen ? "block" : "hidden lg:block"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left h-auto py-3 px-4 rounded-md border ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-3/4 lg:w-2/3 p-8">
              {/* Increased width and padding */}
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
                >
                  X
                </button>
                {/* Modal Content */}
                <div className="mb-4">
                  <img
                    src={selectedBlog.image_url}
                    alt={selectedBlog.title}
                    className="w-full h-96 object-cover mb-4"
                  />
                  <h2 className="text-3xl font-bold text-[#00205B] mb-4">
                    {selectedBlog.title}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {selectedBlog.description}
                  </p>
                  <div className="text-sm text-gray-400 mt-4">
                    {new Date(selectedBlog.created_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
