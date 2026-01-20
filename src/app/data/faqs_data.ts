import { FAQs } from "@/app/data/interfaces";

export const hackupc_faqs: FAQs[] = [
  {
    id: 1,
    question: "What is HackUPC?",
    answer: [
      {
        type: "Text",
        content:
          "HackUPC is the first student hackathon in Spain. This will be our eleventh edition with lots of side activities to learn new technologies, meet interesting people and have fun. Come and make history with us!",
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
          "The opening ceremony starts at 7:00 p.m. on Friday, April 24th. We expect to close this year’s edition by 5:00 p.m. on Sunday, April 26th.",
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
          " FIB and ETSETB buildings (A3, A4, A5 and A6) in sunny Barcelona. Expect temperatures from 15ºC to 25ºC!",
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
          "HackUPC is free for all accepted hackers. We will provide you with Wi-Fi, swag, workspaces with power outlets (Type F plug), and meals (including breakfast, lunch, dinner, and snacks during the night). There will be access to the showers in a specific schedule (they will be in the gym so if you don't like shared showers, bring also a swimming suit). For the nights we will have mattresses to relax in the sleep-enabled classrooms (there will not be one mattress per person).",
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
          "You can build any tech-related project. We do not have restrictions over the topic. Some examples are web pages, mobile apps, hardware projects, games, an API... Remember that you can also use a variety of hardware components, from Arduino kits and Raspberry Pi's, to Amazon Echo dots and Myo Arm. Once the event starts you will have the catalogue will all the available hardware on ",
      },
      {
        type: "Link",
        content: "my.hackupc.com",
        link: "https://my.hackupc.com",
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
          "Towel, flip-flops, soap, and if you want also a swimming suit (the showers are shared). We encourage all the hackers to take a shower!",
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
          "Projects will mainly be judged based on technical difficulty, innovation, overall learning experience, and also, on their usability and design by a panel of selected judges from the industry. Check our competition rules on our ",
      },
      {
        type: "Link",
        content: "live page",
        link: "https://live.hackupc.com/",
      },
      {
        type: "Text",
        content: ".",
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
          "Since beta 1.0, we’ve been able to support a range of dietary preferences, including vegan, vegetarian, gluten-free, and any type of allergies. If you have any specific requirements different than allergies, just select vegetarian or reach out to us and we’ll make sure to take care of you!",
      },
    ],
  },
  {
    id: 9,
    question: "Do you have a code of conduct?",
    answer: [
      {
        type: "Text",
        content: "Yes, here they are: Our ",
      },
      {
        type: "Link",
        content: "Code of conduct",
        link: "https://legal.hackersatupc.org/hackupc/code_of_conduct",
      },
      {
        type: "Text",
        content: " and also ",
      },
      {
        type: "Link",
        content: "MLH code of conduct.",
        link: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
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
          "Of course! The quantity varies depending on where you come from. We pay half of the travel costs, with a maximum of €50 for Spaniards outside of Catalonia, up to €120 if you are coming from Europe and up to a range between €120 and €200 if you come from outside Europe. We want to give all of you the opportunity to join us! However, note that not all participants will be eligible to receive travel reimbursement. In the end, we have a limited budget, and we want to help our participants, but we are a student organization and we have limited resources.",
      },
    ],
  },
  {
    id: 11,
    question: "When and how do I request it?",
    answer: [
      {
        type: "Text",
        content: "All the process will happen through ",
      },
      {
        type: "Link",
        content: "my.hackupc.com",
        link: "https://my.hackupc.com",
      },
      {
        type: "Text",
        content:
          ". Once you are accepted to the hackathon, you will need to confirm your spot. At that moment, you will be able to ask for travel reimbursement. Select the option if you want to request it. In case the option doesn't show, that means that we have run out of travel reimbursement. After that, you will need to submit the tickets for your travel expenses, note that we only accept tickets from plane, train, or bus with a minimum total amount of €50.",
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
          "To be eligible for Travel Reimbursement, participants must meet all of the following criteria:",
        options: [
          "<b>Confirmation & Receipts</b>:<br/>• After confirming your spot at HackUPC, you must upload your travel receipts (plane, train, or bus) before the start of the event.<br/>• Receipts must be in your name and include price breakdown, purchase date, and travel dates.",
          "<b>Travel Dates</b>:<br/>• Travel dates must be within one week before or one week after the event, i.e. from April 21st to May 5th (both included).",
          "<b>Reimbursement Amount</b>:<br/>• The reimbursed amount will be the minimum between 50% of your travel expenses and the maximum amount assigned to your destination, determined by the organizing team based on budget and demand.",
          "<b>Project Requirements</b>:<br/>• You must demo a valid project to the HackUPC judges (presenting only to sponsors is not sufficient).<br/>• The project must follow all HackUPC rules.<br/>• Your Devpost username must reasonably resemble your real name.<br/>• The GitHub repository and Devpost completeness will be evaluated (e.g. regular commits, all required Devpost sections).",
          "<b>Attendance</b>:<br/>• You must be able to demonstrate active participation and minimum attendance at the event. Participation in meals, workshops, activities, and other official events may be considered.",
          "<b>Post-Event</b>:<br/>• After the hackathon, you must upload your Devpost link to the platform."
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
          "As long as you graduated a year before the event (April 24th, 2025), or later, you can still be accepted as a hacker. Nevertheless, if that isn't your case, and you don't want to miss HackUPC, you can apply as a mentor!",
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
          "Try to make a difference amongst other hackers, tell us why you want to come to HackUPC, and avoid generating a default answer with an AI, as that will probably void your application, be creative and don't use AI! However, above all, remember to be humble. ",
      },
      {
        type: "Link",
        content: "On our Medium page",
        link: "https://medium.com/@hackupc/the-application-process-44853805521f",
      },
      {
        type: "Text",
        content:
          ", you can find a great post in which are detailed all the steps to make your application even greater. Make sure you check it out!",
      },
    ],
  },
  {
    id: 18,
    question: "When will I be accepted?",
    answer: [
      {
        type: "Text",
        content:
          "All your applications are reviewed one by one, by the organizing team. We will do batches of acceptance once a bunch of them are reviewed, stay tuned to our social media to know when this happens and check your email or ",
      },
      {
        type: "Link",
        content: "MyHackUPC dashboard",
        link: "https://my.hackupc.com",
      },
    ],
  },
  {
    id: 19,
    question: "Why have I not been accepted yet?",
    answer: [
      {
        type: "Text",
        content:
          "As mentioned before, all your applications are reviewed one by one, by the organizing team. Check out your status in ",
      },
      {
        type: "Link",
        content: "MyHackUPC dashboard",
        link: "https://my.hackupc.com",
      },
      {
        type: "Text",
        content: ".<br/><br/>",
      },
      {
        type: "List",
        content: "The status can be:",
        options: [
          "<b>Under review</b>, your application is being reviewed by our team, stay patient and make sure you've done a good application",
          "<b>Action required</b>, there is a problem with your application, please check your email and spam folder, a member of our team may have contacted you",
          "<b>Waitlisted</b>, we are sorry to inform that by now we ran out of spots, but if we have an available spot in the future we will let you know",
          "<b>Expired</b>, email us to see if there is still a spot available for you.",
        ],
      },
    ],
  },
  {
    id: 20,
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
    id: 21,
    question: "What if, in the application, I can not join my friends' team?",
    answer: [
      {
        type: "Text",
        content:
          "If someone in your team has already been accepted you will not be able to join their team. But don’t worry! If you cannot join your friends in the application, it doesn't mean that you can not join them during the event. But remember that the maximum size team is 4 people.",
      },
    ],
  },
];

export const teams_faqs: FAQs[] = [
  {
    id: 22,
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
    id: 23,
    question: "What is the max team size?",
    answer: [
      {
        type: "Text",
        content:
          "If myTeam.size() <= 4, you're good to go.<br/><br/>" +
          "Teams up to 4 members are welcome. Keep in mind that if your team is bigger, you won't be able to participate in any HackUPC competition or challenge, so you should split into multiple teams.",
      },
    ],
  },
  {
    id: 24,
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
