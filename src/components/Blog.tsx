import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../supabaseClient.ts"; // Supabase client import

// BlogPost type interface for clarity
export interface BlogPost {
  UUID: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch blogs from Supabase
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching blogs:", error);
          return;
        }

        setBlogPosts(data || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#7A6F5C]">
          From Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.UUID}
              className="bg-[#f5f2f3] p-6 rounded-lg shadow-md border border-[#7A6F5C] hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#7A6F5C] mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <a
                href={`/blog/${post.UUID}`} // Dynamic link to blog details
                className="text-[#7A6F5C] font-semibold hover:underline"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
