import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fives Tech Blog" },
    { name: "description", content: "Welcome to Fives Tech Blog!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
