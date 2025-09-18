import React from "react";
import "./index.css"; // dein bestehendes CSS

function App() {
  const events = [
    { time: "08:00", title: "Event 1" },
    { time: "10:30", title: "Event 2" },
    { time: "13:00", title: "Event 3" },
    { time: "15:45", title: "Event 4" },
  ];

  return (
    <div className="page">
      <nav className="menu">
        <a href="/" className="menu-link">Home</a>
        <a href="/timeline" className="menu-link">Timeline</a>
      </nav>

      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-time">{event.time}</span>
            <span className="timeline-title">{event.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
