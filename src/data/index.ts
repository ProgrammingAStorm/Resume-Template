export class Data {
    header: HeaderData = new HeaderData();
    personalDetails: PersonalData = new PersonalData();

    skills = new SkillsData();
    workHistory = {

    }
    education = [
        {
            name: "",

        },
        {
            name: "",

        }
    ]
    projects = {

    }
}

export class HeaderData {
    name: string = "Mark Pavel";
    psuedonym: string = "ProgrammingAStorm";
    position: string = "Full-Stack Web Developer";
}

export class PersonalData {
    personalDetails = [
        {
            link: "programmingastorm@gmail.com",
            name: "Professional Email",
            key: 0,
        },
        {
            link: "markpavel02@gmail.com",
            name: "Personal Email",
            key: 1,
        },
        {
            link: "https://programmingastorm.github.io/Flutter-Portfolio/#/",
            name: "Personal Website",
            key: 2,
        },
        {
            link: "https://github.com/ProgrammingAStorm",
            name: "GitHub",
            key: 3,
        },
        {
            link: "https://www.linkedin.com/in/mark-pavel-744297202/",
            name: "LinkedIn",
            key: 4,
        }
    ];
}

export class SkillsData {
    languages = {
        comfortable: [
            {
                name: "Javascript/Node.js",
                time: "1 Year"
            },
            {
                name: "Dart",
                time: "2 Months"
            },
        ],
        familiar: [
            {
                name: "Typescript",
            },
            {
                name: "C#",
            },
            {
                name: "Java",
            },
            {
                name: "C++",
            },
        ]
    };
    frontEnd = {
        frameworksLibraries: [
            {
                name: "React",
                time: "1 Year"
            },
            {
                name: "Flutter",
                time: "2 Months"
            },
            {
                name: "jQuery",
                time: "1 Year"
            }
        ],
        stylingTools: [
            "Bootstrap",
            "Bulma",
            "Bootstrap-React",
            "React-Bulma",
            "Material-UI",
            "Tailwind"
        ],
        buildTools: [
            {
                name: "Vite"
            },
            {
                name: "Webpack"
            },
        ]
    };
    apisSdks = [
        "PetFinder",
        "Firebase",
        "Flutter",
        "Android"
    ];
    backEnd = {
        apis: [
            {
                name: "REST",
                time: "1 Year"
            },
            {
                name: "GraphQL",
                time: "6 Months"
            }
        ],
        frameworks: [
            "Express"
        ],
        orms: [
            "Sequelize",
            "Mongoose"
        ]
    };
    traits = [
        "Creative",
        "Loyal",
        "Detail-Oriented",
        "Ambitious",
        "Committed",
        "Responsible",
        "Curious"
    ];
}

const data = new Data();

export { data };