Vue.component('block',{
    props: ['title', 'subtitle'],
    data: function() {
        return {
            text: text[this.title]
        }
    },

    template: 
    `<div class="items">
        <img class="img" v-bind:src="text.image">
        <div class="text-container"> 
            <div class="item-title">{{text.title}}</div>
            <div class="item-subtitle">{{text.subtitle}}</div>
            <ul class="item-body">
                <li v-for="point in text.points">{{point}}</li>
            </ul>
            <ul class="item-tags">
                <li v-for="tag in text.tags" :style="{ 'backgroundColor': text.color}">{{tag}}</li>
            </ul>
        </div>
    </div>
    `
});

Vue.component('tags',{
    props: ['title'],
    data: function() {
        return {
            tags: tags[this.title]
        }
    },

    template: 
    `
    <ul class="home-tags">
        <li v-for="tag in tags.tags">{{tag}}</li>
    </ul>
    `
});

const tags = {
    TLDR: {
        tags: ['Python', 'Java', 'JavaScript', 'Typescript', 'React', 'MongoDB', 'MySQL', 'Node.js', 'Express.js', 'Backstage', 'Flask'],
        color: '#565C5B'
    }
}

const text = {
    YORK: {
        title: 'York University',
        subtitle: 'Hons. B.Sc Computer Science Student (Co-op)',
        points: ['CGPA: 3.3 / 4.0', 'Related Courses: Advanced Object-Oriented Programming, Fundamentals of Data Structures, Programming for Mobile Computing, Discrete Mathematics, Introduction to Computer Science and Programming.'],
        image: '../media/lassondeschool.jpg',
    },
    // WORK EXPERIENCE
    RBC: {
        title: 'Software Engineer Intern',
        subtitle: 'RBC',
        points: [
            "Scaled backend services for internal RBC platforms with Python and Flask to support 10,000+ new users and business units while enforcing role-based access controls.",
            "Developed onboarding tools for 10+ departments and new business units to adhere to new enterprise-wide security standards and architecture using React.ts, Backstage, and Flask.",
            "Automated AI tool adoption to enable faster access to AI-powered coding assistants and security scanners, improving developer productivity by 4–8x using SpringBoot and React.ts."
        ],
        tags: ['Flask', 'React', 'Typescript', 'Backstage', 'Express.js', 'Springboot', 'Python'],
        color: "#3399FF",
        image: '../media/rbc-logo.jpg',
    },
    TD: {
        title: 'Data Engineer Intern',
        subtitle: 'TD Bank',
        points: [
            "Developed machine learning models for test case prioritization, removing redundant test cases and speeding up the software testing process by 31% using Python and Scikit-learn.",
            "Implemented data pipelines to transfer and classify test case data into our predictive models, reducing manual effort from 80 hours to 4 hours using Python, Pandas, and NumPy.", 
            "Assisted with migrations from SOATest to REST Assured using Java to enhance test case generation and accuracy"
        ],
        tags: ['Python', 'Numpy', 'Scikit-learn', 'Pandas', 'Jupyter', 'Selenium', 'JSQL'],
        color: "#009900",
        image: '../media/td-logo.jpg',
    },
    MR901: {
        title: 'Software Engineer Intern',
        subtitle: 'MyRide901',
        points: [
            "Developed Android app features (Vehicle Details and Maintenance Timeline) using Dart, resulting in a 45% boost in user engagement, insights, and session durations.",
            "Integrated CORS and rate-limiting functionality to backend APIs using PHP and Laravel to ensure secure, controlled access and prevent spam from third-party attacks.",
            "Led and integrated Google AdMob advertisements in Dart, enhancing revenue through improved ad engagement."
        ],
        tags: ['Python', 'AWS', 'Dart', 'PHP', 'Laravel', 'Android', 'Appium'],
        color: "#313552",
        image: '../media/myride901.png',
    },

    GDSC: {
        title: 'Google Developers Student Club',
        subtitle: 'Technical Lead',
        points: [
            'Acting as a trusted mentor for over 2000+ community members, sharing expertise on projects involving Java and Python to help members reach their technical goals.', 
            'Collaborating with other clubs and organizations to host relevant workshops and activities for the club'
        ],
        tags: ['Python', 'Java', 'JavaScript', 'React.js'],
        color: "#000",
        image: '../media/gdsc.png',
    },

    CSHUB: {
        title: 'Computing Students Hub',
        subtitle: 'Front-End Developer',
        points: ['Collaborated with back-end developers to create an online merch store for 1500+ community members using React.js, JavaScript, and MaterialUI, resulting in increased club memberships and funds.', 'Designed an interactive prototype of the website using Figma and modeled reusable React.js components.'],
        tags: ['React.js', 'MaterialUI', 'JavaScript', 'Git', 'Jira'],
        color: '#B33030',
        image: '../media/cshub.png',
    },

    // COMPETITIONS 
    HTN: {
        title: 'Hack The North 2023',
        subtitle: 'Piktocache',
        points: [
            'Leveraged React.js and Firebase to create a chatroom for users with shared IP addresses.', 
            'Utilized Firebase Auth to enable Google sign-in and added security rules to prevent chat vulnerabilities.',
            'Implemented drawing canvases and image sharing using JavaScript and HTML/CSS.'
        ],
        tags: ['React.js', 'MaterialUI', 'JavaScript', 'Git', 'Jira'],
        color: '#645CAA',
        image: '../media/htn.jpg',
    },
    HTV: {
        title: 'Hack The Valley 2023',
        subtitle: 'Moodify',
        points: [
            'Developed a web application that analyzes a user’s Spotify playlist and recommends songs based on their specified moods using React.js, Typescript, and HTML/CSS.', 
            'Implemented backend systems using Express.js and Node.js to retrieve songs from the Spotify API.',
            'Trained the Cohere API to map song lyrics to emotions and used Flask to return emotion-aligned songs.'
        ],
        tags: ['React.js', 'MaterialUI', 'JavaScript', 'Git', 'Jira'],
        color: '#42855B',
        image: '../media/htv.png',
    },

    // PROJECTS
    PREMAILS: {
        title: 'Proper Email Rejections',
        subtitle: 'Chrome Extension',
        points: ["Created a chrome extension that rewrites boring job rejection emails to harsh, but funny and motivating messages.",
            "Implemented a backend service for the extension to hide secret API keys and added rate limits to prevent spam attacks"],
        tags: ['Python', 'React', 'Typescript', 'Flask', 'Cohere API', 'TailwindCSS'],
        image: '../media/restful.png',
        color: '#645CAA',
    },
    FINTECH: {
        title: 'Fintechify',
        subtitle: 'Banking Android App',
        points: ['Collaborated with 3 other students to develop a mobile banking application using Java with features such as money depositing, withdrawal, and e-transferring.', 'Designed wireframes using Figma to ensure a comprehensive and responsive user interface.'],
        tags: ['Java', 'OkHttp3', 'Android', 'Figma'],
        image: '../media/fintechify.png',
        color: '#645CAA',
    },

    DISCORDBOT: {
        title: 'Grade Reports Bot',
        subtitle: 'Academia Discord Bot',
        points: ['Created a Discord Bot using Node.js to send progress reports containing the users course average and necessary grades to achieve their academic goals.', 'Integrated MongoDB to store and retrieve the users enrolled courses, assignments, and grades.'],
        tags: ['Discord.js', 'JavaScript', 'MongoDB', 'Mongoose', 'Git'],
        image: '../media/discordbot.jpg',
        color: '#42855B',
    },

    GITPAGES: {
        title: 'Ricky Tran',
        subtitle: 'Personal Portfolio',
        points: ['Created and prototyped designs on Figma to ensure the portfolio’s responsiveness, look, and feel across devices encourage visitors to explore more.', 'Leveraged Vue.js to create reusable web components, reducing code repetition and ensuring readability.'],
        tags: ['HTML', 'JavaScript', 'CSS', 'Vue.js 2.0', 'Git Pages'],
        image: '../media/webfolio.jpg',
        color: '#B33030',
    },

    ARDUINO: {
        title: 'Arduino Uno',
        subtitle: 'Sound Activated LEDs',
        points: ['Built a sound-activated LED strip using the Arduino IDE and language.', 'Utilized MOSFETs to control LEDs and prevent overvoltage to the Arduino Board.'],
        tags: ['C++','Arduino Uno', 'IRLZ44N', 'KY-037 Sound Sensor'],
        image: '../media/arduino.png',
        color: '#1C658C',
    },

    POKEDEX: {
        title: 'Pokemon Search Engine',
        subtitle: 'React Project',
        points: ['Leveraged React.js and TailwindCSS to create a Pokemon Search Engine with searching and sorting features by Pokemon names and types.', 'Utilized PokeAPI to retrieve data for 800+ different types of Pokemon and created reusable cards to display Pokemon names, types, and images across multiple devices.'],
        tags: ['React.js', 'JavaScript', 'REST API', 'TailwindCSS'],
        image: '../media/pokedex.jpg',
        color: '#645CAA',
    },

    LOGIN: {
        title: 'Login System',
        subtitle: 'MERN Stack Project',
        points: ['Developed a Login System using React.js and TailwindCSS with features such as login, register, and reset password with emailed OPT codes and JWT password encryption.', 'Implemented RESTful API endpoints using Express.js for user authentication and password hashing, and utilized MongoDB to store user credentials, ensuring data integrity and scalability.'],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TailwindCSS', 'Axios'],
        image: '../media/login.png',
        color: '#42855B',
    },
}

// Home
const TAGS = new Vue({el: '#TLDR-TAGS'});

// Education
const LASSONDE = new Vue({el: '#LASSONDE'});

// Experience
const RBC = new Vue({el: '#RBC'});
const TD = new Vue({el: '#TD'});
const MR901 = new Vue({el: '#MR901'});
const GDSC = new Vue({el: '#GDSC'});
const CSHUB = new Vue({el: '#CSHUB'});

// Competitions
const HTN = new Vue({el: '#HTN'});
const HTV = new Vue({el: '#HTV'});

// Projects
const PREMAILS = new Vue({el: '#PREMAILS'});
const FINTECH = new Vue({el: '#FINTECH'});
const DISCORD = new Vue({el: '#DISCORD'});
const GITPAGES = new Vue({el: '#GITPAGES'});
const POKEDEX = new Vue({el: '#POKEDEX'});
const LOGIN = new Vue({el: '#LOGIN'});