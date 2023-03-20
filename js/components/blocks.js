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
        tags: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'MongoDB', 'MySQL', 'React.js', 'Vue.js', 'Git', 'Material UI'],
        color: '#565C5B'
    }
}

const text = {
    YORK: {
        title: 'York University',
        subtitle: 'Hons. B.Sc Computer Science Student',
        points: ['CGPA: 3.45 / 4.0', 'Notable Courses: Advanced Object-Oriented Programming, Fundamentals of Data Structures, Programming for Mobile Computing, Discrete Mathematics, Introduction to Computer Science and Programming.'],
        image: '../media/lassondeschool.jpg',
    },

    GDSC: {
        title: 'Google Developers Student Club',
        subtitle: 'Technical Lead',
        points: ['Providing technical support to community members during and after workshop events, ensuring their satisfaction and facilitating a smooth and productive experience.','Leading workshop plannings in collaboration with other Leads and arranging all necessary requirements to enable successful delivery of the workshop, resulting in a diverse range of valuable learning experiences for members.'],
        image: '../media/gdsc.png',
    },

    CSHUB: {
        title: 'Computing Students Hub',
        subtitle: 'Front-End Developer',
        points: ['Collaborating with other team members to produce a webstore application using React.js and MaterialUI, giving users an up-to-date and user-friendly experience.','Participating in weekly meetings with the Club President, Technical Directors and development team to review code, design documents, and initialize weekly priorities to stay on task.'],
        tags: ['React.js', 'MaterialUI', 'JavaScript', 'Jira', 'CSS'],
        color: '#B33030',
        image: '../media/cshub.png',
    },

    YORKUIT: {
        title: 'York UIT Client Services',
        subtitle: 'Computing Support Assistant',
        points: ['Providing technical support and troubleshooting for internal and external customers via phone, email, and ticketing system, ensuring timely and effective resolution of technical issues and customer satisfaction.', 'Staying abreast of industry technical and business trends to provide clients with the utmost support.'],
        image: '../media/yorkuit.png',
    },

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
        subtitle: 'Banking Application',
        points: ['Led a team of 3 other members to develop a mobile banking app that lets users deposit, withdraw, calculate taxes, and so on using Java, OkHttp3, and Android Studio.', 'Created and reviewed technical design documents on Figma for coherent designs and facilitated meetings to design, troubleshoot, and execute the project in Java.'],
        tags: ['Java', 'OkHttp3', 'Android Widgets', 'Figma'],
        image: '../media/fintechify.png',
        color: '#645CAA',
    },

    DISCORDBOT: {
        title: 'Progress Reports Bot',
        subtitle: 'Personal Discord.js Bot',
        points: ['Developed a Discord Bot with Node.js to make degree progress reports more accessible for the user.', 'Integrated MongoDB to stockpile and query through user data such as added courses, assignments, marks, and more to calculate and send up-to-date progress reports.'],
        tags: ['Discord.js', 'JavaScript', 'MongoDB', 'Mongoose', 'Git'],
        image: '../media/discordbot.jpg',
        color: '#357C3C',
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
        image: '../media/restful.png',
        color: '#645CAA',
    },

    ACCOUNTSYS: {
        title: 'MySQL Accounts System',
        subtitle: 'SQL Practice Project',
        points: ['Developed an account system using MySQL database to uniquely store case-sensitive usernames and passwords.', 'Implemented login and sign up functionality to allow users to view, access and edit the account system via utilizing admin privileges, creating accounts, or logging into existing accounts.'],
        tags: ['Python', 'MySQL', 'MySQL-Connector'],
        image: '../media/mysql.png',
        color: '#CC9B14',
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
const ACCOUNTSYS = new Vue({el: '#ACCOUNTSYS'});