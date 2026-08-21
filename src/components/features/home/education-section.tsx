import { Section } from "@/components/common/section";

type Education = {
  id: number;
  school: string;
  location: string;
  yearGraduated: string;
};

const educationList: Education[] = [
  {
    id: 1,
    school: "COGON ELEMENTARY SCHOOL",
    location: "Cogon, Cordova, Cebu",
    yearGraduated: "2016-2017",
  },
  {
    id: 2,
    school: "BABAG NATIONAL HIGH SCHOOL",
    location: "Babag 1, Lapu-Lapu City, Cebu",
    yearGraduated: "2022-2023",
  },
  {
    id: 3,
    school: "CORDOVA PUBLIC COLLEGE",
    location: "Barangay Gabi, Cordova, Cebu",
    yearGraduated: "ONGOING",
  },
];

export function EducationSection() {
  return (
    <Section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Education
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="border border-gray-200 bg-white rounded-lg p-6 text-center shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {edu.school}
            </h3>
            <p className="text-gray-600 text-sm mb-1">{edu.location}</p>
            <p className="text-gray-500 text-sm">{edu.yearGraduated}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}