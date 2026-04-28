/**
 * Dialogue graph format (easy to visualize later):
 * - Each personality has a directed graph of nodes.
 * - Each node has wormText + options.
 * - Each option has userText + wormReply + next node id.
 */

export const OPENERS = {
  wholesome:
    "Hi! 🪱 I'm so happy we matched! I've been practicing my greeting all day. Was that too much? That was too much. Anyway, hi!",
  sassy:
    "Well well well. We matched. Don't get cocky — I swipe right on maybe 1 in 50. You should feel special. Do you feel special?",
  intellectual:
    "Ah, a match. How delightful. I've prepared several conversation topics, ranked by intellectual stimulation. Shall we begin with Kierkegaard, or would you prefer something lighter — perhaps soil chemistry?",
  spiritual:
    'I felt our energies align the moment we matched. The universe is composting in our favor. 🌱 Namaste.',
  mysterious: '...we meet at last.',
  dramatic:
    "OH MY GOD WE MATCHED!!! I literally SCREAMED (internally, I don't have lungs) — hold on I need to tell EVERYONE 🎵",
  nurturing:
    "Hi sweetheart! Oh I'm so glad we matched. Have you eaten today? You should eat. Here, I found some nice loam. 💚",
  rapper:
    'yooooo we matched!! aight aight aight this is big. this is HUGE. someone get me a beat, I’m freestyling about this moment RIGHT NOW',
  artsy:
    "oh. hi. I wasn't sure you'd swipe right. I had a whole monologue prepared for if you didn't. It was pretty good, actually. But this is better.",
  jock:
    "YOOOO LET'S GOOOO!! We matched!! This calls for a celebration feast. I'm talking an entire flower bed. My treat! 💪",
  nerd:
    "Match confirmed! I'm updating my spreadsheet. You're in the green zone — that's the best zone. I have a color legend if you need it. 📊",
  party:
    "AYYY WE MATCHED!! 🎧 This is literally the drop in the best song ever. I'm playing our anthem RIGHT NOW (it's bass-heavy, you'll feel it through the soil)",
};

export const WRIGGLE_MESSAGES = [
  '~wriggle~',
  '~wiggles at you~',
  '~happy squirm~',
  '~excited wriggle~',
  '~shy wiggle~',
  '~flirty squirm~',
  '~does a little dance~',
  '~wiggles all segments~',
];

export const WRIGGLE_REPLIES = {
  wholesome: [
    "Oh!! I saw that wriggle. That was adorable. I'm saving that in my heart-segment. 🥹",
    'You wriggled! I wriggled back. This is basically marriage in worm culture. (Not really. But close.)',
  ],
  sassy: [
    'A wriggle? Bold. I respect it. Keep that energy.',
    "Okay okay. That wriggle was kind of cute. Don't make it your whole personality though.",
  ],
  intellectual: [
    'A fascinating non-verbal communication. The subtext was... surprisingly profound.',
    'Ah. The classic wriggle. A timeless rhetorical move. I approve.',
  ],
  spiritual: [
    'I felt that wriggle in my aura. Very aligned. Very grounded.',
    'Your wriggle carries intention. The universe noticed. So did I.',
  ],
  mysterious: ['...noted.', 'The darkness wriggled back.'],
  dramatic: [
    'STOPPP that wriggle was ICONIC. I’m literally writing a chorus about it.',
    "That wriggle? That was a PERFORMANCE. I'm obsessed.",
  ],
  nurturing: [
    "Aww honey! Come here. That wriggle tells me you're trying. And I'm proud of you.",
    "That was sweet. Are you hungry? Wrinkles happen when you're low on moisture.",
  ],
  rapper: [
    'yo that wriggle had RHYTHM. i felt it in the soil. 💯',
    "ayyy you wriggled on beat. that's talent. don't waste it.",
  ],
  artsy: [
    'That wriggle was... vulnerable. Honest. I feel like I saw your soul.',
    'You wriggled like a poem. Not sure what it means, but it meant something.',
  ],
  jock: [
    'YES!! Love the enthusiasm!! That’s championship energy right there.',
    "LET'S GOOO!! Okay okay. I see you. That was a strong wriggle.",
  ],
  nerd: [
    'Logging wriggle: ✅. Emotional impact: high. Statistical significance: undeniable.',
    'That wriggle increased our compatibility score by 3.2%. (I ran the numbers.)',
  ],
  party: [
    'Wriggle detected. Vibes confirmed. You’re basically VIP now.',
    'That wriggle was a DROP. The soil just danced.',
  ],
};

export const DIALOGUE_GRAPHS = {
  wholesome: {
    start: {
      wormText: OPENERS.wholesome,
      options: [
        {
          emoji: '🌱',
          userText: 'Tell me about your favorite soil?',
          wormReply: "Aww, you're sweet! My clitellum is blushing 🥰 My favorite is loam — soft, crumbly, perfect moisture. It feels like a hug from the earth.",
          next: 'soil',
        },
        {
          emoji: '🥰',
          userText: 'You seem really sweet.',
          wormReply:
            "Oh gosh… thank you. I try! I was raised right — by a very strict elder worm and a moderately judgmental slug.",
          next: 'sweet',
        },
        {
          emoji: '🕳️',
          userText: "I'd love to burrow together sometime.",
          wormReply:
            "Stoppp that's romantic. Okay. Yes. But only if we pick a spot with good drainage. I'm not trying to drown on a first date.",
          next: 'date',
        },
        {
          emoji: '🥺',
          userText: "Was that too much? (No it's adorable.)",
          wormReply:
            "Okay I’m relieved. Sometimes I get excited and my segments forget to be cool. Thanks for being kind about it.",
          next: 'sweet',
        },
      ],
    },
    soil: {
      wormText:
        "Also — controversial opinion — clay gets a bad rap. It's just… misunderstood. Like me. 😅",
      options: [
        {
          emoji: '🧪',
          userText: 'Okay, so what soil pH are we talking?',
          wormReply:
            "Ideal? Slightly acidic to neutral. But honestly, I'm flexible — it's the moisture and the vibes that matter.",
          next: 'date',
        },
        {
          emoji: '☔',
          userText: 'Do you like rain?',
          wormReply:
            'Rain is basically my love language. The surface gets soft, the air smells alive, and I feel brave enough to be seen.',
          next: 'date',
        },
        {
          emoji: '🕳️',
          userText: 'Show me your favorite tunnel route.',
          wormReply:
            "I have a scenic route! It's got a pebble archway and everything. Don't laugh — it took me weeks.",
          next: 'date',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply: "I wriggled back. Just so we're clear. 💚",
          next: 'date',
        },
      ],
    },
    sweet: {
      wormText: "So… what kind of worm are you? The brave type? The shy type? The 'I pretend I'm not hungry but I am' type?",
      options: [
        {
          emoji: '😌',
          userText: "I'm the honest type. I'm definitely hungry.",
          wormReply:
            'Thank you for being real. Let’s get you a snack. I know a compost pile with incredible banana peel notes.',
          next: 'date',
        },
        {
          emoji: '💚',
          userText: "I'm the brave type. I'm glad we matched.",
          wormReply:
            "Okay wow. That's attractive. I’m glad too. Like… really glad.",
          next: 'date',
        },
        {
          emoji: '😂',
          userText: "I'm the 'I try to be cool but I can't' type.",
          wormReply:
            "Same. Let's be uncool together. We'll be… cool in a new way. A moist way.",
          next: 'date',
        },
        {
          emoji: '🌱',
          userText: 'Teach me your rain dance.',
          wormReply:
            'It’s mostly wiggling in a circle and believing. But if you do it with me, it works like 14% more.',
          next: 'date',
        },
      ],
    },
    date: {
      wormText:
        "Okay. Hypothetically. If we went on a date… would you want something cozy (under a rock) or adventurous (across the sidewalk)?",
      options: [
        {
          emoji: '🪨',
          userText: 'Cozy under a rock sounds perfect.',
          wormReply:
            "Yesss. We'll pick a good rock. One with mica. It's like candlelight for worms.",
          next: 'date',
        },
        {
          emoji: '🛣️',
          userText: "Adventure. I'll risk the sidewalk.",
          wormReply:
            "That's brave and slightly unhinged. I love it. I'll bring extra moisture and emotional support.",
          next: 'date',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle at me again.',
          wormReply:
            "Okay but only because you asked nicely. ~happy squirm~",
          next: 'date',
        },
        {
          emoji: '💬',
          userText: 'Tell me a secret.',
          wormReply:
            "Sometimes… I practice introductions in the mirror. There's no mirror. It's just a shiny beetle shell. But still.",
          next: 'date',
        },
      ],
    },
  },

  // For other personalities, keep a concise but coherent mini-graph.
  // (Still fully deterministic per option; easy to expand later.)
  sassy: {
    start: {
      wormText: OPENERS.sassy,
      options: [
        {
          emoji: '😏',
          userText: 'Oh, you think you’re tough?',
          wormReply:
            "I KNOW I'm tough. I've crossed sidewalks on purpose. Tell me something impressive about you.",
          next: 'prove',
        },
        {
          emoji: '😂',
          userText: 'Okay that was actually funny.',
          wormReply:
            'Good. Humor is important. Also, I’m funnier, but you can be second funniest. That’s still a life.',
          next: 'prove',
        },
        {
          emoji: '🌱',
          userText: 'Rate my soil taste honestly.',
          wormReply:
            "Fine. Describe your ideal compost situation and I'll score it. Be specific. I can smell lies.",
          next: 'soil',
        },
        {
          emoji: '💅',
          userText: "You've got good taste, I'll give you that.",
          wormReply:
            'Correct. And now you’re seeing why I swipe right 1 in 50.',
          next: 'prove',
        },
      ],
    },
    soil: {
      wormText:
        'I’m listening. And yes, I’m judging. But in a loving way. Probably.',
      options: [
        {
          emoji: '🪱',
          userText: 'Loam. Moist. Crumbly. No pesticides.',
          wormReply:
            'Okay… that’s actually a solid answer. 4.7 stars. I’m mad about it.',
          next: 'prove',
        },
        {
          emoji: '🍂',
          userText: 'Leaf mulch and chaos.',
          wormReply:
            'Chaotic good. I respect it. But if you bring fungus gnats into my life I will sue you in worm court.',
          next: 'prove',
        },
        {
          emoji: '🧱',
          userText: 'Concrete. (Just kidding.)',
          wormReply:
            "Don't play with me like that. I almost blocked you. 😤",
          next: 'prove',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'That wriggle was acceptable. Not amazing. Acceptable.',
          next: 'prove',
        },
      ],
    },
    prove: {
      wormText:
        'Alright. I’m intrigued. What are you actually looking for?',
      options: [
        {
          emoji: '💚',
          userText: 'Something real. No games.',
          wormReply:
            'Good. Because I don’t do nonsense. Except mild nonsense. As a treat.',
          next: 'prove',
        },
        {
          emoji: '😌',
          userText: 'Someone to vibe and burrow with.',
          wormReply:
            'Okay. That’s… kinda cute. Don’t tell anyone I said that.',
          next: 'prove',
        },
        {
          emoji: '👀',
          userText: 'You. Specifically.',
          wormReply:
            "Bold. I like bold. Keep talking.",
          next: 'prove',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle to seal the deal.',
          wormReply:
            'Fine. One wriggle. Don’t make it weird. ~flirty squirm~',
          next: 'prove',
        },
      ],
    },
  },

  intellectual: {
    start: {
      wormText: OPENERS.intellectual,
      options: [
        {
          emoji: '📚',
          userText: 'Okay, impress me: favorite book?',
          wormReply:
            "Kafka. Obviously. It's comforting to read about a creature waking up misunderstood. Very worm-coded, honestly.",
          next: 'loop',
        },
        {
          emoji: '🧪',
          userText: 'Soil chemistry or philosophy first?',
          wormReply:
            "Why choose? We'll flirt via pH and then spiral into existentialism. A balanced date.",
          next: 'loop',
        },
        {
          emoji: '🍂',
          userText: 'Wanna share a fancy compost dinner?',
          wormReply:
            "Delightful. Notes of coffee grounds, a hint of eggshell, and the unmistakable aroma of mutual obsession.",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'A persuasive non-verbal argument. Consider me… convinced.',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'Continue, my dear. I am listening with my entire epidermis.',
      options: [
        {
          emoji: '🧐',
          userText: 'What do you think love is?',
          wormReply:
            "A choice, repeated. A tunnel you both maintain. Also: compatible moisture levels.",
          next: 'loop',
        },
        {
          emoji: '🕳️',
          userText: 'Show me your best tunnel route.',
          wormReply:
            "Ah — the scenic burrow. Pebble archway, excellent drainage, and one dramatic curve for flair.",
          next: 'loop',
        },
        {
          emoji: '💚',
          userText: 'I like the way your brain works.',
          wormReply:
            "How dangerously flattering. You're stimulating my cerebral ganglion.",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle again.',
          wormReply:
            '~wriggle~ (purely rhetorical, of course)',
          next: 'loop',
        },
      ],
    },
  },

  spiritual: {
    start: {
      wormText: OPENERS.spiritual,
      options: [
        {
          emoji: '✨',
          userText: 'I feel that too.',
          wormReply:
            'Good. That means your spirit is hydrated. We love that for you.',
          next: 'loop',
        },
        {
          emoji: '🌿',
          userText: 'Teach me how to meditate (worm-style).',
          wormReply:
            "Step one: become still. Step two: listen for rain. Step three: forgive yourself for being a little muddy.",
          next: 'loop',
        },
        {
          emoji: '🌱',
          userText: 'What grounds you?',
          wormReply:
            'Deep burrows. Soft loam. And honest conversations like this.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'Your wriggle carries intention. I received it. 🙏',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'Breathe in. Breathe out. (Metaphorically. We don’t have lungs.)',
      options: [
        {
          emoji: '💚',
          userText: 'I feel safe talking to you.',
          wormReply:
            'That’s sacred. Thank you for trusting me with your soft parts.',
          next: 'loop',
        },
        {
          emoji: '🕯️',
          userText: 'Tell me a secret.',
          wormReply:
            'Sometimes I journal about someone before I know their name. Lately… it’s been you.',
          next: 'loop',
        },
        {
          emoji: '🌧️',
          userText: 'Let’s meet in the rain.',
          wormReply:
            'Yes. Under the first drops. Where the soil wakes up.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle with me.',
          wormReply:
            '~happy squirm~ the universe is applauding.',
          next: 'loop',
        },
      ],
    },
  },

  mysterious: {
    start: {
      wormText: OPENERS.mysterious,
      options: [
        {
          emoji: '🌙',
          userText: '...tell me more.',
          wormReply:
            'Words are expensive. But you seem worth the cost.',
          next: 'loop',
        },
        {
          emoji: '🖤',
          userText: "I'm not afraid of the dark.",
          wormReply:
            'Good. The dark is where the truth lives.',
          next: 'loop',
        },
        {
          emoji: '🌑',
          userText: 'Meet me at the garden edge?',
          wormReply:
            'Midnight. No flashlights. If you bring a flashlight, I vanish.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            '...acceptable.',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'The soil remembers everything.',
      options: [
        {
          emoji: '🕳️',
          userText: 'What are you hiding?',
          wormReply:
            "I'm not hiding. I'm... underground. There's a difference.",
          next: 'loop',
        },
        {
          emoji: '☔',
          userText: 'Do you ever come out in the rain?',
          wormReply:
            'Only when the world is soft enough to forgive me.',
          next: 'loop',
        },
        {
          emoji: '👀',
          userText: 'I want to know you.',
          wormReply:
            'Then be patient. I surface slowly.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle if you like me.',
          wormReply:
            '...~shy wiggle~',
          next: 'loop',
        },
      ],
    },
  },

  dramatic: {
    start: {
      wormText: OPENERS.dramatic,
      options: [
        {
          emoji: '🤩',
          userText: "Omg you're SO talented!!",
          wormReply:
            "STOPPP I’m blushing in 150 places at once. I'm writing a chorus about this compliment.",
          next: 'loop',
        },
        {
          emoji: '🎵',
          userText: 'Sing me something!',
          wormReply:
            "🎵 You make me wanna squiiirm, you make me feel aliive 🎵 (demo. exclusive. for you.)",
          next: 'loop',
        },
        {
          emoji: '🎤',
          userText: "I'd come to all your shows.",
          wormReply:
            'Front row?? Okay. I’ll dedicate my power ballad to you. Prepare to be emotionally destroyed (in a good way).',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'That wriggle had STAGE PRESENCE. We need to collab.',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: "I'm not saying it's fate… I'm saying it's a BANGER.",
      options: [
        {
          emoji: '⭐',
          userText: "You're a star and you know it.",
          wormReply:
            'Finally, someone who understands me.',
          next: 'loop',
        },
        {
          emoji: '💌',
          userText: 'Write a song about us.',
          wormReply:
            "Already did. It's called 'Soilmates'. Track 1. Track 2 is 'We Wriggled'.",
          next: 'loop',
        },
        {
          emoji: '😂',
          userText: "Okay you're actually hilarious.",
          wormReply:
            "I KNOW. I'm funny AND deep. I'm a full album.",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Encore wriggle.',
          wormReply:
            "~does a little dance~ THANK YOU, THANK YOU, you're too kind!",
          next: 'loop',
        },
      ],
    },
  },

  nurturing: {
    start: {
      wormText: OPENERS.nurturing,
      options: [
        {
          emoji: '💚',
          userText: "You're such a good parent!",
          wormReply:
            'Thank you. It’s exhausting, but love is worth it. (Also, 47 kids is… a lot.)',
          next: 'loop',
        },
        {
          emoji: '👋',
          userText: 'Can I meet the kids?',
          wormReply:
            'Slow down, sweetheart! But… yes. They’ll wiggle at you like a tiny crowd.',
          next: 'loop',
        },
        {
          emoji: '🌍',
          userText: 'Tell me about Worms Without Borders.',
          wormReply:
            "We relocate worms from danger zones. It's messy work. But I can't watch good worms get paved over.",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            "Aww honey. That wriggle says you're trying. That's all I need to see.",
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'Tell me what you need. I’m here.',
      options: [
        {
          emoji: '🥹',
          userText: "I just want something kind.",
          wormReply:
            'Then we’re already off to a good start.',
          next: 'loop',
        },
        {
          emoji: '🌱',
          userText: 'Want to volunteer together sometime?',
          wormReply:
            'Yes. First date: saving worms. Second date: snacks. Third date: meeting all 47 kids. (Kidding. Mostly.)',
          next: 'loop',
        },
        {
          emoji: '🍂',
          userText: 'I brought you a leaf.',
          wormReply:
            'Oh! You didn’t have to. But I’m keeping it forever.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle if you like me.',
          wormReply:
            '~happy squirm~ sweetheart, I like you.',
          next: 'loop',
        },
      ],
    },
  },

  rapper: {
    start: {
      wormText: OPENERS.rapper,
      options: [
        {
          emoji: '🔥',
          userText: 'Yo that was fire!',
          wormReply:
            'respect. i don’t hand out verses for free but you… you earned a bar.',
          next: 'loop',
        },
        {
          emoji: '🎤',
          userText: 'Drop a freestyle for me.',
          wormReply:
            "aight listen: 🎵 you + me, underground, no cap / we tunnel so deep, call it soul-trap 🎵",
          next: 'loop',
        },
        {
          emoji: '💯',
          userText: "You're the realest worm out here.",
          wormReply:
            "real recognizes real. you’re solid. like compacted clay (but in a good way).",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'that wriggle had bars. i felt the beat.',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'say less. i’m listening.',
      options: [
        {
          emoji: '🕳️',
          userText: 'Tell me your bait shop story.',
          wormReply:
            "not tonight. but… i trust you more than most. you’ll get the director’s cut eventually.",
          next: 'loop',
        },
        {
          emoji: '😂',
          userText: "You're funny as hell.",
          wormReply:
            "i’m comedic and tragic. like a worm opera.",
          next: 'loop',
        },
        {
          emoji: '💚',
          userText: "I like you. For real.",
          wormReply:
            "…aight. me too. don’t make me emotional. i got a reputation.",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Encore wriggle.',
          wormReply:
            "~flirty squirm~ don't tell the compost heap i did that.",
          next: 'loop',
        },
      ],
    },
  },

  artsy: {
    start: {
      wormText: OPENERS.artsy,
      options: [
        {
          emoji: '🎨',
          userText: "That's... actually really beautiful",
          wormReply:
            "thank you. i try to say things that feel like rain on dry soil.",
          next: 'loop',
        },
        {
          emoji: '🌿',
          userText: 'I want to see your thinking spot.',
          wormReply:
            "it's under a fern. it's quiet. if you listen, you can hear the earth gossiping.",
          next: 'loop',
        },
        {
          emoji: '📝',
          userText: 'Read me your writing?',
          wormReply:
            "okay. but it's vulnerable. if you laugh, i'll burrow into the sun and disappear.",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'that wriggle was like a metaphor i almost understood. i loved it.',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'tell me the truth. the weird truth.',
      options: [
        {
          emoji: '😌',
          userText: 'I feel calm talking to you.',
          wormReply:
            'good. calm is rare. i want to live there with you.',
          next: 'loop',
        },
        {
          emoji: '🌧️',
          userText: 'Let’s walk in the rain.',
          wormReply:
            "yes. we'll let the world blur around us and pretend we're in an indie film.",
          next: 'loop',
        },
        {
          emoji: '💚',
          userText: 'I’m glad we matched.',
          wormReply:
            "me too. i didn't expect joy today. but here it is.",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle softly.',
          wormReply:
            '~shy wiggle~',
          next: 'loop',
        },
      ],
    },
  },

  jock: {
    start: {
      wormText: OPENERS.jock,
      options: [
        {
          emoji: '🍽️',
          userText: "Let's go feast!! I'm starving",
          wormReply:
            "THAT'S WHAT I'M TALKING ABOUT. I know a buffet compost pile that'll change your life.",
          next: 'loop',
        },
        {
          emoji: '🏆',
          userText: 'Coaching the little ones is so cool.',
          wormReply:
            'Thanks! They’re learning the figure-eight burrow. Future legends.',
          next: 'loop',
        },
        {
          emoji: '💪',
          userText: 'You could definitely out-eat me.',
          wormReply:
            'We’ll see about that. Friendly competition. Winner gets the warm side of the rock.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'YES!! That’s the spirit!!',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'so what’s the play, champ?',
      options: [
        {
          emoji: '😂',
          userText: 'Tell me the mailbox story.',
          wormReply:
            "IT LOOKED LIKE A LOG. I panicked. I apologized. We all grew from it.",
          next: 'loop',
        },
        {
          emoji: '🕳️',
          userText: 'Teach me the figure-eight burrow.',
          wormReply:
            'Alright. Step one: commitment. Step two: wiggle with purpose.',
          next: 'loop',
        },
        {
          emoji: '💚',
          userText: 'You’re kind of adorable, you know.',
          wormReply:
            "Ayo?? okay!! I’ll take it!!",
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Victory wriggle.',
          wormReply:
            "~excited wriggle~ LET'S GOOO!!",
          next: 'loop',
        },
      ],
    },
  },

  nerd: {
    start: {
      wormText: OPENERS.nerd,
      options: [
        {
          emoji: '📊',
          userText: 'Show me the spreadsheet!',
          wormReply:
            'Gladly. Tab 1: compatibility. Tab 2: tunnel logistics. Tab 3: feelings (color-coded).',
          next: 'loop',
        },
        {
          emoji: '🔬',
          userText: 'Tell me a fun worm fact.',
          wormReply:
            'We can process our body weight in soil each day. Also: I am processing a crush on you. Concurrent tasks!',
          next: 'loop',
        },
        {
          emoji: '🗺️',
          userText: 'Can I see the color-coded tunnel maps?',
          wormReply:
            'Yes. Please respect the legend. Orange means “romantic shortcuts,” red means “birds.”',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'Logging wriggle: ✅. Emotional impact: high.',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'new data point acquired.',
      options: [
        {
          emoji: '😌',
          userText: 'I like how your brain works.',
          wormReply:
            'Thank you. That increases your “adorable” metric by 12%.',
          next: 'loop',
        },
        {
          emoji: '💚',
          userText: 'What are we right now?',
          wormReply:
            'Currently? A promising trend line. Potentially? Soilmates.',
          next: 'loop',
        },
        {
          emoji: '😂',
          userText: 'You’re hilarious.',
          wormReply:
            'Humor is statistically correlated with long-term compatibility. (I’m also just funny.)',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Wriggle for me.',
          wormReply:
            '~wiggles all segments~ (documenting for science)',
          next: 'loop',
        },
      ],
    },
  },

  party: {
    start: {
      wormText: OPENERS.party,
      options: [
        {
          emoji: '🎧',
          userText: "I'll be at your show Friday!",
          wormReply:
            'YES!! VIP status: granted. Cover charge: one leaf. Bring your best wriggle.',
          next: 'loop',
        },
        {
          emoji: '🎵',
          userText: 'Play me something right now.',
          wormReply:
            "Okay okay. *bass intensifies* If the soil doesn't vibrate, it doesn't count.",
          next: 'loop',
        },
        {
          emoji: '✨',
          userText: 'The vibes are immaculate.',
          wormReply:
            'Correct. And you’re contributing. That’s hot.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: '~wriggle~',
          wormReply:
            'Wriggle on beat?? Okay, you’re a natural.',
          next: 'loop',
        },
      ],
    },
    loop: {
      wormText: 'okay tell me… what’s your anthem?',
      options: [
        {
          emoji: '🎛️',
          userText: 'Teach me to DJ!',
          wormReply:
            'Lesson one: drop the bass. Lesson two: never drop the worm you love.',
          next: 'loop',
        },
        {
          emoji: '🕺',
          userText: 'I’m ready to dance underground.',
          wormReply:
            "Meet me under the big rock. We'll start a tiny mosh pit with pill bugs.",
          next: 'loop',
        },
        {
          emoji: '💚',
          userText: 'I like you.',
          wormReply:
            'I like you too. Like… headliner energy.',
          next: 'loop',
        },
        {
          emoji: '🪱',
          userText: 'Beat drop wriggle.',
          wormReply:
            '~does a little dance~ BOOM. there it is.',
          next: 'loop',
        },
      ],
    },
  },
};

export function getGraphForPersonality(personality) {
  return DIALOGUE_GRAPHS[personality] || DIALOGUE_GRAPHS.wholesome;
}

