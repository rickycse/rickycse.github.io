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
        points: ['Successfully created an environment to load and transform two-dimensional game assets, with or without user interaction.','Facilitated the process of fetching and loading animations by organizing bulk image folders into specialized folders per animation with the OS module.'],
        tags: ['Python', 'Pygame', 'Sprites', 'Os Module'],
        image: '../media/arcadepygame.jpg',
        color: '#1C658C',
    }, 

    FINTECH: {
        title: 'Fintechify',
        subtitle: 'Banking Application',
        points: ['Demonstrated the ability to fetch currency conversion data from an online finance API', 'Designed a user-friendly, interactive banking application featuring deposits, withdrawals, money conversion, etc.'],
        tags: ['Java', 'OkHttp3', 'Android Widgets', 'Figma'],
        image: '../media/fintechify.png',
        color: '#645CAA',
    },

    DISCORDBOT: {
        title: 'Tabikat Bot',
        subtitle: 'Personal Discord.js Bot',
        points: ['Utilized Discord API and MongoDB documentation to create an interactive message bot.','Implemented user-friendly and convenient commands (grade calculator, reminders, etc).'],
        tags: ['Discord.js', 'JavaScript', 'MongoDB', 'Git', 'Ms Module'],
        image: '../media/discordbot.jpg',
        color: '#357C3C',
    },

    GITPAGES: {
        title: 'Ricky Tran',
        subtitle: 'Personal Portfolio',
        points: ['Developed a simple website resume using HTML, CSS, and JavaScript.', 'Utilized Github Pages to statically host a website.','Implemented Vue Components to simplify the process of adding onto the website'],
        tags: ['HTML', 'JavaScript', 'CSS', 'Vue.js', 'Git Pages'],
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
    }
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