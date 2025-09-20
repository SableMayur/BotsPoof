 //export const Message = (_req,_res)=>{
    console.log("Message Controller called")
//}


import User from "../models/user.model.js";
import Bot from "../models/bot.model.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;
    console.log(text);

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    // Save user message
    const user = await User.create({
      sender: "user",
      text,
    });

    // Bot responses
    const botResponses = {
      "hi": "Hello! How can I help you today?",
      "hello": "Hi there! What’s up?",
      "how are you": "I’m doing great, thanks for asking! How about you?",
      "what is your name": "I’m your chatbot assistant.",
      "who created you": "I was created by developers to help answer your questions.",
      "what is ai": "AI stands for Artificial Intelligence, which means simulating human intelligence in machines.",
      "what is machine learning": "Machine Learning is a subset of AI where systems learn patterns from data.",
      "what is deep learning": "Deep Learning is a type of machine learning based on neural networks with many layers.",
      "what is python": "Python is a popular programming language known for its simplicity and versatility.",
      "what is java": "Java is a programming language widely used for building applications.",
      "what is c++": "C++ is a general-purpose programming language used for system and application development.",
      "what is html": "HTML stands for HyperText Markup Language, used to structure web pages.",
      "what is css": "CSS stands for Cascading Style Sheets, used for styling web pages.",
      "what is javascript": "JavaScript is a scripting language used to make web pages interactive.",
      "what is react": "React is a JavaScript library for building user interfaces.",
      "what is node js": "Node.js is a runtime that allows JavaScript to run on the server.",
      "what is mongodb": "MongoDB is a NoSQL database that stores data in JSON-like format.",
      "what is sql": "SQL stands for Structured Query Language, used for managing relational databases.",
      "what is cloud computing": "Cloud computing delivers services like storage and computing power over the internet.",
      "what is iot": "IoT stands for Internet of Things, which connects physical devices to the internet.",
      "what is blockchain": "Blockchain is a decentralized digital ledger used to record transactions securely.",
      "who is the president of usa": "As of 2025, the President of the United States is Joe Biden.",
      "who is the prime minister of india": "The current Prime Minister of India is Narendra Modi.",
      "what is the capital of india": "The capital of India is New Delhi.",
      "what is the capital of usa": "The capital of the USA is Washington, D.C.",
      "what is the capital of uk": "The capital of the United Kingdom is London.",
      "what is the capital of japan": "The capital of Japan is Tokyo.",
      "what is the capital of france": "The capital of France is Paris.",
      "what is the capital of germany": "The capital of Germany is Berlin.",
      "what is the capital of australia": "The capital of Australia is Canberra.",
      "what is the capital of canada": "The capital of Canada is Ottawa.",
      "who invented electricity": "Benjamin Franklin is credited with discoveries about electricity.",
      "who invented the light bulb": "Thomas Edison invented the practical electric light bulb.",
      "who invented the telephone": "Alexander Graham Bell invented the telephone.",
      "who invented the airplane": "The Wright brothers invented the first successful airplane.",
      "who invented the computer": "Charles Babbage is known as the father of the computer.",
      "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
      "what is the speed of sound": "The speed of sound is about 343 meters per second in air.",
      "what is water made of": "Water is made of two hydrogen atoms and one oxygen atom (H2O).",
      "what is the chemical symbol of gold": "The chemical symbol of gold is Au.",
      "what is the chemical symbol of silver": "The chemical symbol of silver is Ag.",
      "what is the chemical symbol of iron": "The chemical symbol of iron is Fe.",
      "what is the chemical symbol of oxygen": "The chemical symbol of oxygen is O.",
      "what is the chemical symbol of hydrogen": "The chemical symbol of hydrogen is H.",
      "what is the largest country in the world": "The largest country in the world by area is Russia.",
      "what is the smallest country in the world": "The smallest country in the world is Vatican City.",
      "what is the largest ocean": "The largest ocean is the Pacific Ocean.",
      "what is the smallest ocean": "The smallest ocean is the Arctic Ocean.",
      "what is the highest mountain in the world": "The highest mountain in the world is Mount Everest.",
      "what is the longest river in the world": "The Nile is often considered the longest river, though some consider the Amazon longer.",
      "what is the largest desert in the world": "The largest desert in the world is the Sahara Desert.",
      "what is the national animal of india": "The national animal of India is the Bengal Tiger.",
      "what is the national bird of india": "The national bird of India is the Peacock.",
      "what is the national flower of india": "The national flower of India is the Lotus.",
      "what is the national fruit of india": "The national fruit of India is the Mango.",
      "what is the national game of india": "The national game of India is Hockey.",
      "what is the national anthem of india": "The national anthem of India is Jana Gana Mana.",
      "what is the national song of india": "The national song of India is Vande Mataram.",
      "how many continents are there": "There are 7 continents in the world.",
      "how many oceans are there": "There are 5 oceans in the world.",
      "how many planets are there": "There are 8 planets in our solar system.",
      "which planet is known as the red planet": "Mars is known as the Red Planet.",
      "which planet is known as the blue planet": "Earth is known as the Blue Planet.",
      "which is the largest planet": "Jupiter is the largest planet in our solar system.",
      "which is the smallest planet": "Mercury is the smallest planet in our solar system.",
      "what is the sun": "The Sun is a star at the center of our solar system.",
      "what is the moon": "The Moon is Earth’s only natural satellite.",
      "how many days are there in a week": "There are 7 days in a week.",
      "how many days are there in a year": "There are 365 days in a year, 366 in a leap year.",
      "how many hours are there in a day": "There are 24 hours in a day.",
      "how many minutes are there in an hour": "There are 60 minutes in an hour.",
      "how many seconds are there in a minute": "There are 60 seconds in a minute.",
      "how many seconds are there in an hour": "There are 3600 seconds in an hour.",
      "what is the square root of 4": "The square root of 4 is 2.",
      "what is the square root of 9": "The square root of 9 is 3.",
      "what is the square root of 16": "The square root of 16 is 4.",
      "what is the square root of 25": "The square root of 25 is 5.",
      "what is the square root of 36": "The square root of 36 is 6.",
      "what is the square root of 49": "The square root of 49 is 7.",
      "what is the square root of 64": "The square root of 64 is 8.",
      "what is the square root of 81": "The square root of 81 is 9.",
      "what is the square root of 100": "The square root of 100 is 10.",
      "who wrote ramayana": "The Ramayana was written by Valmiki.",
      "who wrote mahabharata": "The Mahabharata was written by Ved Vyasa.",
      "who wrote bhagavad gita": "The Bhagavad Gita is part of the Mahabharata, written by Ved Vyasa.",
      "who wrote vedas": "The Vedas are ancient Hindu scriptures composed by various sages.",
      "who is lord rama": "Lord Rama is a major deity in Hinduism, the seventh avatar of Vishnu.",
      "who is lord krishna": "Lord Krishna is a deity in Hinduism, the eighth avatar of Vishnu.",
      "who is lord shiva": "Lord Shiva is one of the principal deities of Hinduism, known as the destroyer.",
      "who is goddess durga": "Goddess Durga is a Hindu goddess of power and protection.",
      "who is ganesha": "Lord Ganesha is the Hindu god of wisdom and remover of obstacles.",
      "what is yoga": "Yoga is a practice of physical, mental, and spiritual disciplines originating in India.",
      "what is meditation": "Meditation is the practice of focusing the mind for relaxation and awareness.",
      "what is ayurveda": "Ayurveda is an ancient system of medicine from India.",
      "what is cricket": "Cricket is a popular bat-and-ball sport played between two teams.",
      "what is football": "Football is a sport where two teams compete to score goals using a ball.",
      "what is hockey": "Hockey is a sport where teams use sticks to hit a ball or puck into a goal.",
      "what is tennis": "Tennis is a sport where players hit a ball over a net using rackets.",
      "what is basketball": "Basketball is a sport where players score points by shooting a ball through a hoop."
    };

    // Normalize user input
    const normalizedText = text.toLowerCase().trim();

    // Get bot response
    const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that !!!";

    // Save bot response
    const bot = await Bot.create({
      text: botResponse,
    });

    // Return response
    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });

  } catch (error) {
    console.log("Error in message controller:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

