import { csWorkTechnologies } from "../../globals";
import { writable } from "svelte/store";

export const percentLoaded = writable(0) // -1 means skip



export type WorkExperience = {
    company: string;
    jobTitle: string;
    technologies: any[];
    description: string;
    time: string;
    redirect: string;
}

export const experiencesSong = "https://files.catbox.moe/iclebz.mp3"

const prefix = "/work_experience"

export const experiences: {[key: string]: WorkExperience} = {
    ccam: {
        company: "Center For Cell Analysis and Modeling (UConn Health)",
        technologies: [csWorkTechnologies.Java, csWorkTechnologies.Quarkus,
        csWorkTechnologies.K8, csWorkTechnologies.OpenID, csWorkTechnologies.Docker,
        csWorkTechnologies.Python, csWorkTechnologies.SQL, csWorkTechnologies.Fiji,
        csWorkTechnologies.Linux, csWorkTechnologies.S3],
        jobTitle: "Full Stack Software Developer",
        description: "Custom frontend Java applications, backend to support Java applications, transfer of legacy object serialization to RESTful API's, test suites for business logic, and update the user management system used.",
        time: "July 2023 - Now",
        redirect: prefix + "/CCAM"
    },
    ta: {
        company: "University of Connecticut",
        technologies: [csWorkTechnologies.Python, csWorkTechnologies.Django,
        csWorkTechnologies.HTML, csWorkTechnologies.CSS],
        jobTitle: "Cybersecurity Teaching Assitant",
        description: "Made an automated grading system and helped teach students about cybersecurity practices. Also developed web applications for web security labs.",
        time: "August 2022 - May 2023",
        redirect: prefix + "/TA"
    },
    mitre: {
        company: "Mitre",
        jobTitle: "Research Assistant",
        technologies: [csWorkTechnologies.Coq, csWorkTechnologies.C],
        description: "Helped with proving functional equivelance between different functions, research post quantum IB encryption, and participated in a CTF.",
        time: "May 2022 - August 2022",
        redirect: prefix + "/MITRE"
    },
    ra: {
        company: "University of Connecticut",
        jobTitle: "Residential Assistant",
        technologies: [],
        description: "Was in charge of the residents on my floor dealing with violent, mundane, janitorial, and mental health crisis siutations.",
        time: "August 2021 - May 2022",
        redirect: prefix + "/RA"
    },
    qcdx: {
        company: "QCDx",
        technologies: [csWorkTechnologies.Java, csWorkTechnologies.Fiji],
        jobTitle: "Lead Developer",
        description: "Developed two ImageJ plugins, one to control the microscope that this companies product used and another for analyzing the results of this microscope.",
        time: "May 2021 - July 2021",
        redirect: prefix + "/QCDx"
    },
};