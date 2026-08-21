import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import waynePic from "@/assets/images/wayne.jpg";

export function HeroSection() {
  return (
    <Section className="py-20 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={waynePic}
            alt="Wayne Andrei Ando"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            />
        </div>

        {/* Right: Name + Intro */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            WAYNE ANDREI I. ANDO
          </h1>
          <p className="text-lg text-gray-600">
            Hi, I'm Wayne Andrei Ando. I currently work at McDonald's Cordova and live in Cogon, Cordova, Cebu. I'm passionate about learning web development and building projects that help me grow my skills as an aspiring developer.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
  <NavLink to="/about">
    <Button>About Me</Button>
  </NavLink>
  <NavLink to="/contact">
    <Button variant="secondary">Contact Me</Button>
  </NavLink>
</div>

        </div>
      </div>
    </Section>
  );
}