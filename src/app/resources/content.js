import { InlineCode, SmartLink } from "@/once-ui/components";

const person = {
    firstName: 'Devraj',
    lastName:  'Bagchi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Biochemistry and Molecular Biology',
    avatar:    '/images/avatar.jpg',
    location:  'Peterborough, Ontario',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Stay Updated with My Newsletter</>,
    description: <>I'm a Biochemistry student at Trent University, passionate about Medicinal Chemistry. Join me as I share insights, discoveries, and personal reflections on science, technology, and beyond.</>
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
    description: `Academic Portfolio showcasing my work and experiences in ${person.role}`,
    headline: <>Biochemist Seeking New Possibilities</>,
    subline: <>I'm Devraj, a Biochemistry and Molecular Biology Student at <InlineCode>Trent University</InlineCode> deeply passionate about Medicinal and Pharmaceutical Chemistry.</>
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
        description: <>Hi I'm Devraj, a Biochemistry and Molecular Biology Student at Trent University, with a passion in Medicinal Chemistry, specifically, Drug Discovery and Design. My goal is to gain experience in Chemistry and Biology to contribute to the future of Pharmaceuticals. Outside the lab, I enjoy channeling my creativity into front-end development as a fun and rewarding hobby.</>
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
                    <>Awards: Trent Entrance Scholarship 2020-21, Dean's Honour Roll 2020-21 and 2023</>,
                    <>Clubs/Societies: Trent Varsity Fencer (2021-2022)</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
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
                    <>Awards: Honour Roll</>,
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
                    <>Assess and grade student papers and reports, providing constructive feedback to help improve their understanding and performance in the course.</>,
                    <>Supervise students during laboratory sessions, ensuring all experiments are conducted safely and in accordance with established protocols.</>,
                    <>Assist students with questions related to laboratory procedures, course material, and experiment concepts to foster a deeper understanding of the subject matter.</>,

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
                    <>Made quick, decisive calls to ensure the integrity of the game and the safety of all participants.</>,
                    <>Oversaw game dynamics, maintaining control of the pace and resolving disputes efficiently to keep the game running smoothly.</>,
                    <>Participated in ongoing training and development programs to improve knowledge of rules and refine officiating techniques.</>,
                ],
                images: [ ]
            },
            {
                name: 'HMR/Deli Clerk',
                description: <>Loblaws Companies Ltd</>,
                timeframe: 'April 2021 – December 2021',
                achievements: [
                    <>Ensured quality operations by collaborating effectively with team members and utilizing strong communication and listening skills to meet objectives.</>,
                    <>Maintained a safe and compliant work environment by diligently following safety guidelines and workplace protocols.</>,
                    <>Operated and maintained machinery with care and precision, ensuring tasks were completed efficiently and to a high standard.</>,
                ],
                images: []
            }
        ]
    },
        lab: {
            display: true, // set to false to hide this section
            title: 'Skills',
            skills: [
                {
                    title: 'Laboratory Skills',
                    tags: ['TLC', 'FT-IR', '¹H NMR', 'GC-MS','HPLC','IEC','SEC','UV-Vis','SDS Page','Biohazard Handling','Aseptic Techniques','Micropipetting','Reflux','SOP/WI Adherence','Separation','pH Testing','Rotary Evaporation','Buffer Preparation','Bradford Assay','Spot Assay', 'Nessler Assay', 'Dialysis','Filtration'], // Tags for this skill
                    description: <>Two years of lab experience, averaging twelve hours weekly, with expertise in TLC, FT-IR, ¹H NMR, GC-MS, HPLC, IEC, SEC, and UV-Vis spectroscopy. Skilled in aseptic techniques, biohazard handling (E. coli, katG catalase-peroxidase), safety protocols (SOPs/WIs, WHMIS), micropipetting, reflux, separations, rotary evaporation, buffer preparation, filtration, pH testing, SDS-PAGE, various Assays. Additionally, capable of managing physical tasks such as lifting and carrying (45+ pounds).</>,
                    // optional: leave the array empty if you don't want to display images
                },
                {
                    title: 'Computational Chemistry',
                    tags: ['PyMOL', 'ChemDraw'], // Tags for this skill
                    description: <>Experienced in using PyMOL to create detailed molecular presentations and ChemDraw for designing and visualizing chemical structures, utilized extensively in academic work and personal projects such as the ReactionRepo documentation and my<SmartLink href="https://www.devthechemist.com/blog/ganaxolone-anti-seizure-medication" iconSize="xs">Ganaxolone presentation</SmartLink>for CHEM 4110: Medicine and Chemistry.</>,
                    // optional: leave the array empty if you don't want to display images
                    images: [
                        {
                            src: '/images/gallery/PresentationMedChem.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/gallery/old4.png',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/gallery/pymol.png',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/gallery/chemdraww.png',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        }
                    ]
                },
                {
                    title: 'Productivity and Communication Tools Expertise',
                    tags: ['MS Office Suites','Google Workspace','Adobe Acrobat','Zoom','MS Teams','Google Meet'], // Tags for this skill
                    description: <>Highly proficient in MS Office Suite (Word, Excel, PowerPoint, Publisher, Outlook), Google Workspace (Docs, Sheets, Slides, Drive, Calendar), and Adobe Acrobat for efficient document management and collaboration. Experienced with communication platforms such as Zoom, MS Teams, and Google Meet for virtual meetings and team coordination.</>,
                    // optional: leave the array empty if you don't want to display images
                },
                {
                    title: 'Web Development',
                    tags: ['Go', 'HTML', 'XMS', 'XML', 'Tailwind', 'Bootstrap', 'CSS', 'JavaScript', 'Java', 'Python', 'Leaflet', 'JSON', 'TOML', 'YAML', 'Next.js'], // Tags for this skill
                    description: <>Skilled in building and designing websites using technologies like HTML, CSS, JavaScript, Tailwind, Bootstrap, and Python. Experience includes creating my Reaction Repo site and<SmartLink href="https://chemlord.github.io/portotest/" iconSize="xs" >previous iterations of my portfolio</SmartLink>leveraging tools such as Go, Leaflet, and various data formats like JSON, TOML, and YAML.</>,
                    // optional: leave the array empty if you don't want to display images
                    images: [
                        {
                            src: '/images/gallery/oldport.png',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/gallery/oldold.png',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        }
                    ]
                }
            ]
        },
        technical: {
            display: true, // set to false to hide this section
            title: 'Projects',
            skills: [
                {
                    title: 'Reaction Repo',
                    tags: ['Next.js', 'Organic Chemistry', 'Chemical Education', 'Reaction Mechanisms'], // Tags for this skill
                    description: <>Reaction Repo is a comprehensive organic chemistry database aimed at providing free, accessible resources for students, featuring reaction mechanisms, detailed overviews, citations in a documentation format. It addresses the issues of misinformation, high subscription costs, and lack of quality practice material found in existing platforms like ReactionFlash, Master Organic Chemistry, and ChemSteps. All diagrams were made using ChemDraw Ultra 12.0.<SmartLink href="https://reactionrepo.mintlify.app/introduction" iconSize="xs" >Try it out here!</SmartLink></>,
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
                        }
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
            orientation: 'vertical',
            caption: 'Cyalume',
            details: 'Synthesized in Fall 2023',
        },
        { 
            src: '/images/gallery/ironsolutions.jpg', 
            alt: 'image',
            orientation: 'horizontal',
            caption: 'Iron Ion Solutions at Various Concentrations',
            details: 'Colours are dependant on Concentration',
        },
        { 
            src: '/images/gallery/Grginardmid.jpg', 
            alt: 'image',
            orientation: 'vertical',
            caption: 'Grignard Reaction',
            details: 'Performed through Reflux in Fall 2023',
        },
        { 
            src: '/images/gallery/ecoli.png', 
            alt: 'image',
            orientation: 'horizontal',
            caption: 'Cultured E. Coli (1.5g)',
            details: 'Provided by the Trent Department of Chemistry',
        },
        { 
            src: '/images/gallery/Wittig.jpg', 
            alt: 'image',
            orientation: 'vertical',
            caption: 'Wittig Reaction',
            details: 'Performed through Reflux in Fall 2023',
        },
        { 
            src: '/images/projects/project-01/labphoto.png', 
            alt: 'image',
            orientation: 'horizontal',
            caption: 'CHEM 3110 End of Year Lab',
            details: 'Taken in 2024 during my enrollment in CHEM 3110.',
        },
        { 
            src: '/images/gallery/Wittigcooled.jpg', 
            alt: 'image',
            orientation: 'vertical',
            caption: 'Wittig Reaction Post-Crystallization',
            details: 'Cooled in Fall 2023',
        },
        { 
            src: '/images/gallery/IMG_0447.jpeg', 
            alt: 'image',
            orientation: 'horizontal',
            caption: 'Nickel (II) Sulfate Hexahydrate Solutions',
            details: 'Nickel (II) Sulfate Hexahydrate (Left), Deionized Water (Next), Solutions with Ethylene Diamine as Concentrations increasing from 0.3 to 0.9',
        },
        { 
            src: '/images/gallery/IMG_0449.jpeg', 
            alt: 'image',
            orientation: 'vertical',
            caption: 'All Nickel (II) Sulfate Hexahydrate Solutions',
            details: 'All Solutions from 0.3 to 0.9',
        },
        { 
            src: '/images/gallery/liquid2200.png', 
            alt: 'image',
            orientation: 'horizontal',
            caption: 'Nickel (II) Complexes',
            details: 'tris(2,2’-bipyridine)nickel(II) sulfate heptahydrate (Far Left), Hexakis(dimethylsulfoxide)nickel(II) chloride (Left), tris(ethylenediamine)nickel(II) chloride dihydrate (Right) and hexaaminenickel(II) chloride (Far Right) ',
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };