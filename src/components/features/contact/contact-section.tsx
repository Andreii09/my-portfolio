import { Section } from "@/components/common/section";

export function ContactSection() {
  return (
    <Section className="py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Contact Me</h1>
        <p className="text-lg text-gray-600">
          Feel free to reach out through any of the channels below.
        </p>

        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> andowayne09@gmail.com
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Phone:</span> +63 930 044 4240
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Location:</span> Cogon, Cordova, Cebu
          </p>
        </div>
      </div>
    </Section>
  );
}