import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Devraj',
    lastName:  'Bagchi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Biochemistry and Molecular Biology',
    avatar:    '/images/avatar.jpg',
    location:  'America/Toronto',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I'm a Trent University student majoring in Biochemistry and Molecular Biology. I have a keen interest in Synthetic Organic Chemistry, particularly Carbonyl chemistry. I'm hoping to expand my knowledge into other scientific specialities. I'm also interested in Front-End Development as a hobby.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/chemlord',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/devbagchi/',
    },
    {
        name: 'Discord',
        icon: 'discord',
        link: 'https://discordapp.com/users/386380595271565312',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:devrajbagchi@trentu.ca',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Biochemist Seeking New Opportunities</>,
    subline: <>Hey I'm Devraj, a Biochemistry and Molecular Biology Student at <InlineCode>Trent University</InlineCode>, where I'm hoping to gain meaningful experiences in Chemistry and Biology.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'About Me',
        description: <>I'm a Trent University student majoring in Biochemistry and Molecular Biology. I have a keen interest in Medicinal and Pharmaceutical Chemistry. I'm hoping to expand my knowledge into other scientific specialities. I'm also interested in Front-End Development as a hobby.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Education',
        experiences: [
            {
                company: 'Trent University',
                timeframe: '',
                role: 'Candidate for BSc Honours in Biochemistry & Molecular Biology',
                achievements: [
                    <>Relevant Courses: Medicine and Chemistry, Adv. Synthetic Organic Chemistry Bio Applications, Calculus I & II, Introductory Chemistry I & II, Foundations of Cell and Molecular Biology, Intro Organic Chemistry I & II, Basic Research Methods & Stats</>,
                    <>Awards: Trent Entrance Scholarship 2020, Dean's Honour Roll 2020-21 and 2023</>,
                    <>Clubs/Societies: Trent Hemoglobal (Co-President), Trent Varsity Fencer (2021-2022)</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/trentuhemoglobal.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/labphoto.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Donald A. Wilson Secondary School',
                timeframe: '',
                role: 'High School Student',
                achievements: [
                    <>Grade: 84% (A-)</>,
                    <>Awards: Honor Roll</>,
                    <>Clubs/Societies: STEM Design Team (Director, Chemistry), Chess Club (Secretary), Rugby Team, Swim Team</>
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/hsgrad2.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/hsgrad1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        institutions: [
            {
                name: 'Academic Assistant for CHEM 3110',
                description: <>Trent University</>,
                timeframe: 'January 2025 – April 2025',
                achievements: [
                    <>Will grade student papers and reports.</>,
                    <>Manage students in the Laboratory to perform experiments safely.</>,
                    <>Assist students with questions regarding Lab or course content.</>,

                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/lab2.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                name: 'Referee',
                description: <>Whitby FC</>,
                timeframe: 'May 2023 – September 2023',
                achievements: [
                    <>Ensured fair play and safety with quick decisions.</>,
                    <>Managed game dynamics and resolved conflicts.</>,
                    <>Improved officiating through training.</>,
                ],
                images: [ ]
            },
            {
                name: 'HMR/Deli Clerk',
                description: <>Loblaws Companies Ltd</>,
                timeframe: 'April 2021 – December 2021',
                achievements: [
                    <>Ensured quality operations through teamwork and strong listening skills.</>,
                    <>Adhered to safety and workplace protocols.</>,
                    <>Handled machinery to complete tasks.</>,
                ],
                images: []
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Projects',
        skills: [
            {
                title: 'Reaction Repo',
                tags: ['Next.js', 'Organic Chemistry', 'Chemical Education','Reaction Mechanisms'], // Tags for this skill
                description: <>Reaction Repo is a comprehensive organic chemistry database aimed at providing free, accessible resources for students, featuring reaction mechanisms, detailed overviews, citations in a documentation format. It addresses the issues of misinformation, high subscription costs, and lack of quality practice material found in existing platforms like ReactionFlash, Master Organic Chemistry, and ChemSteps.</>,
                link: {
                    href: 'https://reactionrepo.mintlify.app/introduction', // Example link for Reaction Repo
                    label: 'Try it out!'
                },
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/reactionrepo1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/reactionrepo2.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Reactions and Reflections: Writing about Chemistry, Biology, and Beyond',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/Cyalume.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/ironsolutions.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/Grginardmid.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/PresentationMedChem.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/Wittig.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/projects/project-01/labphoto.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };