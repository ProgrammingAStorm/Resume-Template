export class Data {
    header: HeaderData = new HeaderData();
    personalDetails: PersonalData = new PersonalData();
    skills = new SkillsData();
    workHistory = new WorkData();
    education = new EducationData();
    projects = new ProjectsData();
};

export class HeaderData {
    name: string = "Mark Pavel";
    psuedonym: string = "ProgrammingAStorm";
    position: string = "Full-Stack Web Developer";
};

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
};

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
};

export class WorkData {
    entries = [
        {
            employer: "2U Bootcamps",
            title: "Full-Stack Bootcamp Teacher's Instructor",
            time: {
                start: "Februrary 2023",
                end: ""
            },
            local: "Lanham, MD",
            current: true,
            tasks: [
                "Taking Attendence",
                "Pushing Activities To GitLab",
                "Grading Projects",
                "Being Available To Students Through Slack To Chat About Things They Need Help With",
                "Meeting In Zoom Calls 1-On-1 With Students",
                "Helping Students Catch-Up During Class"
            ],
            dayToDay: [
                "One Slack And Monitor Until Office Hours",
                "Help Students As Needed",
                "Join Zoom Call At Office Hours",
                "Stay In Call Until Class Starts",
                "Help Students In Zoom As Needed",
                "Help Students As Needed During Class",
                "Help Students As Needed After Class",
                "Stay In Office Hours Till Closing Or Students All Leave"
            ],
            keyPoints: [
                "Working With Students",
                "Discussing Full-Stack Web Development",
                "Mentoring Students",
                "Teaching Industry Conventions And Best Practices",
                "Encouraging Active Problem Solving"
            ]
        },
        {
            employer: "Taco Bell",
            title: "Customer Service Representative",
            time: {
                start: "August 2021",
                end: ""
            },
            local: "Howell, MI",
            current: true,
            tasks: [
                "Count Drawer",
                "Manage Drawer Monies",
                "Maintain Seamless Customer Interactions",
                "Prevent Customer Inconvenience",
                "Maintain Local and General Cleanliness",
                "Refill Food Stock"
            ],
            dayToDay: [
                "Clocking In",
                "Check Daily Schedule",
                "Check Shift Deployment",
                "Check For Immediate Responsibilites",
                "Maintain Workstation",
                "Maintain Customer Sale Speed",
                "Maintain Cleanliness"
            ],
            keyPoints: [
                "Customers often have grievances that must be dealt with in a manner that is poth satisfactory and efficient.",
                "Food stocks totals must be maintained to always assure ingredient up-time.",
                "Customers are always prioritized, and speed and quality is the number one concern."
            ]
        },
        {
            employer: "Taco Bell",
            title: "Customer Service Representative",
            time: {
                start: "February 2019",
                end: "February 2021"
            },
            local: "Livonia, MI",
            current: false,
            tasks: [
                "Count Drawer",
                "Manage Drawer Monies",
                "Maintain Seamless Customer Interactions",
                "Prevent Customer Inconvenience",
                "Maintain Local and General Cleanliness",
                "Refill Food Stock"
            ],
            dayToDay: [
                "Clocking In",
                "Check Daily Schedule",
                "Check Shift Deployment",
                "Check For Immediate Responsibilites",
                "Maintain Workstation",
                "Maintain Customer Sale Speed",
                "Maintain Cleanliness"
            ],
            keyPoints: [
                "Customers often have grievances that must be dealt with in a manner that is poth satisfactory and efficient.",
                "Food stocks totals must be maintained to always assure ingredient up-time.",
                "Customers are always prioritized, and speed and quality is the number one concern."
            ]
        },
    ];
};

export class EducationData {
    entries = [
        {
            name: "MSU Full-Stack Coding Bootcamp",
            locat: "Lansing, MI",
            major: "Full-Stack Web Development",
            tier: "Certificate",
            gpa: "3.4",
            time: {
                start: "May 2022",
                end: "September 2022"
            },
            description: [
                "Students were taken from the ground up and taught the elementary aspects of Web Development.",
                "Students begin with HTML, CSS, and Javascript basics, and work their way up to proficiency with the MERN tech stack.",
                "Students were also taught Object-Oriented Programming topics with various ORMs.",
                "Students build Full-Stack web apps on top of APIs that they themselves have layed out."
            ]
        },
        {
            name: "Schoolcraft College",
            locat: "Livonia, MI",
            major: "Computer Information Systems",
            tier: "Associate",
            gpa: "3.895",
            time: {
                start: "September 2019",
                end: "February 2021"
            },
            description: [
                "Students were taken from the ground up and given introductory courses on computer science and coding concepts.",
                "Students were guided along the path to application development by teaching Python, C++, C#, and Java.",
                "Languages offered study of concepts such as programming logic, algorithms, data-structures, Windows Forms, and Object-Oriented Programming respectively."
            ]
        }
    ];
};

export class ProjectsData {
    projects = [
        {
            name: "Instaclone",
            techStack: ["MERN"],
            purpose: "It was created as the capstone project for the Full-Stack Coding Bootcamp. It was intended to show off all of what we had learned during the bootcamp, and show of our skills as developers. From data coupling to API routes to layout design, as well as data modeling, this project covered it all.",
            takeAways: [
                "People work at different paces and we need to be able to communicate with the lowest common demoninator at times.",
                "Sometimes good enough is better than not at all.",
                "Being a good leader is about being the one with your head screwed on correct, that answers all of the questions, and makes sure everyone is on the up-and-up."
            ],
        },
        {
            name: "Flutter Portfolio",
            techStack: ["Flutter"],
            purpose: "To get familiar with the Dart programming language and the Flutter front-end design framework. I wanted to get practice with Flutter's design implementation, as well as get more experience with Object-Oriented Programming. I would said my time with Flutter was well worth-it.",
            takeAways: [
                "Learning a new language can take longer than you estimated.",
                "Sometimes design elements that seem simple to implement end up taking up the most time.",
                "There will come times when you need to stop working on something for the sake of preventing burn-out."
            ],
        },
        {
            name: "Resume-Template",
            techStack: ["React", "Vite", "Tailwind"],
            purpose: "To design a stylish resume with Tailwind, while getting practice in general with Tailwind.",
            takeAways: [
                "React projects generated with Vite run very efficiently, and are created very seemlessly."
            ],
        },
    ];
};

const data = new Data();

export { data };