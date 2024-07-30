import React from 'react';

import { Message } from '@/types';

const MessageBubble: React.FC<{ message: Message; isStreaming?: boolean }> = ({
  message,
  isStreaming,
}) => {
  if (message.sender === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-zinc-800 text-white rounded-lg p-3 max-w-xs lg:max-w-md">
          {message.content}
        </div>
      </div>
    );
  } else if (message.sender === 'assistant') {
    return (
      <div className="flex justify-start mb-4">
        <div
          className={`bg-gray-200 rounded-lg p-3 max-w-xs lg:max-w-md ${isStreaming ? 'animate-pulse' : ''}`}
        >
          {message.content}
          {isStreaming && <span className="inline-block animate-pulse">▋</span>}
        </div>
      </div>
    );
  }
  return null;
};

export default MessageBubble;