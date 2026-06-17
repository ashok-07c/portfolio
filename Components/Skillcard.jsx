import React from 'react';

export default function SkillCard({ name, progress }) {
  const numericProgress = progress || 0;
  const cleanProgress = Math.min(100, Math.max(0, numericProgress));

  return (
    <div className="progress-container" style={{ width: '100%' }}>
      <div className="progress-labels">
        <span className="progress-name">{name}</span>
        <span className="progress-percentage">{cleanProgress}%</span>
      </div>

      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{ width: `${cleanProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
