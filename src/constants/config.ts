type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Shubham Sinha — 3D Portfolio",
    fullName: "Shubham Sinha",
    email: "shubhamsinha.ss1302@gmail.com",
  },
  hero: {
    name: "Shubham Sinha",
    p: ["I develop web sites, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a software developer with experience in HTML,CSS and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and always eager to collaborate with others
      to create efficient, scalable, and user-friendly solutions that solve
      real-world problems.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following are the projects that showcases my skills and experience through
    examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It provides a clear picture 
    of my learning journey.`,
    },
  },
};
