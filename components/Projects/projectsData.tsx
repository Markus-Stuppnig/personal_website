export interface Project {
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  latestVersion?: string;
  githublink: string;
  weblink: string;
  pypilink: string;
  imagePath?: string;
  contributers?: Contributor[];
  progress: number;
}

export interface Contributor {
  name: string;
  description: string[];
  additionalInformation: string[];
  imagePath?: string;
}

export const projectsData: Project[] = [
  {
    title: "Digital Emergency Medicine Physician",
    description:
      "We are developing the DIEMP App as part of our diploma project.<br /><br />DIEMP revolutionizes the initial treatment of strokes by allowing rescue personnel to communicate directly with an AI that assists with immediate diagnosis and action recommendations.",
    startDate: new Date("2024-09-0T00:00:00.000Z"),
    latestVersion: "Alpha 0.0.1",
    githublink: "",
    weblink: "https://www.diemp.org",
    pypilink: "",
    progress: 50,
  },
  {
    title: "VSA",
    description:
      "Personal digital possessions like social media accounts and crypto wallets risk being lost upon the user's demise. This project aims to help people manage and pass on their digital legacy.<br /><br /> In my dual role as the project leader and developer, I lead the development process, organize stakeholder meetings, and contribute to feature implementation.",
    startDate: new Date("2023-11-0T00:00:00.000Z"),
    latestVersion: "v0.8",
    githublink: "",
    weblink: "",
    pypilink: "",
    progress: 90,
  },
  {
    title: "Okamaya",
    description:
      "Okamaya is a Minecraft PvP client that is designed to provide players with a competitive edge in PvP combat. The client includes a variety of features such as auto-clickers, auto-tool-mod, and other tools to help players improve their performance in the game.",
    startDate: new Date("2023-01-0T00:00:00.000Z"),
    latestVersion: "v1.83",
    githublink: "",
    weblink: "",
    pypilink: "",
    progress: 100,
  },
  {
    title: "Schengen-Borders-Information-Scraper",
    description:
      "This Python script scrapes information about temporary reintroduction of border control in the Schengen Area from the <a href='https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area/temporary-reintroduction-border-control_en' target='_blank'>European Commission's website</a>.",
    startDate: new Date("2023-01-0T00:00:00.000Z"),
    latestVersion: "v0.0.1",
    githublink:
      "https://github.com/Markus-Stuppnig/Schengen-Borders-Information-Scraper",
    weblink:
      "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/schengen-area/temporary-reintroduction-border-control_en",
    pypilink: "https://pypi.org/project/Schengen-Borders-Information-Scraper/",
    progress: 100,
  },
  {
    title: "Phanto",
    description:
      "Phanto is a utility that specializes in UAC bypass and privilege escalation, enabling it to bypass User Account Control on Windows 10 and 11 systems and attain Administrator privileges.",
    startDate: new Date("2023-01-0T00:00:00.000Z"),
    latestVersion: "Debug 1.0",
    githublink: "https://github.com/Markus-Stuppnig/Phanto",
    weblink: "",
    pypilink: "",
    progress: 40,
  },
  {
    title: "FileIOPlus",
    description:
      "FileIOPlus is a Java library designed to simplify file input/output operations. It provides convenient methods and mechanism for setting, storing and retrieving key-value pairs within a text file.",
    startDate: new Date("2020-12-0T00:00:00.000Z"),
    latestVersion: "v1.0",
    githublink: "https://github.com/Markus-Stuppnig/FileIOPlus",
    weblink: "",
    pypilink: "",
    progress: 100,
  },
] as const;
