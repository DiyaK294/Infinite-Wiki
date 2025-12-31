
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface BookmarksSectionProps {
  bookmarks: string[];
  onSelect: (topic: string) => void;
  onRemove: (topic: string) => void;
  onClose: () => void;
}

const BookmarksSection: React.FC<BookmarksSectionProps> = ({ 
  bookmarks, 
  onSelect, 
  onRemove,
  onClose 
}) => {
  return (
    <div className="bookmarks-drawer">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Saved Topics</h3>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
      
      {bookmarks.length === 0 ? (
        <p style={{ color: '#888', margin: 0 }}>No topics saved yet. Click the star next to a topic to bookmark it.</p>
      ) : (
        <div className="bookmarks-list">
          {bookmarks.map((topic) => (
            <div key={topic} className="bookmark-item">
              <button 
                onClick={() => {
                  onSelect(topic);
                  onClose();
                }} 
                className="interactive-word"
                style={{ textTransform: 'capitalize' }}
              >
                {topic}
              </button>
              <button 
                onClick={() => onRemove(topic)} 
                className="remove-bookmark"
                title="Remove bookmark"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksSection;
