import type { ReactNode, SVGProps } from "react";
import javaLogo from "../assets/java-logo.svg";
import {
  SiApachekafka,
  SiDocker,
  SiFastapi,
  SiFlutter,
  SiFramer,
  SiGithubactions,
  SiGooglecloud,
  SiGsap,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import {
  BrainCircuit,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { TechnologyId } from "../data";

type TechIcon = (props: SVGProps<SVGSVGElement>) => ReactNode;

const brand = (
  Icon: typeof SiReact,
  color: string,
): TechIcon => (props) => <Icon {...props} color={color} />;

function AwsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 42 32" fill="none" {...props}>
      <text
        x="4"
        y="21"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="-1"
      >
        aws
      </text>
      <path
        d="M5 25c9 5 22 5 31-1"
        stroke="#ff9900"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m33 22 4 1-2 4"
        stroke="#ff9900"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JavaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 390" {...props}>
      <image href={javaLogo} width="300" height="390" />
    </svg>
  );
}

export const techIconMap: Record<TechnologyId, TechIcon> = {
  react: brand(SiReact, "#61dafb"),
  nextjs: brand(SiNextdotjs, "#ffffff"),
  ts: brand(SiTypescript, "#3178c6"),
  tw: brand(SiTailwindcss, "#38bdf8"),
  fm: brand(SiFramer, "#ffffff"),
  gsap: brand(SiGsap, "#0ae448"),
  three: brand(SiThreedotjs, "#ffffff"),
  java: (props) => <JavaIcon {...props} />,
  "spring-boot": brand(SiSpringboot, "#6db33f"),
  node: brand(SiNodedotjs, "#5fa04e"),
  python: brand(SiPython, "#ffd43b"),
  fastapi: brand(SiFastapi, "#009688"),
  pg: brand(SiPostgresql, "#4169e1"),
  redis: brand(SiRedis, "#d82c20"),
  mongo: brand(SiMongodb, "#47a248"),
  docker: brand(SiDocker, "#2496ed"),
  kubernetes: brand(SiKubernetes, "#326ce5"),
  "github-actions": brand(SiGithubactions, "#2088ff"),
  aws: (props) => <AwsIcon {...props} />,
  gcp: brand(SiGooglecloud, "#4285f4"),
  oauth: (props) => <ShieldCheck {...props} color="#22d3ee" />,
  jwt: (props) => <KeyRound {...props} color="#22d3ee" />,
  rbac: (props) => <UsersRound {...props} color="#22d3ee" />,
  encryption: (props) => <LockKeyhole {...props} color="#22d3ee" />,
  kafka: brand(SiApachekafka, "#ffffff"),
  "ai-llm": (props) => <BrainCircuit {...props} color="#22d3ee" />,
  "react-native": brand(SiReact, "#61dafb"),
  flutter: brand(SiFlutter, "#54c5f8"),
};
