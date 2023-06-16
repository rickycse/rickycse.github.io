Vue.component('leftblock',{
    props: ['title', 'subtitle'],
    data: function() {
        return {
            text: text[this.title]
        }
    },

    template: 
    `<div class="items">
        <div class="image-container">
            <img class="img" v-bind:src="text.image">
        </div>
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

Vue.component('rightblock',{
    props: ['title', 'subtitle'],
    data: function() {
        return {
            text: text[this.title]
        }
    },

    template: 
    `<div class="items">
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
        <div class="image-container">
            <img class="img" v-bind:src="text.image">
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
        tags: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'MySQL', 'React.js', 'Node.js', 'Express.js', 'Git', 'Jira'],
        color: '#565C5B'
    }
}

const text = {
    YORK: {
        title: 'York University',
        subtitle: 'Hons. B.Sc Computer Science Student (Co-op)',
        points: ['CGPA: 3.3 / 4.0', 'Notable Courses: Advanced Object-Oriented Programming, Fundamentals of Data Structures, Programming for Mobile Computing, Discrete Mathematics, Introduction to Computer Science and Programming.'],
        image: '../media/lassondeschool.jpg',
    },
    // WORK EXPERIENCE
    MR901: {
        title: 'Software Engineer Intern',
        subtitle: 'MyRide901',
        points: ['Developing automated regression test cases using Selenium WebDriver', 'Collaborating with the development team and QA engineers to resolve bugs in the APK using Java.', 'Configuring event tracking and custom dimensions in Google Analytics to capture user interactions and behavior and improve data accuracy by resolving tracking discrepancies.'],
        tags: ['PHP', 'Laravel', 'Selenium', 'Firebase', 'Google Analytics', 'Android APK', 'Java', 'Git', 'Jira'],
        color: "#313552",
        image: '../media/myride901.png',
    },

    GDSC: {
        title: 'Google Developers Student Club',
        subtitle: 'Technical Lead',
        points: ['Acting as a trusted mentor for over 1000+ community members, sharing knowledge and expertise on projects involving Python, SQL, Git, and more to help members reach their technical goals.', 'Collaborating with other clubs and organizations to host relevant workshops and activities for the club'],
        tags: ['Python', 'Selenium', 'Java', 'Git', 'JavaScript', 'React.js'],
        color: "#0F0E0E",
        image: '../media/gdsc.png',
    },

    CSHUB: {
        title: 'Computing Students Hub',
        subtitle: 'Front-End Developer',
        points: ['Collaborated with back-end teams to develop a web application for over 1500+ community members using React.js, and MaterialUI.','Created and reviewed technical design documents for the clubs’ web applications using Figma to ensure its robustness, reliability, and, scalability.'],
        tags: ['React.js', 'MaterialUI', 'JavaScript', 'Git', 'Jira'],
        color: '#B33030',
        image: '../media/cshub.png',
    },

    YORKUIT: {
        title: 'York UIT Client Services',
        subtitle: 'Computing Support Assistant',
        points: ['Providing technical support and troubleshooting for internal and external customers via phone, email, and ticketing system, ensuring timely and effective resolution of technical issues and customer satisfaction.', 'Staying abreast of industry technical and business trends to provide clients with the utmost support.'],
        image: '../media/yorkuit.png',
    },

    // PROJECTS
    PYGAME: {
        title: 'Jellyfish Blaster',
        subtitle: 'Animated Python Game',
        points: ['Developed a fast-paced platformer game using PyGame and Asprites to challenge the users hand-eye coordination', 'Efficiently sorted asprite frames into different directories for efficient reading using the OS Module.'],
        tags: ['Python', 'Pygame', 'Sprites', 'Os Module'],
        image: '../media/arcadepygame.jpg',
        color: '#1C658C',
    }, 

    FINTECH: {
        title: 'Fintechify',
        subtitle: 'Banking Android App',
        points: ['Led a team of 3 other members to develop a mobile banking app that lets users deposit, withdraw, calculate taxes, and so on using Java, OkHttp3, and Android Studio.', 'Created and reviewed technical design documents on Figma for coherent designs and facilitated meetings to design, troubleshoot, and execute the project in Java.'],
        tags: ['Java', 'OkHttp3', 'Android Widgets', 'Figma'],
        image: '../media/fintechify.png',
        color: '#645CAA',
    },

    DISCORDBOT: {
        title: 'Grade Reports Bot',
        subtitle: 'Academia Discord Bot',
        points: ['Developed a Discord Bot with Node.js to make degree progress reports more accessible for the user.', 'Integrated MongoDB to stockpile and query through user data such as added courses, assignments, marks, and more to calculate and send up-to-date progress reports.'],
        tags: ['Discord.js', 'JavaScript', 'MongoDB', 'Mongoose', 'Git'],
        image: '../media/discordbot.jpg',
        color: '#42855B',
    },

    GITPAGES: {
        title: 'Ricky Tran',
        subtitle: 'Personal Portfolio',
        points: ['Investigated, learned and applied new technologies/processes such as Vue.js to the portfolio.', 'Prototyped the websites design on Figma to ensure its responsiveness, look, and feel across devices encourage visitors to explore more.'],
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

    CODEBOT: {
        title: 'Code Compiler Bot',
        subtitle: 'More Advanced Personalized Bot',
        points: ["Developing a Discord Bot that uses JDoodle's Compiler RESTful API to enable users to compile and execute code on Discord using simple commands.", 'Integrating MySQL Database to store user data and help make course progress reports and averages more accessible through commands.'],
        tags: ['Discord.py', 'RESTFUL API', 'Requests', 'MySQL', 'SQL', 'Python'],
        image: '../media/mysql.png',
        color: '#CC9B14',
    },

    ACCOUNTSYS: {
        title: 'MySQL Accounts System',
        subtitle: 'SQL Practice Project',
        points: ['Developed an account system using MySQL database to uniquely store case-sensitive usernames and passwords.', 'Implemented login and sign up functionality to allow users to view, access and edit the account system via utilizing admin privileges, creating accounts, or logging into existing accounts.'],
        tags: ['Python', 'MySQL', 'MySQL-Connector'],
        image: '../media/mysql.png',
        color: '#CC9B14',
    },

    POKEDEX: {
        title: 'Pokemon Search Engine',
        subtitle: 'React Project',
        points: ['Developed a web application using React to search and filter Pokemon by names and types.', 'Integrated REST Poke API to fetch and display data about Pokemon, and created reusable components for the data using React across mobile devices.'],
        tags: ['React.js', 'JavaScript', 'REST API', 'TailwindCSS'],
        image: '../media/pokedex.jpg',
        color: '#645CAA',
    },

    LOGIN: {
        title: 'Login System',
        subtitle: 'MERN Stack Project',
        points: ['Developed a login system using React and TailwindCSS with login, sign up, and reset password features.', 'Leveraged Express.js to create routing for endpoints, handled HTTP status codes, and error handling, with MongoDB in the back end server side.'],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TailwindCSS', 'Axios'],
        image: '../media/login.png',
        color: '#42855B',
    },
}

const TAGS = new Vue({el: '#TLDR-TAGS'});

const LASSONDE = new Vue({el: '#LASSONDE'});
const GDSC = new Vue({el: '#GDSC'});
const CSHUB = new Vue({el: '#CSHUB'});
const YORKUIT = new Vue({el: '#YORKUIT'});
const PYGAME = new Vue({el: '#PYGAME'});
const FINTECH = new Vue({el: '#FINTECH'});
const DISCORD = new Vue({el: '#DISCORD'});
const GITPAGES = new Vue({el: '#GITPAGES'});
const ARDUINO = new Vue({el: '#ARDUINO'});
const CODEBOT = new Vue({el: '#CODEBOT'});
const POKEDEX = new Vue({el: '#POKEDEX'});
const LOGIN = new Vue({el: '#LOGIN'});

const MR901 = new Vue({el: '#MR901'});