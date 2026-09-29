export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

// Edit this list as you finish projects — title, description, tags, and links.
// Leave `link`/`repo` as "#" until you have a real URL.
export const projects: Project[] = [
  {
    title: "Project One",
    description: "Add a short description of this project once it's ready.",
    tags: ["Solidity", "Next.js"],
    link: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    description: "Add a short description of this project once it's ready.",
    tags: ["Rust", "Solana"],
    link: "#",
    repo: "#",
  },
  {
    title: "Project Three",
    description: "Add a short description of this project once it's ready.",
    tags: ["TypeScript", "Ethers.js"],
    link: "#",
    repo: "#",
  },
];
