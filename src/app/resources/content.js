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
    languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I'm a Trent University student majoring in Biochemistry and Molecular Biology. I have a keen interest in Synthetic Organic Chemistry, particularly Carbonyl chemistry. I'm hoping to expand my knowledge into other scientific specialities. I'm also interested in Front-End Development as a hobby.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://www.linkedin.com/in/devbagchi/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
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
        display: true,
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
                        src: '/images/projects/project-01/cover-02.jpg',
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
                images: [ ]
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
                        src: '/images/projects/project-01/cover-01.jpg',
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
        title: 'Relevant Skills',
        skills: [
            {
                title: 'Web Development',
                description: <>HTML | CSS | JavaScript | Typescript | React | Next.js | XMS | XML | Java | Bootstrap | Python | Tailwind CSS | npm</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Web Development',
                description: <>HTML | CSS | JavaScript | Typescript | React | Next.js | XMS | XML | Java | Bootstrap | Python | Tailwind CSS | npm</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
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
    title: 'Writing about Chemistry and Biology...',
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
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/Wittig.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/Wittigcooled.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };