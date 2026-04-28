import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';

const WORM_PROFILES = [
  {
    id: 1,
    name: 'Wiggles McSquirm',
    age: 2,
    bio: 'Just a simple worm looking for someone to tunnel through life with. I love rainy days, fresh soil, and long slithers on the garden path.',
    interests: ['Composting', 'Rain Dancing', 'Soil Tasting'],
    emoji: '🪱',
    color: '#e8a87c',
    pickup: "Are you a pile of leaves? Because I'm falling for you.",
  },
  {
    id: 2,
    name: 'Squirmantha',
    age: 1.5,
    bio: "Adventurous annelid seeking my other half (not literally, please don't cut me). Verified nightcrawler. Swipe right if you like dirt.",
    interests: ['Nightcrawling', 'Yoga', 'Organic Living'],
    emoji: '🐛',
    color: '#f5b7b1',
    pickup: "Are you rich soil? Because I want to be in you... wait, that came out wrong.",
  },
  {
    id: 3,
    name: 'Sir Slithers-a-Lot',
    age: 3,
    bio: 'Distinguished gentleman worm. Oxford-educated (the compost heap behind Oxford University). Looking for a worm of refined taste.',
    interests: ['Philosophy', 'Fine Dirt Dining', 'Classical Wiggling'],
    emoji: '🎩',
    color: '#a9cce3',
    pickup: "My five hearts all beat for you.",
  },
  {
    id: 4,
    name: 'Dirty Diana',
    age: 2,
    bio: "I'm told I have a great personality... all 150 segments of it. Looking for someone who appreciates a worm with depth (6 inches, to be exact).",
    interests: ['Gardening', 'Deep Burrowing', 'Meditation'],
    emoji: '💃',
    color: '#d4a5e5',
    pickup: "You must be nitrogen-rich, because you make my heart segments flutter.",
  },
  {
    id: 5,
    name: 'The Nightcrawler',
    age: 4,
    bio: "Mysterious. Dark. Moist. I only come out at night. If you can handle the mystery, swipe right. If not, I'll be underground.",
    interests: ['Nightlife', 'Mystery', 'Underground Music'],
    emoji: '🌙',
    color: '#85929e',
    pickup: "They call me the Nightcrawler, but for you I'd come out in daylight.",
  },
  {
    id: 6,
    name: 'Vermi Lovato',
    age: 1,
    bio: "Pop star worm trying to find love outside the spotlight. Yes, I wrote 'Worm at Heart.' No, I won't sing it on the first date. Maybe the second.",
    interests: ['Singing', 'Composting', 'Fashion'],
    emoji: '🎤',
    color: '#f9e79f',
    pickup: "Baby you're a fireworm... come on, let your colors burst!",
  },
  {
    id: 7,
    name: 'Annelida Jolie',
    age: 2.5,
    bio: 'Humanitarian worm. Adopted 47 baby worms. Looking for a co-parent who loves soil as much as they love family.',
    interests: ['Philanthropy', 'Travel', 'Organic Farming'],
    emoji: '🌍',
    color: '#a3e4d7',
    pickup: "I've traveled the whole garden, but I keep coming back to you.",
  },
  {
    id: 8,
    name: 'Squirm Shady',
    age: 3,
    bio: "Will the real slim worm please stand up? Just kidding, I don't have legs. Battle-rap champion of the compost heap.",
    interests: ['Rap', 'Battle Wiggling', 'Rebellion'],
    emoji: '🎵',
    color: '#d5dbdb',
    pickup: "I'm Squirm Shady, yes I'm the real Shady, all you other slim worms are just imitating.",
  },
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
  const [showPickup, setShowPickup] = useState(false);

  return (
    <div className="profile-card" style={style}>
      <div className="profile-card-inner">
        <WormAvatar emoji={profile.emoji} color={profile.color} size={120} wiggle />
        <h2 className="profile-name">
          {profile.name}, <span className="profile-age">{profile.age}yr</span>
        </h2>
        <p className="profile-bio">{profile.bio}</p>
        <div className="profile-interests">
          {profile.interests.map((interest) => (
            <span key={interest} className="interest-tag">
              {interest}
            </span>
          ))}
        </div>
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

function ChatScreen({ matches, onBack }) {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const WORM_RESPONSES = [
    "Aww, you're making my segments tingle! 🪱",
    "That's the sweetest thing anyone's said since I tasted that composted banana peel 💕",
    "You really know how to make a worm squirm! 😊",
    "I've been thinking about you... all five of my hearts agree 💚",
    "Want to go tunnel somewhere together? 🕳️",
    "You had me at 'hello' (worms don't actually have ears, but still) 😄",
    "I just told my 300 siblings about you!",
    "Can I regenerate into your life? 🔄",
    "You're the soil to my soul 🌍",
    "I'm not usually this forward, but... want to share a compost heap? 🏠",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedMatch]);

  const sendMessage = () => {
    if (!inputText.trim() || !selectedMatch) return;
    const matchId = selectedMatch.id;
    const newMessages = { ...messages };
    if (!newMessages[matchId]) newMessages[matchId] = [];
    newMessages[matchId].push({ from: 'user', text: inputText });
    setMessages(newMessages);
    setInputText('');

    setTimeout(() => {
      const response =
        WORM_RESPONSES[Math.floor(Math.random() * WORM_RESPONSES.length)];
      setMessages((prev) => ({
        ...prev,
        [matchId]: [...(prev[matchId] || []), { from: 'worm', text: response }],
      }));
    }, 800 + Math.random() * 1500);
  };

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
          </div>
        ) : (
          <div className="match-list">
            {matches.map((match) => (
              <button
                key={match.id}
                className="match-list-item"
                onClick={() => setSelectedMatch(match)}
              >
                <WormAvatar emoji={match.emoji} color={match.color} size={50} />
                <div className="match-list-info">
                  <span className="match-list-name">{match.name}</span>
                  <span className="match-list-preview">
                    {messages[match.id]?.length
                      ? messages[match.id][messages[match.id].length - 1].text
                      : 'Send a wriggle! 👋'}
                  </span>
                </div>
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
        <h2>{selectedMatch.name}</h2>
      </div>
      <div className="chat-messages">
        <div className="chat-date-divider">Today</div>
        {(messages[selectedMatch.id] || []).map((msg, i) => (
          <div key={i} className={`chat-bubble ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          className="chat-input"
          placeholder="Type a wriggle..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="send-btn" onClick={sendMessage}>
          🪱
        </button>
      </div>
    </div>
  );
}

function SquiggleGame({ onBack }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [targets, setTargets] = useState([]);
  const [wormPos, setWormPos] = useState({ x: 200, y: 200 });
  const [highScore, setHighScore] = useState(
    () => parseInt(localStorage.getItem('squiggleHigh') || '0')
  );
  const [trail, setTrail] = useState([]);
  const keysRef = useRef(new Set());
  const animFrameRef = useRef(null);

  const spawnTarget = useCallback(() => {
    return {
      x: 40 + Math.random() * 320,
      y: 40 + Math.random() * 320,
      emoji: ['🍎', '🍇', '🥬', '🌿', '🍂', '🍄'][Math.floor(Math.random() * 6)],
      size: 20 + Math.random() * 15,
      id: Date.now() + Math.random(),
    };
  }, []);

  const startGame = useCallback(() => {
    setScore(0);
    setTimeLeft(15);
    setGameActive(true);
    setWormPos({ x: 200, y: 200 });
    setTrail([]);
    setTargets([spawnTarget(), spawnTarget(), spawnTarget()]);
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
    const handleKeyDown = (e) => {
      keysRef.current.add(e.key);
    };
    const handleKeyUp = (e) => {
      keysRef.current.delete(e.key);
    };
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

    const speed = 3;
    const gameLoop = () => {
      const keys = keysRef.current;
      setWormPos((pos) => {
        let { x, y } = pos;
        if (keys.has('ArrowUp') || keys.has('w')) y = Math.max(15, y - speed);
        if (keys.has('ArrowDown') || keys.has('s')) y = Math.min(385, y + speed);
        if (keys.has('ArrowLeft') || keys.has('a')) x = Math.max(15, x - speed);
        if (keys.has('ArrowRight') || keys.has('d')) x = Math.min(385, x + speed);
        setTrail((prev) => [...prev.slice(-30), { x, y }]);
        return { x, y };
      });

      setTargets((prev) => {
        let newTargets = [...prev];
        let ate = false;
        setWormPos((pos) => {
          newTargets = newTargets.filter((t) => {
            const dx = pos.x - t.x;
            const dy = pos.y - t.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 25) {
              ate = true;
              return false;
            }
            return true;
          });
          return pos;
        });
        if (ate) {
          setScore((s) => s + 10);
          newTargets.push(spawnTarget());
        }
        return newTargets;
      });

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };
    animFrameRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameActive, spawnTarget]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 400 * dpr;
    canvas.height = 400 * dpr;
    ctx.scale(dpr, dpr);

    ctx.fillStyle = '#2d1a0e';
    ctx.fillRect(0, 0, 400, 400);

    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(139, 90, 43, ${0.1 + Math.random() * 0.15})`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * 400,
        Math.random() * 400,
        1 + Math.random() * 3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    trail.forEach((pos, i) => {
      const alpha = (i / trail.length) * 0.6;
      const size = 6 + (i / trail.length) * 6;
      ctx.fillStyle = `rgba(232, 168, 124, ${alpha})`;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.font = '24px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🪱', wormPos.x, wormPos.y);

    targets.forEach((t) => {
      ctx.font = `${t.size}px serif`;
      ctx.fillText(t.emoji, t.x, t.y);
    });
  }, [wormPos, targets, trail]);

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
          <span className="stat-label">Best</span>
          <span className="stat-value gold">{highScore}</span>
        </div>
      </div>
      <div className="squiggle-canvas-wrap">
        <canvas
          ref={canvasRef}
          style={{ width: 400, height: 400 }}
          className="squiggle-canvas"
        />
        {!gameActive && (
          <div className="squiggle-overlay">
            {timeLeft === 0 ? (
              <>
                <h3>Time's Up!</h3>
                <p className="final-score">Score: {score}</p>
                {score >= highScore && score > 0 && (
                  <p className="new-high">New High Score! 🏆</p>
                )}
              </>
            ) : (
              <>
                <h3>🪱 Squiggle!</h3>
                <p>Guide your worm to eat the snacks!</p>
                <p className="controls-hint">WASD or Arrow Keys to move</p>
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
      const isMatch = Math.random() > 0.35;
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
