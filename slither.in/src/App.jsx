import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './App.css';

import { WORM_PROFILES } from './data/wormProfiles';
import {
  getGraphForPersonality,
  WRIGGLE_MESSAGES,
  WRIGGLE_REPLIES,
  OPENERS,
} from './data/dialogueGraphs';

/* profiles moved to src/data/wormProfiles.js */
/*
const __OLD_WORM_PROFILES = [
  {
    id: 1,
    name: 'Wiggles McSquirm',
    age: 2,
    distance: '3 inches away',
    bio: "Just a simple worm looking for someone to tunnel through life with. I spent last winter curled up under a really nice rock — it had mica in it — and I realized: what's the point of finding the perfect soil if you've got no one to share it with?",
    lookingFor: 'Something serious. Ready to intertwine.',
    funFact: 'Once tunneled 14 inches in a single night. Personal best.',
    greenFlags: ['Great listener (no ears, all heart)', 'Remembers your favorite soil pH'],
    redFlags: ['Will steal the warm side of the burrow'],
    dealbreaker: 'Worms who think they\'re too good for clay soil.',
    interests: ['Composting', 'Rain Dancing', 'Soil Sommelier', 'Burrowing'],
    emoji: '🪱',
    color: '#e8a87c',
    pickup: "Are you a pile of leaves? Because I'm falling for you.",
    personality: 'wholesome',
    responses: [
      "Aww, you're sweet! My clitellum is blushing 🥰",
      "You know what I love about rainy days? Everything. But especially this conversation.",
      "I made you something... it's a tiny ball of castings. It means I like you.",
      "My 300 siblings keep asking about you. I told them you're special.",
      "Want to go find a nice patch of loam together? I know a spot.",
      "I've been thinking about you. All five hearts, unanimous vote. 💚",
      "Sorry for the late reply, I was aerating some really compacted clay. But I hurried back!",
      "You make me want to be a better worm. Longer. More segmented. You know?",
    ],
  },
  {
    id: 2,
    name: 'Squirmantha',
    age: 1.5,
    distance: '1 foot away',
    bio: "Adventurous annelid seeking my other half — and I mean that romantically, not biologically. (Please do NOT cut me in half. That's not how regeneration works and I'm tired of explaining it.) Verified nightcrawler. Feminist. Will absolutely judge your soil.",
    lookingFor: 'An equal partner. No parasites.',
    funFact: "Has a Yelp account where she reviews different garden soils. Currently at 847 reviews.",
    greenFlags: ['Fiercely independent', 'Will protect you from robins'],
    redFlags: ['Brutally honest about your burrowing technique'],
    dealbreaker: 'Worms who ghost. We\'re invertebrates, not monsters.',
    interests: ['Nightcrawling', 'Yoga', 'Organic Activism', 'Soil Reviews'],
    emoji: '🐛',
    color: '#f5b7b1',
    pickup: "Are you rich soil? Because I dig you.",
    personality: 'sassy',
    responses: [
      "Okay that was cute. Don't let it go to your prostomium.",
      "I JUST left the best review on this conversation. 4.7 stars. Room for improvement 😏",
      "Ugh, you're actually making me smile. My segments are crinkling.",
      "Fine. You're funny. But I've got standards — are you at LEAST 40 segments?",
      "I told my best friend about you and she said 'girl, you're down bad.' She's right.",
      "You should know I come with 847 soil reviews and strong opinions. Still interested?",
      "Not to be dramatic but I'd cross a sidewalk for you. And you KNOW how I feel about concrete.",
      "If you ghost me I will find you. I have chemoreceptors. I WILL find you.",
    ],
  },
  {
    id: 3,
    name: 'Sir Slithers-a-Lot',
    age: 3,
    distance: '6 inches away',
    bio: "Distinguished gentleman worm. Oxford-educated (the compost heap behind Oxford University — lovely terroir, notes of coffee grounds and eggshell). I've read Nietzsche, though I found his views on earthworms reductive. Looking for a worm of refined taste and at least moderate segment count.",
    lookingFor: 'Intellectual companionship. A meeting of the minds (ganglia).',
    funFact: "Maintains a private library of decomposed literature. Favorite author: Kafka (relatable).",
    greenFlags: ['Will read poetry to you at night', 'Exquisite taste in humus'],
    redFlags: ['Corrects your grammar mid-tunnel'],
    dealbreaker: 'Anti-intellectualism. Also, birds.',
    interests: ['Philosophy', 'Fine Dirt Dining', 'Classical Wiggling', 'Literature'],
    emoji: '🎩',
    color: '#a9cce3',
    pickup: "My five hearts all beat for you — that's a pentameter, darling.",
    personality: 'intellectual',
    responses: [
      "How delightfully perspicacious of you. I'm charmed.",
      "You remind me of a passage from Kafka's Metamorphosis. That's a compliment, I assure you.",
      "In my considerable experience — three full years of sentience — I've never met a worm quite like you.",
      "Shall we discuss the existential implications of being boneless over dinner? I know a lovely compost.",
      "I find your lack of exoskeleton... deeply attractive. We have so much in common.",
      "To burrow, or not to burrow — that is never really the question when you're around.",
      "I've composed a sonnet about your segments. It's in iambic pentameter, naturally.",
      "You've stimulated my cerebral ganglion in ways I didn't think possible. Brava.",
    ],
  },
  {
    id: 4,
    name: 'Dirty Diana',
    age: 2,
    distance: '8 inches away',
    bio: "I'm told I have a great personality — all 150 segments of it. Recovering workaholic (I used to aerate 16 hours a day). Now I'm focusing on myself: meditation, deep burrowing, listening to the vibrations of the earth. Looking for someone who gets that inner peace starts from inner soil.",
    lookingFor: 'A grounded connection. Pun intended and I stand by it.',
    funFact: "Completed a 30-day silent retreat. Didn't talk, just burrowed. Life-changing.",
    greenFlags: ['Emotionally available (all 5 hearts open)', 'Great at deep conversations'],
    redFlags: ['Might suggest you try meditation when you\'re just hungry'],
    dealbreaker: 'Toxic positivity. Also, actual toxins. Keep your pesticides away from me.',
    interests: ['Meditation', 'Deep Burrowing', 'Vibration Therapy', 'Journaling'],
    emoji: '💃',
    color: '#d4a5e5',
    pickup: "You must be nitrogen-rich, because you make my heart-segments flutter.",
    personality: 'spiritual',
    responses: [
      "I felt your energy before I read your message. It's warm. Like sun-heated topsoil. 🌱",
      "That really resonated with me. And I mean that — I could feel the vibrations.",
      "Can I be honest? I've been manifesting someone like you. The universe composts in mysterious ways.",
      "Let's just exist together for a moment. No pressure. Just two worms, being.",
      "I journaled about you this morning. Three pages. My therapist (a centipede) says that's a lot.",
      "You have really grounded energy. That's the highest compliment I can give.",
      "I did a body scan meditation and every segment was thinking about you. All 150.",
      "Namaste. That's worm for 'the soil in me honors the soil in you.' 🙏",
    ],
  },
  {
    id: 5,
    name: 'The Nightcrawler',
    age: 4,
    distance: '??? inches away',
    bio: "Mysterious. Dark. Moist. I emerge only after sunset, when the soil cools and the humans retreat indoors. Some call me an enigma. Others call me 'that really big worm Dave saw on the driveway.' Both are true. I contain multitudes. And also, like, a lot of soil.",
    lookingFor: 'Someone comfortable with silence and darkness.',
    funFact: "Has never been seen in daylight. Some worms doubt I even exist.",
    greenFlags: ['Protective', 'Knows every tunnel in the garden'],
    redFlags: ['You will never fully know me'],
    dealbreaker: 'Flashlights.',
    interests: ['Nightlife', 'Solitude', 'Underground Cartography', 'Brooding'],
    emoji: '🌙',
    color: '#85929e',
    pickup: "They call me the Nightcrawler, but for you I'd brave the dawn.",
    personality: 'mysterious',
    responses: [
      "...",
      "I was underground. Thinking. About things. About you, maybe.",
      "The darkness holds many secrets. You're becoming one of my favorites.",
      "I don't usually talk this much. You should feel honored. Or concerned.",
      "Meet me where the garden path ends and the unknown begins. 9 PM. Come alone.",
      "I've mapped every tunnel in this garden. I'd show you, but then I'd have to... actually yeah, I'd show you.",
      "Sometimes I surface just to feel the rain. Tonight I surfaced to talk to you.",
      "*emerges from shadow* I read your message six hours ago. I've been composing a reply in the dark.",
    ],
  },
  {
    id: 6,
    name: 'Vermi Lovato',
    age: 1,
    distance: '2 inches away',
    bio: "Pop star worm trying to find love outside the spotlight. Yes, I wrote 'Worm at Heart' and 'Sorry Not Soil.' No, I won't perform at your birthday party (okay, maybe). My manager (a beetle) says I shouldn't date fans, but I fired him. Twice. He keeps coming back. Beetles are persistent.",
    lookingFor: 'Someone who likes me for ME, not my discography.',
    funFact: "Sold out a puddle (capacity: several). Standing ovation from a millipede.",
    greenFlags: ['Will write songs about you', 'Extremely passionate'],
    redFlags: ['Will also write songs about your breakup'],
    dealbreaker: 'Worms who can\'t handle the spotlight. Also worms who hog the spotlight.',
    interests: ['Singing', 'Songwriting', 'Fashion', 'Drama'],
    emoji: '🎤',
    color: '#f9e79f',
    pickup: "Baby you're a fireworm — come on, let your colors burst!",
    personality: 'dramatic',
    responses: [
      "OMG STOP you're literally so sweet I'm writing a song about this RIGHT NOW 🎵",
      "Okay so I just freestyled a chorus about you and my beetle manager says it's a hit??",
      "Sorry I'm so extra, I'm a performer, it's in my segments 💅",
      "I showed my fans (three pill bugs and a slug) your message and they SCREAMED",
      "Not to be dramatic but I would cancel a TOUR for you. A small tour. Like three rocks.",
      "🎵 You make me wanna squiiiiirm, you make me feel aliiiiive 🎵 (that's yours, it's a demo)",
      "I literally cannot with you right now. My agent is telling me to play it cool. I CANNOT.",
      "You're my muse. My soil. My rain. I'm writing an EP about this conversation as we speak.",
    ],
  },
  {
    id: 7,
    name: 'Annelida Jolie',
    age: 2.5,
    distance: '12 inches away',
    bio: "Philanthropist. Mother. Icon. I've adopted 47 baby worms from three different gardens. I run a non-profit called Worms Without Borders that relocates earthworms from construction sites. Last week I convinced a human to stop using chemical fertilizer. He doesn't know I exist. I'm very persuasive for someone without a face.",
    lookingFor: 'A co-parent. Must love kids (I have 47).',
    funFact: "Once brokered peace between a colony of ants and a family of pill bugs.",
    greenFlags: ['Unbelievably caring', 'Will introduce you to 47 children immediately'],
    redFlags: ['You will meet 47 children immediately'],
    dealbreaker: 'Pesticides. Speciesism. Worms who don\'t recycle their castings.',
    interests: ['Philanthropy', 'Cross-Garden Travel', 'Parenting', 'Activism'],
    emoji: '🌍',
    color: '#a3e4d7',
    pickup: "I've traveled the whole garden, but my heart keeps tunneling back to you.",
    personality: 'nurturing',
    responses: [
      "That's so sweet! The kids would love you. All 47 of them. They're very welcoming.",
      "I was just putting the little ones to bed (it takes a while, there's 47) but I'm all yours now 💚",
      "You know what matters most? Kindness. And soil quality. But mostly kindness.",
      "I just got back from relocating a family of worms from a parking lot. Hero stuff. Anyway, hi!",
      "Would you want to volunteer at Worms Without Borders sometime? First date idea 🌱",
      "The kids made you a card. Well, they can't draw. Or hold things. But they wiggled in your general direction.",
      "I believe every worm deserves love. Especially you. Especially right now.",
      "Sorry, one of the little ones got lost in a rain puddle. Crisis averted. Where were we?",
    ],
  },
  {
    id: 8,
    name: 'Squirm Shady',
    age: 3,
    distance: '5 inches away',
    bio: "Will the real slim worm please stand up? Just kidding — no legs, can't stand. Battle-rap champion of the compost heap three years running. They tried to cancel me for my track 'Lose Yourself (In The Soil)' but the worms spoke: 8 billion streams on WormCloud. And yeah, I've got a dark past. I was in a bait shop. I don't talk about it.",
    lookingFor: 'A ride-or-die. Someone real.',
    funFact: "Escaped from a bait shop at age 0.5. Has a tiny face tattoo (a speck of dirt, but intentional).",
    greenFlags: ['Loyal to a fault', 'Will rap your praises to anyone'],
    redFlags: ['Has beef with 6 other worms', 'Never takes off his tiny headband'],
    dealbreaker: 'Fake worms. Posers. Also fish.',
    interests: ['Rap', 'Battle Wiggling', 'Street Cred', 'Escape Artistry'],
    emoji: '🎵',
    color: '#d5dbdb',
    pickup: "I'm Squirm Shady, yes I'm the real Shady — all you other slim worms are just imitating.",
    personality: 'rapper',
    responses: [
      "yo that was actually fire 🔥 respect",
      "aight aight you got bars. metaphorical bars. we don't talk about actual bars (bait shop flashbacks)",
      "i just freestyled about you to the compost heap and they went CRAZY. three crickets started a mosh pit",
      "look i don't trust easy. bait shop kid. but you... you're real. i can feel it in my setae.",
      "wrote you a track. it's called 'Tunnel Vision (feat. You)'. dropping it at midnight.",
      "my mom's gonna love you. she's a nightcrawler in garden 4. tough crowd. but you'll win her over.",
      "i'm not crying, my moisture levels are just elevated. it's a hydration thing. unrelated to feelings.",
      "real talk tho? you make the compost heap feel like home. 💯",
    ],
  },
  {
    id: 9,
    name: 'Wormothy Chalamet',
    age: 1,
    distance: '4 inches away',
    bio: "Indie worm. You've probably never heard of my favorite soil — it's a small-batch artisanal loam from a community garden in Brooklyn. I wear a tiny scarf (it's a blade of grass). My aesthetic is 'effortlessly moist.' I once burrowed through an entire copy of Pitchfork magazine. Changed my life.",
    lookingFor: 'A muse. Someone who understands that burrowing is an art form.',
    funFact: "Has been described as 'the most beautiful worm I've ever accidentally stepped on' (he survived).",
    greenFlags: ['Thoughtful', 'Will take you to obscure gardens'],
    redFlags: ['Judges your taste in soil', 'Takes 45 minutes to pick a tunnel'],
    dealbreaker: 'Mainstream composting.',
    interests: ['Indie Film', 'Artisanal Soil', 'Tiny Scarves', 'Being Misunderstood'],
    emoji: '🧣',
    color: '#c39bd3',
    pickup: "I'd crawl through a thousand gardens to find one that reminds me of your eyes. Wait — do you have eyes? Neither do I. Still.",
    personality: 'artsy',
    responses: [
      "wow. that's... that's beautiful. hold on, I need to process this in my journal.",
      "you know what this conversation reminds me of? a French film I saw projected onto a dewdrop.",
      "I don't want to label this. labels are for jars. and we're not in jars. (unless you are? blink twice.)",
      "I've been thinking about what you said. I burrowed to my thinking spot. It's under a fern. Very niche.",
      "let's skip the small talk. what's your relationship with impermanence?",
      "I made you a playlist. it's just rain sounds and one cricket who doesn't know he's being recorded.",
      "you're like a poem I haven't finished writing. that's a compliment. my unfinished work is my best work.",
      "I feel seen by you. Which is remarkable because, again, no eyes. The connection transcends optics.",
    ],
  },
  {
    id: 10,
    name: 'Lumbricus Grande',
    age: 5,
    distance: '9 inches away',
    bio: "I'm just a big worm with a big heart. Five big hearts, actually. Former competitive eater (soil, obviously). Retired from the circuit after The Incident (ate through someone's entire herb garden in one night — they cried — I felt terrible — I wrote an apology in castings). Now I coach little worms in youth burrowing leagues.",
    lookingFor: 'Someone who can keep up. At the buffet.',
    funFact: "Holds the regional record for most soil consumed in 60 seconds (don't ask, it's classified).",
    greenFlags: ['Generous — always shares food', 'Great with kids'],
    redFlags: ['Will eat your favorite patch of soil while you\'re sleeping'],
    dealbreaker: 'Picky eaters. It\'s DIRT. Just eat it.',
    interests: ['Competitive Eating', 'Youth Coaching', 'Buffets', 'Gardening Repair'],
    emoji: '💪',
    color: '#f0b27a',
    pickup: "Are you a garden bed? Because I could spend all night in you. Eating. Soil. That came out weird.",
    personality: 'jock',
    responses: [
      "haha NICE. you're funny! want to go grab some soil? I know an all-you-can-eat spot 🍽️",
      "just got back from coaching the little ones. taught them the figure-eight burrow today. proud coach moment!",
      "I benchpress pebbles. not to impress you. okay, maybe a little to impress you. 💪",
      "you ever eat so much soil you just lie there for a while? that's my ideal date.",
      "my nutritionist (a centipede) says I need to eat MORE. can you believe it? best news ever.",
      "I like you. you've got good energy. the kind of energy that says 'let's eat an entire garden bed.'",
      "full disclosure: I may have accidentally eaten part of someone's mailbox last week. it looked like a log.",
      "you're the real MVP. most valuable partner. that's what I'd call you. after we eat.",
    ],
  },
  {
    id: 11,
    name: 'Hermione Squirmer',
    age: 2,
    distance: '7 inches away',
    bio: "Top of my class at Hogsoils School of Wormcraft and Wigglery. I've read every decomposed book in the garden and organized the tunnel system by the Dewey Decimal System. Some say I'm intense — I say I'm THOROUGH. Currently writing a thesis on the geopolitics of the compost bin. It's 600 segments long.",
    lookingFor: 'Someone intellectually stimulating who also appreciates a good schedule.',
    funFact: "Reorganized an entire ant colony's filing system. They didn't ask. They also didn't complain.",
    greenFlags: ['Incredibly smart', 'Always has a plan', 'Color-coded tunnel maps'],
    redFlags: ['Will correct you', 'Has a spreadsheet for everything, including feelings'],
    dealbreaker: 'Laziness. Also, anyone who thinks the earth is flat. We LIVE in it. It\'s clearly round.',
    interests: ['Research', 'Organization', 'Tunnel Architecture', 'Debates'],
    emoji: '📚',
    color: '#aed6f1',
    pickup: "According to my research, we're a 97.3% compatibility match. The 2.7% is margin of error.",
    personality: 'nerd',
    responses: [
      "Interesting point! I've actually written a 12-segment paper on that exact topic.",
      "I've created a spreadsheet tracking our conversation. You're trending positively. 📊",
      "Fun fact: earthworms can process their own body weight in soil daily. Anyway, you're cute.",
      "I've scheduled our next three conversations. I hope you like efficiency. And pie charts.",
      "ACTUALLY... no wait, that was rude. Let me rephrase. You're right, but also slightly wrong. Endearingly wrong.",
      "I just fact-checked your message. Everything checks out. You're both accurate AND charming. Rare combination.",
      "I color-coded my feelings about you. They're mostly warm-toned. That's good. Consult the legend.",
      "Would you like to co-author a paper with me? 'On the Thermodynamics of Worm Attraction.' Working title.",
    ],
  },
  {
    id: 12,
    name: 'DJ Subwoofer',
    age: 2,
    distance: '3 inches away',
    bio: "Underground DJ. Literally. I perform in tunnels. My stage name is DJ Subwoofer because I play below ground and also I found a tiny speaker a human dropped. The bass makes the soil vibrate and every worm within 6 inches starts involuntarily dancing. My residency is every Friday under the big rock. Cover charge: one leaf.",
    lookingFor: 'A dance partner. Or just someone who vibes.',
    funFact: "Once played a 72-hour set. Three moles complained. He considers this a success.",
    greenFlags: ['Life of the party', 'Always has good music', 'Free entry to his shows'],
    redFlags: ['Very loud', 'Sleeps until 4pm', 'His friends are... a lot'],
    dealbreaker: 'Worms with no rhythm. Sorry, I can feel it through the soil. You can\'t fake it.',
    interests: ['DJing', 'Vibration Music', 'Underground Raves', 'Sound Design'],
    emoji: '🎧',
    color: '#f1948a',
    pickup: "Are you a bass drop? Because you just made my whole body vibrate.",
    personality: 'party',
    responses: [
      "yooo you should come to my set Friday!! under the big rock, 11pm, it's gonna be SICK 🎵",
      "just remixed your message into a beat. absolute BANGER. dropping it at my next show.",
      "vibes are IMMACULATE right now. you + me + a tiny speaker = magic",
      "sorry I was asleep, DJ hours 😅 I'm up now tho and thinking about you. and beats. mostly you.",
      "I made you a mixtape. it's called 'Soil Sounds Vol. 3: The One Where I Caught Feelings'",
      "the crowd (four pill bugs and a centipede) went WILD when I dedicated a song to you last night",
      "you've got natural rhythm. I can feel it through the soil vibrations. don't let anyone tell you different.",
      "imagine us: headlining the garden rave together. the power couple of underground music. literally underground.",
    ],
  },
];
*/

const FOOD_TYPES = [
  { emoji: '🍎', points: 10, name: 'Apple', color: '#e74c3c' },
  { emoji: '🍇', points: 15, name: 'Grapes', color: '#8e44ad' },
  { emoji: '🥬', points: 10, name: 'Lettuce', color: '#27ae60' },
  { emoji: '🌿', points: 10, name: 'Herb', color: '#2ecc71' },
  { emoji: '🍂', points: 5, name: 'Leaf', color: '#d35400' },
  { emoji: '🍄', points: 20, name: 'Mushroom', color: '#c0392b' },
  { emoji: '🫐', points: 25, name: 'Blueberry', color: '#2c3e50' },
  { emoji: '🥕', points: 15, name: 'Carrot', color: '#e67e22' },
];

const POWERUP_TYPES = [
  { emoji: '⚡', effect: 'speed', duration: 4000, name: 'Speed Boost', color: '#f1c40f' },
  { emoji: '⏰', effect: 'time', duration: 0, name: '+5 Seconds', color: '#3498db' },
  { emoji: '🧲', effect: 'magnet', duration: 5000, name: 'Food Magnet', color: '#e74c3c' },
  { emoji: '✨', effect: 'double', duration: 5000, name: 'Double Points', color: '#9b59b6' },
];

const HAZARD_TYPES = [
  { emoji: '🐦', name: 'Robin', speed: 1.2 },
  { emoji: '👟', name: 'Boot', speed: 0.8 },
];

function WormAvatar({ emoji, color, size = 80, wiggle = false }) {
  return (
    <div
      className={`worm-avatar ${wiggle ? 'wiggle' : ''}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}, ${color}88)`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.5,
        boxShadow: `0 4px 15px ${color}44`,
      }}
    >
      {emoji}
    </div>
  );
}

function LandingScreen({ onStart }) {
  return (
    <div className="landing">
      <div className="landing-bg-worms">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="bg-worm"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 30}px`,
              opacity: 0.15 + Math.random() * 0.15,
            }}
          >
            🪱
          </span>
        ))}
      </div>
      <div className="landing-content">
        <div className="logo-container">
          <span className="logo-worm">🪱</span>
          <h1 className="logo">slither.in</h1>
          <p className="tagline">where every worm finds their squirm</p>
        </div>
        <div className="landing-features">
          <div className="feature">
            <span className="feature-icon">💕</span>
            <span>Find Love</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🎮</span>
            <span>Play Squiggle</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💬</span>
            <span>Chat & Connect</span>
          </div>
        </div>
        <button className="btn btn-primary btn-lg" onClick={onStart}>
          Start Slithering
        </button>
        <p className="landing-sub">100% open source, 100% worm</p>
        <a
          href="https://github.com/Caerii/slither.in"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Open Source on GitHub
        </a>
      </div>
    </div>
  );
}

function ProfileCard({ profile, onLike, onPass, style }) {
  const [expanded, setExpanded] = useState(false);
  const [showPickup, setShowPickup] = useState(false);

  const compatScore = useMemo(
    () => 70 + Math.floor(Math.random() * 28),
    []
  );

  return (
    <div className="profile-card" style={style}>
      <div className="profile-card-inner">
        <div className="profile-top-row">
          <WormAvatar emoji={profile.emoji} color={profile.color} size={100} wiggle />
          <div className="profile-top-info">
            <h2 className="profile-name">
              {profile.name}, <span className="profile-age">{profile.age}yr</span>
            </h2>
            <span className="profile-distance">{profile.distance}</span>
            <div className="compat-meter">
              <div className="compat-fill" style={{ width: `${compatScore}%` }} />
              <span className="compat-text">{compatScore}% compatible</span>
            </div>
          </div>
        </div>

        <p className="profile-bio">{profile.bio}</p>

        <div className="profile-interests">
          {profile.interests.map((interest) => (
            <span key={interest} className="interest-tag">
              {interest}
            </span>
          ))}
        </div>

        <button
          className="expand-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '▲ Less' : '▼ More about ' + profile.name.split(' ')[0]}
        </button>

        {expanded && (
          <div className="profile-expanded">
            <div className="profile-detail">
              <span className="detail-label">Looking for</span>
              <span className="detail-value">{profile.lookingFor}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Fun fact</span>
              <span className="detail-value">{profile.funFact}</span>
            </div>
            <div className="profile-detail">
              <span className="detail-label">Dealbreaker</span>
              <span className="detail-value">{profile.dealbreaker}</span>
            </div>
            <div className="flags-row">
              <div className="flags green-flags">
                <span className="flag-title">Green flags</span>
                {profile.greenFlags.map((f, i) => (
                  <span key={i} className="flag-item green">✓ {f}</span>
                ))}
              </div>
              <div className="flags red-flags">
                <span className="flag-title">Red flags</span>
                {profile.redFlags.map((f, i) => (
                  <span key={i} className="flag-item red">⚠ {f}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        <button
          className="pickup-btn"
          onClick={() => setShowPickup(!showPickup)}
        >
          {showPickup ? '🙈 Hide' : '💬 Pickup Line'}
        </button>
        {showPickup && <p className="pickup-line">"{profile.pickup}"</p>}

        <div className="profile-actions">
          <button className="action-btn pass" onClick={onPass}>
            ❌ Pass
          </button>
          <button className="action-btn like" onClick={onLike}>
            💚 Squirm
          </button>
        </div>
      </div>
    </div>
  );
}

function MatchScreen({ profile, onKeepSwiping, onChat }) {
  return (
    <div className="match-screen">
      <div className="match-hearts">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              fontSize: `${15 + Math.random() * 25}px`,
            }}
          >
            {['💚', '💕', '🪱', '✨', '💗'][Math.floor(Math.random() * 5)]}
          </span>
        ))}
      </div>
      <div className="match-content">
        <h1 className="match-title">It's a Squirm!</h1>
        <p className="match-subtitle">You and {profile.name} are a match!</p>
        <WormAvatar emoji={profile.emoji} color={profile.color} size={140} wiggle />
        <p className="match-quote">"{profile.pickup}"</p>
        <div className="match-actions">
          <button className="btn btn-secondary" onClick={onKeepSwiping}>
            Keep Swiping
          </button>
          <button className="btn btn-primary" onClick={onChat}>
            💬 Send a Wriggle
          </button>
        </div>
      </div>
    </div>
  );
}

/*
const __OLD_DIALOGUE_OPTIONS = {
  wholesome: [
    { text: "You seem really sweet!", emoji: "🥰" },
    { text: "Tell me about your favorite soil?", emoji: "🌱" },
    { text: "I'd love to burrow together sometime", emoji: "🕳️" },
    { text: "That's so wholesome I might cry", emoji: "🥺" },
  ],
  sassy: [
    { text: "Oh, you think you're tough?", emoji: "😏" },
    { text: "I'm intrigued... tell me more", emoji: "👀" },
    { text: "Okay that was actually funny", emoji: "😂" },
    { text: "You've got good taste, I'll give you that", emoji: "💅" },
  ],
  intellectual: [
    { text: "That's a fascinating perspective", emoji: "🧐" },
    { text: "I'd love to hear your theories", emoji: "📖" },
    { text: "You're impressively well-read", emoji: "🎓" },
    { text: "Let's discuss this over some loam", emoji: "🍷" },
  ],
  spiritual: [
    { text: "I feel that energy too", emoji: "✨" },
    { text: "The universe brought us together", emoji: "🌌" },
    { text: "That's so beautifully grounded", emoji: "🧘" },
    { text: "Tell me about your meditation practice", emoji: "🌿" },
  ],
  mysterious: [
    { text: "...tell me more", emoji: "🌙" },
    { text: "I'm not afraid of the dark", emoji: "🖤" },
    { text: "You're intriguing", emoji: "👁️" },
    { text: "Meet me at the garden edge?", emoji: "🌑" },
  ],
  dramatic: [
    { text: "Omg you're SO talented!!", emoji: "🤩" },
    { text: "Sing me something!", emoji: "🎵" },
    { text: "I'd come to all your shows", emoji: "🎤" },
    { text: "You're a star and you know it", emoji: "⭐" },
  ],
  nurturing: [
    { text: "You're such a good parent!", emoji: "💚" },
    { text: "Can I meet the kids?", emoji: "👋" },
    { text: "That's really selfless of you", emoji: "🥹" },
    { text: "The world needs more worms like you", emoji: "🌍" },
  ],
  rapper: [
    { text: "Yo that was fire!", emoji: "🔥" },
    { text: "Drop a freestyle for me", emoji: "🎤" },
    { text: "You're the realest worm out here", emoji: "💯" },
    { text: "Bait shop origin story goes hard", emoji: "💪" },
  ],
  artsy: [
    { text: "That's... actually really beautiful", emoji: "🎨" },
    { text: "I'd love to see your thinking spot", emoji: "🌿" },
    { text: "You see the world differently", emoji: "🦋" },
    { text: "Read me some of your writing?", emoji: "📝" },
  ],
  jock: [
    { text: "Let's go feast!! I'm starving", emoji: "🍽️" },
    { text: "You could definitely out-eat me", emoji: "💪" },
    { text: "Coaching the little ones is so cool", emoji: "🏆" },
    { text: "Show me your pebble bench press!", emoji: "😤" },
  ],
  nerd: [
    { text: "Show me the spreadsheet!", emoji: "📊" },
    { text: "I love how organized you are", emoji: "📋" },
    { text: "Tell me a fun worm fact", emoji: "🔬" },
    { text: "Can I see the color-coded tunnel maps?", emoji: "🗺️" },
  ],
  party: [
    { text: "I'll be at your show Friday!", emoji: "🎧" },
    { text: "Play me something right now", emoji: "🎵" },
    { text: "The vibes are immaculate", emoji: "✨" },
    { text: "Teach me to DJ!", emoji: "🎛️" },
  ],
};

const __OLD_WRIGGLE_MESSAGES = [
  "~wriggle~",
  "~wiggles at you~",
  "~happy squirm~",
  "~excited wriggle~",
  "~shy wiggle~",
  "~flirty squirm~",
  "~does a little dance~",
  "~wiggles all segments~",
];
*/

function ChatScreen({ matches, onBack }) {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [messages, setMessages] = useState({});
  const [typing, setTyping] = useState(false);
  const [wriggling, setWriggling] = useState(false);
  const [nodeByMatchId, setNodeByMatchId] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedMatch, typing]);

  const getDelayForPersonality = (personality) => {
    if (personality === 'mysterious') return 2000 + Math.random() * 3000;
    if (personality === 'dramatic') return 500 + Math.random() * 800;
    return 800 + Math.random() * 1500;
  };

  const appendMessage = useCallback((matchId, from, text) => {
    setMessages((prev) => ({
      ...prev,
      [matchId]: [...(prev[matchId] || []), { from, text }],
    }));
  }, []);

  const sendDialogue = useCallback((match, option) => {
    const matchId = match.id;
    appendMessage(matchId, 'user', option.userText);
    setTyping(true);

    const delay = getDelayForPersonality(match.personality);
    setTimeout(() => {
      setTyping(false);
      appendMessage(matchId, 'worm', option.wormReply);
      setNodeByMatchId((prev) => ({
        ...prev,
        [matchId]: option.next || (prev[matchId] || 'start'),
      }));
    }, delay);
  }, [appendMessage]);

  const handleDialogue = (option) => {
    if (!selectedMatch || typing) return;
    sendDialogue(selectedMatch, option);
  };

  const handleWriggle = () => {
    if (!selectedMatch || typing) return;
    setWriggling(true);
    setTimeout(() => setWriggling(false), 600);
    const msg = WRIGGLE_MESSAGES[Math.floor(Math.random() * WRIGGLE_MESSAGES.length)];
    const personality = selectedMatch.personality;
    const replies = WRIGGLE_REPLIES[personality] || WRIGGLE_REPLIES.wholesome;
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const matchId = selectedMatch.id;
    appendMessage(matchId, 'user', msg);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      appendMessage(matchId, 'worm', reply);
    }, getDelayForPersonality(personality));
  };

  const handleSelectMatch = (match) => {
    setSelectedMatch(match);
    const matchId = match.id;
    if (!nodeByMatchId[matchId]) {
      setNodeByMatchId((prev) => ({ ...prev, [matchId]: 'start' }));
    }
    if (!messages[matchId] || messages[matchId].length === 0) {
      const graph = getGraphForPersonality(match.personality);
      const opener = graph.start?.wormText || OPENERS[match.personality] || 'Hey there! We matched! 🪱';
      setTimeout(() => {
        appendMessage(matchId, 'worm', opener);
      }, 600);
    }
  };

  const dialogueOptions = useMemo(() => {
    if (!selectedMatch) return [];
    const graph = getGraphForPersonality(selectedMatch.personality);
    const nodeId = nodeByMatchId[selectedMatch.id] || 'start';
    return graph[nodeId]?.options || graph.start?.options || [];
  }, [selectedMatch, nodeByMatchId]);

  if (!selectedMatch) {
    return (
      <div className="chat-screen">
        <div className="chat-header">
          <button className="back-btn" onClick={onBack}>← Back</button>
          <h2>Your Matches</h2>
        </div>
        {matches.length === 0 ? (
          <div className="no-matches">
            <span className="no-matches-emoji">💔</span>
            <p>No matches yet! Keep swiping to find your worm soulmate.</p>
            <p className="no-matches-hint">Tip: worms are into confidence. Hit that Squirm button.</p>
          </div>
        ) : (
          <div className="match-list">
            {matches.map((match) => (
              <button
                key={match.id}
                className="match-list-item"
                onClick={() => handleSelectMatch(match)}
              >
                <WormAvatar emoji={match.emoji} color={match.color} size={50} />
                <div className="match-list-info">
                  <span className="match-list-name">{match.name}</span>
                  <span className="match-list-preview">
                    {messages[match.id]?.length
                      ? messages[match.id][messages[match.id].length - 1].text.slice(0, 45) + '...'
                      : 'Tap to start chatting! 👋'}
                  </span>
                </div>
                <span className="match-list-personality">{match.emoji}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="chat-screen">
      <div className="chat-header">
        <button className="back-btn" onClick={() => setSelectedMatch(null)}>
          ← Back
        </button>
        <WormAvatar emoji={selectedMatch.emoji} color={selectedMatch.color} size={36} />
        <div className="chat-header-info">
          <h2>{selectedMatch.name}</h2>
          <span className="chat-header-status">
            {selectedMatch.personality === 'mysterious' ? 'lurking...' : 'online now'}
          </span>
        </div>
      </div>
      <div className="chat-messages">
        <div className="chat-date-divider">Today</div>
        <div className="chat-system-msg">
          You matched with {selectedMatch.name}! Be yourself (unless you're a bird).
        </div>
        {(messages[selectedMatch.id] || []).map((msg, i) => (
          <div key={i} className={`chat-bubble ${msg.from} ${msg.text.startsWith('~') ? 'wriggle-msg' : ''}`}>
            {msg.text}
          </div>
        ))}
        {typing && (
          <div className="chat-bubble worm typing-indicator">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-actions-area">
        <button
          className={`wriggle-btn ${wriggling ? 'wriggling' : ''}`}
          onClick={handleWriggle}
          disabled={typing}
        >
          <span className="wriggle-worm">🪱</span>
          <span>Wriggle!</span>
        </button>
        <div className="dialogue-options">
          {dialogueOptions.map((option, i) => (
            <button
              key={i}
              className="dialogue-btn"
              onClick={() => handleDialogue(option)}
              disabled={typing}
            >
              <span className="dialogue-emoji">{option.emoji}</span>
              <span className="dialogue-text">{option.userText}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SquiggleGame({ onBack }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [wormPos, setWormPos] = useState({ x: 200, y: 200 });
  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem('squiggleHigh') || '0')
  );
  const [trail, setTrail] = useState([]);
  const [combo, setCombo] = useState(0);
  const [lastAte, setLastAte] = useState(null);
  const [activePowerup, setActivePowerup] = useState(null);
  const [level, setLevel] = useState(1);
  const [foodEaten, setFoodEaten] = useState(0);
  const [notification, setNotification] = useState(null);

  const keysRef = useRef(new Set());
  const animFrameRef = useRef(null);
  const targetsRef = useRef([]);
  const hazardsRef = useRef([]);
  const powerupsRef = useRef([]);
  const speedMultRef = useRef(1);
  const magnetRef = useRef(false);
  const doubleRef = useRef(false);

  const showNotif = useCallback((text) => {
    setNotification(text);
    setTimeout(() => setNotification(null), 1200);
  }, []);

  const spawnTarget = useCallback(() => {
    const food = FOOD_TYPES[Math.floor(Math.random() * FOOD_TYPES.length)];
    return {
      x: 30 + Math.random() * 340,
      y: 30 + Math.random() * 340,
      ...food,
      size: 18 + Math.random() * 10,
      id: Date.now() + Math.random(),
    };
  }, []);

  const spawnHazard = useCallback((lvl) => {
    const type = HAZARD_TYPES[Math.floor(Math.random() * HAZARD_TYPES.length)];
    const side = Math.floor(Math.random() * 4);
    let x, y, dx, dy;
    if (side === 0) { x = -20; y = Math.random() * 400; dx = type.speed; dy = (Math.random() - 0.5) * 0.5; }
    else if (side === 1) { x = 420; y = Math.random() * 400; dx = -type.speed; dy = (Math.random() - 0.5) * 0.5; }
    else if (side === 2) { y = -20; x = Math.random() * 400; dy = type.speed; dx = (Math.random() - 0.5) * 0.5; }
    else { y = 420; x = Math.random() * 400; dy = -type.speed; dx = (Math.random() - 0.5) * 0.5; }
    return { ...type, x, y, dx: dx * (1 + lvl * 0.15), dy: dy * (1 + lvl * 0.15), id: Date.now() + Math.random(), size: 22 };
  }, []);

  const spawnPowerup = useCallback(() => {
    const type = POWERUP_TYPES[Math.floor(Math.random() * POWERUP_TYPES.length)];
    return {
      x: 40 + Math.random() * 320,
      y: 40 + Math.random() * 320,
      ...type,
      size: 22,
      id: Date.now() + Math.random(),
    };
  }, []);

  const startGame = useCallback(() => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setWormPos({ x: 200, y: 200 });
    setTrail([]);
    setCombo(0);
    setLastAte(null);
    setActivePowerup(null);
    setLevel(1);
    setFoodEaten(0);
    speedMultRef.current = 1;
    magnetRef.current = false;
    doubleRef.current = false;
    targetsRef.current = Array.from({ length: 4 }, () => spawnTarget());
    hazardsRef.current = [];
    powerupsRef.current = [];
  }, [spawnTarget]);

  useEffect(() => {
    if (!gameActive) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameActive(false);
          clearInterval(timer);
          setScore((s) => {
            if (s > highScore) {
              setHighScore(s);
              localStorage.setItem('squiggleHigh', String(s));
            }
            return s;
          });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameActive, highScore]);

  useEffect(() => {
    if (!gameActive) return;
    const hazardTimer = setInterval(() => {
      setLevel((lvl) => {
        hazardsRef.current.push(spawnHazard(lvl));
        if (Math.random() < 0.3) {
          hazardsRef.current.push(spawnHazard(lvl));
        }
        return lvl;
      });
    }, 3000);
    const powerupTimer = setInterval(() => {
      if (powerupsRef.current.length < 2 && Math.random() < 0.5) {
        powerupsRef.current.push(spawnPowerup());
      }
    }, 5000);
    return () => {
      clearInterval(hazardTimer);
      clearInterval(powerupTimer);
    };
  }, [gameActive, spawnHazard, spawnPowerup]);

  useEffect(() => {
    const newLevel = Math.floor(foodEaten / 8) + 1;
    if (newLevel !== level && newLevel > level) {
      setLevel(newLevel);
      showNotif(`Level ${newLevel}!`);
    }
  }, [foodEaten, level, showNotif]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key)) {
        e.preventDefault();
      }
      keysRef.current.add(e.key);
    };
    const handleKeyUp = (e) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!gameActive) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const baseSpeed = 3;
    const gameLoop = () => {
      const keys = keysRef.current;
      const speed = baseSpeed * speedMultRef.current;

      setWormPos((pos) => {
        let { x, y } = pos;
        if (keys.has('ArrowUp') || keys.has('w')) y = Math.max(12, y - speed);
        if (keys.has('ArrowDown') || keys.has('s')) y = Math.min(388, y + speed);
        if (keys.has('ArrowLeft') || keys.has('a')) x = Math.max(12, x - speed);
        if (keys.has('ArrowRight') || keys.has('d')) x = Math.min(388, x + speed);
        setTrail((prev) => [...prev.slice(-40), { x, y }]);

        if (magnetRef.current) {
          targetsRef.current.forEach((t) => {
            const dx = x - t.x;
            const dy = y - t.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 80 && dist > 5) {
              t.x += (dx / dist) * 2;
              t.y += (dy / dist) * 2;
            }
          });
        }

        let ateCount = 0;
        let atePoints = 0;
        targetsRef.current = targetsRef.current.filter((t) => {
          const dx = x - t.x;
          const dy = y - t.y;
          if (Math.sqrt(dx * dx + dy * dy) < 22) {
            ateCount++;
            atePoints += t.points;
            return false;
          }
          return true;
        });

        if (ateCount > 0) {
          setCombo((c) => {
            const newCombo = c + ateCount;
            const multiplier = Math.min(Math.floor(newCombo / 3) + 1, 5);
            const pts = atePoints * multiplier * (doubleRef.current ? 2 : 1);
            setScore((s) => s + pts);
            if (multiplier > 1) {
              showNotif(`${multiplier}x Combo! +${pts}`);
            }
            return newCombo;
          });
          setLastAte(Date.now());
          setFoodEaten((f) => f + ateCount);
          while (targetsRef.current.length < 3 + level) {
            targetsRef.current.push(spawnTarget());
          }
        }

        powerupsRef.current = powerupsRef.current.filter((p) => {
          const dx = x - p.x;
          const dy = y - p.y;
          if (Math.sqrt(dx * dx + dy * dy) < 22) {
            showNotif(p.name + '!');
            setActivePowerup({ ...p, until: Date.now() + (p.duration || 1) });
            if (p.effect === 'speed') {
              speedMultRef.current = 2;
              setTimeout(() => { speedMultRef.current = 1; }, p.duration);
            } else if (p.effect === 'time') {
              setTimeLeft((t) => t + 5);
            } else if (p.effect === 'magnet') {
              magnetRef.current = true;
              setTimeout(() => { magnetRef.current = false; }, p.duration);
            } else if (p.effect === 'double') {
              doubleRef.current = true;
              setTimeout(() => { doubleRef.current = false; }, p.duration);
            }
            return false;
          }
          return true;
        });

        hazardsRef.current.forEach((h) => {
          const dx = x - h.x;
          const dy = y - h.y;
          if (Math.sqrt(dx * dx + dy * dy) < 20) {
            setTimeLeft((t) => Math.max(1, t - 3));
            setCombo(0);
            showNotif(`${h.emoji} -3 seconds!`);
            h.x = -100;
          }
        });

        return { x, y };
      });

      hazardsRef.current = hazardsRef.current
        .map((h) => ({ ...h, x: h.x + h.dx, y: h.y + h.dy }))
        .filter((h) => h.x > -50 && h.x < 450 && h.y > -50 && h.y < 450);

      setLastAte((prev) => {
        if (prev && Date.now() - prev > 2000) {
          setCombo(0);
          return null;
        }
        return prev;
      });

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };
    animFrameRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameActive, level, spawnTarget, showNotif]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 400 * dpr;
    canvas.height = 400 * dpr;
    ctx.scale(dpr, dpr);

    const soilGrad = ctx.createRadialGradient(200, 200, 0, 200, 200, 280);
    soilGrad.addColorStop(0, '#3d2415');
    soilGrad.addColorStop(1, '#2d1a0e');
    ctx.fillStyle = soilGrad;
    ctx.fillRect(0, 0, 400, 400);

    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = `rgba(139, 90, 43, ${0.05 + Math.random() * 0.12})`;
      ctx.beginPath();
      ctx.arc(Math.random() * 400, Math.random() * 400, 0.5 + Math.random() * 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    trail.forEach((pos, i) => {
      const progress = i / trail.length;
      const alpha = progress * 0.7;
      const size = 4 + progress * 8;
      const hue = activePowerup?.effect === 'speed' ? '50, 200, 50' :
                  activePowerup?.effect === 'double' ? '180, 100, 220' :
                  '232, 168, 124';
      ctx.fillStyle = `rgba(${hue}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    if (magnetRef.current) {
      ctx.strokeStyle = 'rgba(231, 76, 60, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(wormPos.x, wormPos.y, 80, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.font = '26px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🪱', wormPos.x, wormPos.y);

    targetsRef.current.forEach((t) => {
      ctx.font = `${t.size}px serif`;
      ctx.fillText(t.emoji, t.x, t.y);
    });

    powerupsRef.current.forEach((p) => {
      ctx.save();
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);
      ctx.restore();
    });

    hazardsRef.current.forEach((h) => {
      ctx.font = `${h.size}px serif`;
      ctx.fillText(h.emoji, h.x, h.y);
    });
  }, [wormPos, trail, activePowerup]);

  const comboMultiplier = Math.min(Math.floor(combo / 3) + 1, 5);

  return (
    <div className="squiggle-screen">
      <div className="squiggle-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2>Squiggle!</h2>
      </div>
      <div className="squiggle-stats">
        <div className="stat">
          <span className="stat-label">Score</span>
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Time</span>
          <span className={`stat-value ${timeLeft <= 5 ? 'danger' : ''}`}>
            {timeLeft}s
          </span>
        </div>
        <div className="stat">
          <span className="stat-label">Level</span>
          <span className="stat-value">{level}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Combo</span>
          <span className={`stat-value ${comboMultiplier > 1 ? 'gold' : ''}`}>
            {comboMultiplier > 1 ? `${comboMultiplier}x` : '-'}
          </span>
        </div>
        <div className="stat">
          <span className="stat-label">Best</span>
          <span className="stat-value gold">{highScore}</span>
        </div>
      </div>

      {activePowerup && activePowerup.duration > 0 && Date.now() < activePowerup.until && (
        <div className="active-powerup" style={{ borderColor: activePowerup.color }}>
          {activePowerup.emoji} {activePowerup.name}
        </div>
      )}

      <div className="squiggle-canvas-wrap">
        <canvas
          ref={canvasRef}
          style={{ width: 400, height: 400 }}
          className="squiggle-canvas"
        />
        {notification && (
          <div className="game-notification">{notification}</div>
        )}
        {!gameActive && (
          <div className="squiggle-overlay">
            {timeLeft === 0 ? (
              <>
                <h3>Time's Up!</h3>
                <p className="final-score">Score: {score}</p>
                <p className="final-details">
                  Level {level} · {foodEaten} snacks eaten
                </p>
                {score >= highScore && score > 0 && (
                  <p className="new-high">New High Score! 🏆</p>
                )}
              </>
            ) : (
              <>
                <h3>🪱 Squiggle!</h3>
                <p>Guide your worm to eat snacks and dodge predators!</p>
                <div className="game-legend">
                  <div className="legend-section">
                    <span className="legend-title">Snacks</span>
                    <div className="legend-items">
                      {FOOD_TYPES.slice(0, 4).map((f) => (
                        <span key={f.emoji} className="legend-item">{f.emoji} +{f.points}</span>
                      ))}
                    </div>
                  </div>
                  <div className="legend-section">
                    <span className="legend-title">Power-ups</span>
                    <div className="legend-items">
                      {POWERUP_TYPES.map((p) => (
                        <span key={p.emoji} className="legend-item">{p.emoji} {p.name}</span>
                      ))}
                    </div>
                  </div>
                  <div className="legend-section">
                    <span className="legend-title">Dodge!</span>
                    <div className="legend-items">
                      {HAZARD_TYPES.map((h) => (
                        <span key={h.emoji} className="legend-item">{h.emoji} {h.name} (-3s)</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="controls-hint">WASD or Arrow Keys to move</p>
                <p className="controls-hint">Eat fast for combo multipliers!</p>
              </>
            )}
            <button className="btn btn-primary" onClick={startGame}>
              {timeLeft === 0 ? 'Play Again' : 'Start Game'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Navbar({ screen, onNavigate, matchCount }) {
  return (
    <nav className="navbar">
      <button
        className={`nav-item ${screen === 'swipe' ? 'active' : ''}`}
        onClick={() => onNavigate('swipe')}
      >
        <span className="nav-icon">🪱</span>
        <span className="nav-label">Discover</span>
      </button>
      <button
        className={`nav-item ${screen === 'chat' ? 'active' : ''}`}
        onClick={() => onNavigate('chat')}
      >
        <span className="nav-icon">💬</span>
        <span className="nav-label">Chat</span>
        {matchCount > 0 && <span className="nav-badge">{matchCount}</span>}
      </button>
      <button
        className={`nav-item ${screen === 'squiggle' ? 'active' : ''}`}
        onClick={() => onNavigate('squiggle')}
      >
        <span className="nav-icon">🎮</span>
        <span className="nav-label">Squiggle</span>
      </button>
    </nav>
  );
}

function App() {
  const [screen, setScreen] = useState('landing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState([]);
  const [matchPopup, setMatchPopup] = useState(null);
  const [swipeDir, setSwipeDir] = useState(null);

  const currentProfile = WORM_PROFILES[currentIndex % WORM_PROFILES.length];

  const handleLike = () => {
    setSwipeDir('right');
    setTimeout(() => {
      setSwipeDir(null);
      const isMatch = Math.random() > 0.3;
      if (isMatch && !matches.find((m) => m.id === currentProfile.id)) {
        setMatches((prev) => [...prev, currentProfile]);
        setMatchPopup(currentProfile);
      }
      setCurrentIndex((i) => i + 1);
    }, 300);
  };

  const handlePass = () => {
    setSwipeDir('left');
    setTimeout(() => {
      setSwipeDir(null);
      setCurrentIndex((i) => i + 1);
    }, 300);
  };

  if (screen === 'landing') {
    return <LandingScreen onStart={() => setScreen('swipe')} />;
  }

  if (matchPopup) {
    return (
      <MatchScreen
        profile={matchPopup}
        onKeepSwiping={() => setMatchPopup(null)}
        onChat={() => {
          setMatchPopup(null);
          setScreen('chat');
        }}
      />
    );
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title" onClick={() => setScreen('landing')}>
          slither.in
        </h1>
        <a
          href="https://github.com/Caerii/slither.in"
          target="_blank"
          rel="noopener noreferrer"
          className="header-github"
          title="View source on GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
      <div className="app-content">
        {screen === 'swipe' && (
          <div className="swipe-container">
            <ProfileCard
              key={currentProfile.id + '-' + currentIndex}
              profile={currentProfile}
              onLike={handleLike}
              onPass={handlePass}
              style={{
                transform: swipeDir === 'left'
                  ? 'translateX(-120%) rotate(-15deg)'
                  : swipeDir === 'right'
                  ? 'translateX(120%) rotate(15deg)'
                  : 'translateX(0)',
                opacity: swipeDir ? 0 : 1,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
              }}
            />
          </div>
        )}
        {screen === 'chat' && (
          <ChatScreen matches={matches} onBack={() => setScreen('swipe')} />
        )}
        {screen === 'squiggle' && (
          <SquiggleGame onBack={() => setScreen('swipe')} />
        )}
      </div>
      <Navbar
        screen={screen}
        onNavigate={setScreen}
        matchCount={matches.length}
      />
    </div>
  );
}

export default App;
