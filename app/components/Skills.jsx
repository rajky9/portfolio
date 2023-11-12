import React from "react";
import html from "@/public/assets/skills/html.png";
import css from "@/public/assets/skills/css.png";
import javascript from "@/public/assets/skills/javascript.png";
import react from "@/public/assets/skills/react.png";
import nextjs from "@/public/assets/skills/nextjs.png";
import firebase from "@/public/assets/skills/firebase.png";
import tailwind from "@/public/assets/skills/tailwind.png";
import mongo from "@/public/assets/skills/mongo.png";
import csharp from "@/public/assets/skills/csharp.png";
import java from "@/public/assets/skills/java.png";
import php from "@/public/assets/skills/php.png";
import node from "@/public/assets/skills/node.png";
import github from "@/public/assets/skills/github1.png";

import Image from "next/image";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto flex flex-col h-full justify-center p-2 overflow-hidden lg:my-0 my-10">
        <p className="text-indigo-500 text-xl uppercase tracking-widest">
          skills
        </p>
        <h2 className="text-3xl py-4">What I Can Do</h2>
        <div className="grid lg:grid-cols-4  sm:grid-cols-2 gap-5">
          <SkillsItem
            src={html}
            width={64}
            height={64}
            alt="html"
            text="Html"
          />
          <SkillsItem src={css} width={64} height={64} alt="html" text="Css" />
          <SkillsItem
            src={tailwind}
            width={64}
            height={64}
            alt="html"
            text="Tailwind"
          />
          <SkillsItem
            src={node}
            width={64}
            height={64}
            alt="html"
            text="Node"
          />
          <SkillsItem
            src={react}
            width={64}
            height={64}
            alt="html"
            text="React"
          />

          <SkillsItem
            src={nextjs}
            width={64}
            height={64}
            alt="html"
            text="Nextjs"
          />
          <SkillsItem
            src={mongo}
            width={64}
            height={64}
            alt="html"
            text="Mongo"
          />
          <SkillsItem
            src={github}
            width={64}
            height={64}
            alt="html"
            text="Github"
          />
        </div>
        <p className="text-indigo-500 uppercase tracking-widest my-6">
          Some little experience
        </p>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2">
          <SkillsItem src={php} width={54} height={54} alt="php" text="PHP" />
          <SkillsItem src={csharp} width={54} height={54} alt="C#" text="C#" />
          <SkillsItem src={java} width={54} height={54} alt="java" text="Java" />
          <SkillsItem src={firebase} width={54} height={54} alt="firebase" text="Firebase" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
