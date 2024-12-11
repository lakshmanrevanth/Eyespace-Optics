import { useState } from "react";
import { supabase } from "C:/Users/laksh/Dev/web-dev/projects/client_projects/eyeOpticalWebsite/src/supabaseClient.ts"; // Import the supabase client

export default function Component() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Insert email into Supabase 'emailsubscriptions' table
      const { data, error } = await supabase
        .from("emailsubscriptions")
        .insert([{ email }]);

      if (error) {
        throw error;
      }

      setStatus("success");
      setMessage("You have successfully subscribed!");
    } catch (error: any) {
      console.error("Error subscribing:", error);
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    } finally {
      setEmail(""); // Clear email input after submission
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-medium text-[#7A6F5C] text-center mb-8">
        BE THE FIRST TO KNOW
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#7A6F5C]"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-[#7A6F5C] text-white font-medium hover:bg-[#695D50] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-600 mt-4 text-[#7A6F5C]">{message}</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4 text-[#7A6F5C]">{message}</p>
      )}
    </div>
  );
}
