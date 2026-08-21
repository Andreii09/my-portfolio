import { Section } from "@/components/common/section";

export function AboutSection() {
  return (
    <Section className="py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
  Hi, I'm Wayne Andrei Ando. I currently work at McDonald's Cordova and live in Cogon, Cordova, Cebu. I'm passionate about learning web development and building projects that help me grow my skills as an aspiring developer.
</p>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}