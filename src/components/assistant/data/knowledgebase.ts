export type KnowledgeItem = {
  keywords: string[];
  response: string;
};

export const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: [
      "what can you do", 
      "what can i do", 
      "what do you do", 
      "help", 
      "commands", 
      "abilities", 
      "features", 
      "what are your commands"
    ],
    response:
      "I can answer questions about Sonny OS, tell you jokes, and provide information about Sonny's capabilities. Try asking me about Sonny OS or who created me!",
    },
  {
    keywords: [
      "sonny os",
      "tell me about sonny",
      "what is sonny",
      "about sonny",
    ],
    response:
      "Sonny OS is an offline humanoid robotics platform built with Raspberry Pi, Arduino, computer vision, local memory systems, voice interaction, and servo control.",
  },

  {
    keywords: [
      "who created you",
      "creator",
      "made you",
      "built you",
      "keneshia",
      "robotech83",
    ],
    response:
      "I was created by Keneshia, also known as Robotech83, as part a self-built offline humanoid robotics platform called Sonny OS.",
  },

  {
    keywords: [
      "hardware",
      "what hardware do Sonny use",
      "parts",
      "raspberry pi",
      "arduino",
    ],
    response:
      "Sonny uses Raspberry Pi computers, Arduino Mega boards, cameras, microphones, speakers, PCA9685 servo controllers, and servo motors for movement and interaction.",
  },

  {
    keywords: [
      "vision",
      "face recognition",
      "camera",
      "opencv",
      "how do you see",
      "how does your vision work",
    ],
    response:
      "Sonny's vision system uses a camera with OpenCV and facial recognition to detect people, recognize familiar faces, and create interaction events.",
  },

  { 
    keywords: [ 
      "current status", 
      "development", 
      "build status", 
      "progress" 
    ], 
    response: 
    "Sonny OS is currently an active development project focused on offline voice systems, vision systems, movement, memory, and humanoid interaction." 
},

  {
    keywords: [
      "mission", 
      "purpose", 
      "why do you exist"
    ],
    response:
      "The goal of Sonny OS is to create a robotics that feel alive through offline AI, movement, memory, and human interaction, while respecting privacy and operating without reliance on cloud services.",
  },

  {
    keywords: [
      "joke", 
      "robotics joke", 
      "tell me a joke"
    ],
    response:
      "Why did the robot go to therapy? Too many unresolved loops.",
  },

  { keywords: [
     "movement", 
     "motion", 
     "servos" 
    ], 
    response: 
    "Sonny uses servo systems controlled through Arduino and Raspberry Pi systems to create movement, facial motion, and future humanoid behaviors." 

  },

  {
    keywords: [
      "offline", 
      "cloud", 
      "internet", 
      "offline ai"
    ],
    response:
      "Sonny is designed around offline operation whenever possible using local speech recognition, local vision, local memory, and local processing.",
  },
];