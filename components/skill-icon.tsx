import type { IconType } from "react-icons";
import {
  SiAndroidstudio,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiDart,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiOracle,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiSpring,
  SiSqlite,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BiData } from "react-icons/bi";

interface SkillVisual {
  icon: IconType;
  color: string;
}

const skillIconMap: Record<string, SkillVisual> = {
  Java: { icon: FaJava, color: "#f89820" },
  Dart: { icon: SiDart, color: "#0175c2" },
  C: { icon: SiC, color: "#a8b9cc" },
  "C++": { icon: SiCplusplus, color: "#00599c" },
  "C#": { icon: TbBrandCSharp, color: "#68217a" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  Python: { icon: SiPython, color: "#3776ab" },
  PHP: { icon: SiPhp, color: "#777bb4" },
  Flutter: { icon: SiFlutter, color: "#02569b" },
  Spring: { icon: SiSpring, color: "#6db33f" },
  React: { icon: SiReact, color: "#61dafb" },
  Laravel: { icon: SiLaravel, color: "#ff2d20" },
  Bootstrap: { icon: SiBootstrap, color: "#7952b3" },
  "ASP.NET Core": { icon: SiDotnet, color: "#512bd4" },
  "Entity Framework Core": { icon: SiDotnet, color: "#512bd4" },
  "Oracle Database": { icon: SiOracle, color: "#f80000" },
  MySQL: { icon: SiMysql, color: "#4479a1" },
  Firebase: { icon: SiFirebase, color: "#ffca28" },
  SQLite: { icon: SiSqlite, color: "#003b57" },
  "Microsoft SQL Server": { icon: BiData, color: "#cc2927" },
  Git: { icon: SiGit, color: "#f05032" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Linux: { icon: SiLinux, color: "#fcc624" },
  "VS Code": { icon: TbBrandVscode, color: "#007acc" },
  Postman: { icon: SiPostman, color: "#ff6c37" },
  "Android Studio": { icon: SiAndroidstudio, color: "#3ddc84" },
};

export function SkillIcon({ name, fallbackSrc }: { name: string; fallbackSrc?: string }) {
  const visual = skillIconMap[name];

  if (visual) {
    const Icon = visual.icon;
    return (
      <Icon
        className="tech-svg-icon"
        style={{ color: visual.color }}
        aria-hidden="true"
        focusable="false"
      />
    );
  }

  if (fallbackSrc) {
    return <img src={fallbackSrc} alt={name} />;
  }

  return <span className="tech-fallback">{name.charAt(0).toUpperCase()}</span>;
}
