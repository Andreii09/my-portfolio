import { Section } from "@/components/common/section";
import drrmoImg from "@/assets/images/drrmo.jpg";
import mcdoImg from "@/assets/images/mcdo.jpg";

type Experience = {
  id: number;
  image: string;
  company: string;
  date: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    image: drrmoImg,
    company: "DRRMO",   // ← replace with actual company/org name
    date: "November 25, 2023",   // ← replace with actual dates
    description: "Completed my OJT here, assisting with disaster preparedness activities and administrative tasks within the office.", // ← replace
  },
  {
    id: 2,
    image: mcdoImg,
    company: "CORDOVA MACDONALDS",   // ← replace with actual company/org name
    date: "June 28, 2024 - present",  // ← replace with actual dates
    description: "Currently working as crew, handling customer service, food preparation, and daily store operations.", // ← replace
  },
];

export function ExperienceSection() {
  return (
    <Section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Experience
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-48 object-contain bg-gray-50 p-4"
/>
            <div className="p-6 space-y-1">
              <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
              <p className="text-sm text-gray-500">{exp.date}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}