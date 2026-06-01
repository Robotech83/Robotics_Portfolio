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
      "what are your commands",
      "help",
      "commands",
      "abilities",
      "features",
    ],
    response:
      "You can ask me about Sonny OS, my hardware, my vision system, my mission, offline AI, robotics projects, or ask me for a robotics joke.",
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
      "I was created by Keneshia, also known as Robotech83, as part of the Sonny humanoid robotics platform.",
  },
  {
    keywords: [
      "hardware",
      "what hardware do you use",
      "what do you use",
      "parts",
      "raspberry pi",
      "arduino",
    ],
    response:
      "I use Raspberry Pi computers, Arduino Mega boards, cameras, microphones, speakers, PCA9685 servo controllers, and servo motors for movement and interaction.",
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
      "My vision system uses a camera with OpenCV and facial recognition to detect people, recognize familiar faces, and create interaction events.",
  },
  {
    keywords: ["mission", "purpose", "why do you exist"],
    response:
      "My mission is to create robotics that feel alive through offline AI, movement, memory, and interaction.",
  },
  {
    keywords: ["joke", "robotics joke", "tell me a joke"],
    response:
      "Why did the robot go to therapy? Too many unresolved loops.",
  },
  {
    keywords: ["offline", "cloud", "internet", "offline ai"],
    response:
      "I am designed around offline operation whenever possible using local speech recognition, local vision, local memory, and local processing.",
  },
];