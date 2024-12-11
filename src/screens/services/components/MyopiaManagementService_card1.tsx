import { Sparkles } from "lucide-react";

export default function Myopia_Card1_Component() {
  return (
    <div className="w-full max-w-6xl p-8 relative bg-white shadow-md rounded-lg">
      <div className="p-0">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-[#7A6F5C]">
              What is Myopia?
            </h2>
            <div className="space-y-4 text-[#7A6F5C]">
              <p className="leading-relaxed">
                Myopia, also known as short-sightedness, is a common refractive
                error where distant objects appear blurry, while close-up
                objects can be seen more clearly. Myopia usually develops in
                early childhood, and spurts during pre-teens and teens; your
                child may not even know that they have a vision problem and
                assume everyone sees the same way and will not bring it to your
                attention. It becomes important to watch out for signs of vision
                problems in your child(ren) and ensure yearly eye check-ups are
                a part of their health routine.
              </p>
              <p>
                It is estimated that by 2050, 50% of the world's population
                would be Myopic.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-[#7A6F5C]">
              What are the signs to look out for in a child who has Myopia?
            </h2>
            <ol className="list-decimal list-outside ml-4 space-y-2 text-[#7A6F5C]">
              <li>Trouble seeing things written on the blackboard</li>
              <li>
                Complaints by the teacher that the child is jotting down notes
                incorrectly
              </li>
              <li>
                Partially closing their eye lids/squeezing the eyelids when
                trying to focus or see things
              </li>
              <li>Complaining of headache by the end of the day</li>
              <li>Frequent rubbing of eyes</li>
              <li>Excessive blinking/watering of the eye</li>
              <li>Desire to sit close to watch TV</li>
              <li>
                Wanting to sit in the front row of the classroom to see things
                clearly
              </li>
              <li>Decline in academic performance</li>
            </ol>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-8 text-center">
          <a href="#" className="text-[#7A6F5C] hover:underline">
            How do you know if your child has myopia and what are the signs to
            look out for?
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-4 -left-4">
          <Sparkles className="w-12 h-12 text-[#7A6F5C] opacity-20" />
        </div>
      </div>
    </div>
  );
}
