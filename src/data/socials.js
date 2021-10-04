import uniqueId from "lodash.uniqueid";

const data = [
  {
    id: uniqueId("social-"),
    name: "Instagram",
    url: "https://yao.earth/instagram",
    icon: "fab fa-instagram",
  },
  {
    id: uniqueId("social-"),
    name: "Twitter",
    url: "https://yao.earth/twitter",
    icon: "fab fa-twitter",
  },
  {
    id: uniqueId("social-"),
    name: "Github",
    url: "https://yao.earth/github",
    icon: "fab fa-github",
  },
  {
    id: uniqueId("social-"),
    name: "Linkedin",
    url: "https://yao.earth/linkedin",
    icon: "fab fa-linkedin",
  },
  {
    id: uniqueId("social-"),
    name: "Email",
    url: "mailto:yao@ywk.ch",
    icon: "fas fa-envelope",
    isEmail: true
  },
  
];
export default data;
