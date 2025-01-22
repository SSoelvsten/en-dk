import React from 'react';
import './RoundButton.scss';

interface RoundButtonProps {
  onClick: () => void;
  emoji: string;
  emojiRotate?: number;
  title: string;
};

const RoundButton = ({ onClick, emoji, emojiRotate, title }: RoundButtonProps) =>
  <button className="RoundButton" onClick={onClick} title={title}>
    <span className="Icon"
          style={{
            transform: `rotate(${emojiRotate ? emojiRotate : 0}deg)`,
            paddingBottom: emojiRotate && emojiRotate % 90 === 0 ? `0.25rem` : 0
          }}
    >
      {emoji}
    </span>
  </button>;

export default RoundButton;