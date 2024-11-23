import { motion } from "framer-motion";
const blogPosts = [
  {
    title: 'Top 10 Tips for Better Swimming',
    description: 'Learn how to improve your swimming technique with these essential tips.',
    image: '/blog1.jpg',
    link: '/blog/top-10-tips',
  },
  {
    title: 'The Science Behind UV Protection',
    description: 'Understand how UV-protective goggles safeguard your eyes during outdoor swims.',
    image: '/blog2.jpg',
    link: '/blog/uv-protection',
  },
  {
    title: 'Choosing the Right Goggles',
    description: 'A comprehensive guide to picking the perfect goggles for your swimming needs.',
    image: '/blog3.jpg',
    link: '/blog/right-goggles',
  },
];

{/* Blog Section */}



export default function BlogSectoin() {
    return (
<section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#9d8189]">From Our Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          className="bg-[#f5f2f3] p-6 rounded-lg shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-[#9d8189] mb-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{post.description}</p>
          <a 
            href={post.link} 
            className="text-[#9d8189] font-semibold hover:underline"
          >
            Read More
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    )
}
