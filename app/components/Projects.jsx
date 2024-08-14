import React from "react";
import ProjectItem from "./ProjectItem";
import invoice from "@/public/assets/projects/invoice-app.jpg";
import captur from "@/public/assets/projects/captur.jpg";
import weather from "@/public/assets/projects/weather.jpg";
import balance from "@/public/assets/projects/account_balance.jpg"
import attendance from "@/public/assets/projects/attendance.jpg"
import foods from "@/public/assets/projects/foods.jpg"


const Projects = () => {
  return (
    <div id="projects" className="w-full h-auto scroll-m-20">
      <div className="max-w-[1240px] mx-auto py-8 px-2">
        <p className="text-indigo-500 text-xl uppercase tracking-widest">
          projects
        </p>
        <h2 className="py-4 text-3xl">What I Have Build.</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <ProjectItem
            imageUrl={balance}
            projectName="Account balance"
            technology="NextJS, Clerk, PostgreSQL"
            github="https://github.com/rajky9/accout_balance"
            projectLink="https://accout-balance.vercel.app/"
          />
          <ProjectItem
            imageUrl={invoice}
            projectName="Invoice System"
            technology="NextJS, ArangoDB"
            github="url"
            projectLink="https://invoice-system-orcin.vercel.app/"
          />
          <ProjectItem
            imageUrl={captur}
            projectName="Captur App"
            technology="NextJS"
            github="https://github.com/rajky9/captur-app"
            projectLink="https://captur-app.vercel.app/"
          />
          <ProjectItem
            imageUrl={weather}
            projectName="Weather APP"
            technology="NextJS"
            github="https://github.com/rajky9/weather-app"
            projectLink="https://actualweatherapp.vercel.app/"
          />
          <ProjectItem 
            imageUrl={attendance}
            projectName="Footaball Attendance - IN PROGRESS"
            technology="NextJS, PostgreSQL"
            github=""
            projectLink="https://football-attendance.vercel.app/dashboard"
          />
          <ProjectItem 
            imageUrl={foods}
            projectName="Food App"
            technology="ReactJS"
            github="https://github.com/rajky9/food-app"
            projectLink="https://food-app-ten-phi.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
