import { FAQs } from "@/app/data/interfaces";

export const hackupc_faqs: FAQs[] = [
  {
    id: 1,
    question: "What is HackUPC?",
    answer: [
      {
        type: "Text",
        content:
          "HackUPC is the first student hackathon in Spain. This will be our tenth edition with lots of side activities to learn new technologies, meet interesting people and have fun. Come and make history with us!",
      },
    ],
  },
  {
    id: 2,
    question: "When is HackUPC?",
    answer: [
      {
        type: "Text",
        content:
          "The opening ceremony starts at 7:00 p.m. on Friday, May 3rd. We expect to close this year’s edition by 5:00 p.m. on Sunday, May 5th.",
      },
    ],
  },
  {
    id: 3,
    question: "Where is HackUPC?",
    answer: [
      {
        type: "Text",
        content: "HackUPC will take place in ",
      },
      {
        type: "Link",
        content: "UPC’s North Campus",
        link: "https://maps.app.goo.gl/gswQC6tZYXqQ53aj8",
      },
      {
        type: "Text",
        content:
          " FIB buildings (A3, A4, A5 and A6) in sunny Barcelona. Expect around 25ºC!",
      },
    ],
  },
  {
    id: 4,
    question: "What does HackUPC provide?",
    answer: [
      {
        type: "Text",
        content:
          "HackUPC is free for all accepted hackers. We will provide you with Wi-Fi, swag, workspaces with power outlets (Type F plug), and meals (including breakfast, lunch, dinner, and snacks during the night). There will be access to the showers in a specific schedule and mattresses to relax in the sleep-enabled classrooms (there will not be one mattress per person).",
      },
    ],
  },
  {
    id: 5,
    question: "What can I build?",
    answer: [
      {
        type: "Text",
        content:
          "You can build any tech-related project. We do not have restrictions over the topic. Some examples are web pages, mobile apps, hardware projects, games, an API... Remember that you can also use a variety of hardware components, from Arduino kits and Raspberry Pi's, to Amazon Echo dots and Myo Arm.",
      },
    ],
  },
  {
    id: 6,
    question: "What should I bring?",
    answer: [
      {
        type: "List",
        content: "All attendees must bring the following:",
        options: [
          "Valid government ID for admission",
          "Laptop & charger (Be aware that Spain has Type F plugs, bring an adapter!)",
        ],
      },
      {
        type: "List",
        content: "Other common checklist items include:",
        options: [
          "Sleeping bag",
          "Comfortable clothes",
          "Towel, flip-flops, and soap, we encourage all the hackers to take a shower! </br></br>",
        ],
      },
      {
        type: "Text",
        content:
          "We will send you a more detailed checklist once you’re accepted.",
      },
    ],
  },
  {
    id: 7,
    question: "What are the judging criteria?",
    answer: [
      {
        type: "Text",
        content:
          "Projects will mainly be judged based on technical difficulty, innovation, overall learning experience, and also, on their usability and design by a panel of selected judges from the industry.",
      },
    ],
  },
  {
    id: 8,
    question: "What if I have any dietary restrictions?",
    answer: [
      {
        type: "Text",
        content:
          "Since beta 1.0, we support vegan, vegetarian, gluten-free and any type of allergies. As we always say, we’ve got you covered!",
      },
    ],
  },
  {
    id: 9,
    question: "Do you have a code of conduct?",
    answer: [
      {
        type: "Text",
        content: "Yes, here it is: ",
      },
      {
        type: "Link",
        content: "Code of conduct",
        link: "https://legal.hackersatupc.org/hackupc/code_of_conduct",
      },
      {
        type: "Text",
        content:
          "<br/><br/>TL;DR: Be respectful, harassment and abuse are never tolerated.",
      },
    ],
  },
];

export const travel_faqs: FAQs[] = [
  {
    id: 10,
    question: "Is travel reimbursement available?",
    answer: [
      {
        type: "Text",
        content:
          "Of course! The quantity changes depending on where you come from. We are giving up to €50 for Spaniards outside of Catalonia, €120 if you are coming from Europe and up to €200 if you come from outside Europe. We want to give all of you the opportunity to join us! However, you must remember that not all participants will be eligible to receive travel reimbursement. In the end, we have a limited budget, and we want to help our participants, but we are a student organization and we have limited resources.",
      },
    ],
  },
  {
    id: 11,
    question: "When and how do I request it?",
    answer: [
      {
        type: "Text",
        content:
          "Once you are accepted to the hackathon, you will need to confirm your spot, and at that moment you will be able to ask for travel reimbursement. Select the option if you want to request it. In case the option doesn't show, that means that we have run out of travel reimbursement. You will then introduce your travel cost, but take in account the receiving amount can change depending on the budget we have left.",
      },
    ],
  },
  {
    id: 12,
    question: "Travel reimbursement conditions and steps",
    answer: [
      {
        type: "Enumeration",
        content:
          "To be able to receive Travel Reimbursement money, you need to match the following criteria:",
        options: [
          "Upload your tickets before 19th April to our platform (we only accept flight, bus, or train tickets) alongside your PayPal account (we only pay this way).",
          "The arrival tickets should be after April 26th and the departure tickets should be prior to May 10th.",
          "In the hackathon, it’s mandatory to demo your project to HackUPC judges, presenting only to sponsors will not be considered valid.",
          "The project should follow all the HackUPC rules.",
          "After the hackathon, upload your Devpost link to our platform.",
        ],
      },
    ],
  },
  {
    id: 13,
    question: "When do I get the money?",
    answer: [
      {
        type: "Text",
        content:
          "If you have followed the steps correctly, you may receive the money in your PayPal account around 2 months after HackUPC. We are sorry for the delay, but it takes time to check everything.",
      },
    ],
  },
];

export const applications_faqs: FAQs[] = [
  {
    id: 14,
    question: "Who can attend?",
    answer: [
      {
        type: "Text",
        content:
          "Students from all around the world who are at least 14 years old at the time of the event can apply. You can be in the university, vocational training, high school, etc. For participants under 18, we will request a letter of approval signed by parents or a legal guardian to attend.",
      },
    ],
  },
  {
    id: 15,
    question: "What if I am not a student?",
    answer: [
      {
        type: "Text",
        content:
          "As long as you graduated a year before the event, or later, you can still be accepted as a hacker. Nevertheless, if that isn't your case, and you don't want to miss HackUPC, you can apply as a mentor!",
      },
    ],
  },
  {
    id: 16,
    question: "What if I don't have coding experience?",
    answer: [
      {
        type: "Text",
        content:
          "It's completely fine! We would love to receive your application! In fact, you come here to learn, so you don't need any previous experience.",
      },
    ],
  },
  {
    id: 17,
    question: "How to make a good application?",
    answer: [
      {
        type: "Text",
        content:
          "Try to make a difference amongst other hackers, be creative! However, above all, remember to be humble. ",
      },
      {
        type: "Link",
        content: "On our Medium page, you can find a great post ",
        link: "https://medium.com/@hackupc/the-application-process-44853805521f",
      },
      {
        type: "Text",
        content:
          "in which are detailed all the steps to make your application even greater. Make sure you check it out!",
      },
    ],
  },
  {
    id: 19,
    question: "How does applying in teams work?",
    answer: [
      {
        type: "Text",
        content:
          "When you apply, you can create or join a team. Remember that you're able to change your decision up until you, or someone in your team, is accepted. Once the team has one acceptance, you can not change the members.<br/><br/>" +
          "When more than 50% of the team members are accepted, the remaining ones are automatically accepted.<br/><br/>" +
          "Note that teams created in the registration are not definitive, so you can change your team during the hackathon.<br/><br/>",
      },
    ],
  },
  {
    id: 20,
    question: "What if, in the application, I can not join my friends' team?",
    answer: [
      {
        type: "Text",
        content:
          "Don’t worry! If you cannot join your friends in the application, it doesn't mean that you can not join them during the event. But remember that the maximum size team is 4 people.",
      },
    ],
  },
];

export const teams_faqs: FAQs[] = [
  {
    id: 21,
    question: "What if I don't have a team?",
    answer: [
      {
        type: "Text",
        content:
          "No need to worry! Part of the fun of a hackathon is meeting new people. We will have a team building activity at the beginning of the event for everyone to meet and form teams.",
      },
    ],
  },
  {
    id: 22,
    question: "What is the max team size?",
    answer: [
      {
        type: "Text",
        content:
          "If myTeam.length <= 4, you're good to go.<br/><br/>" +
          "Teams up to 4 members are welcome. Keep in mind that if your team is bigger, you won't be able to participate in any HackUPC competition or challenge, so you should split into multiple teams.",
      },
    ],
  },
  {
    id: 23,
    question: "Can I change my team during the hackathon? How?",
    answer: [
      {
        type: "Text",
        content:
          "Yes, in fact, we encourage you to team up with hackers you meet there. You'll meet awesome people!<br/><br/>" +
          "To change your team, you don’t have to notify us, just adjust your team members in the final project submission.",
      },
    ],
  },
];
