document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
  
    if (generateButton) {
      generateButton.addEventListener('click', function() {
        generateEmojiArt();
      });
    }
  });
  
  function generateEmojiArt() {
    const textInput = document.getElementById('textInput').value;
    const emojiArtResult = document.getElementById('emojiArtResult');
  
    if (!textInput.trim()) {
      emojiArtResult.innerHTML = 'Please enter some text.';
      return;
    }
  
    const emojiArt = convertTextToEmojiArt(textInput);
    emojiArtResult.innerHTML = emojiArt;
  }
  
  function convertTextToEmojiArt(text) {
    const emojiMap = {
      'a': '😀',
      'b': '🌟',
      'c': '🍀',
      'd': '🌈',
      'e': '❤️',
      'f': '🚀',
      'g': '🌺',
      'h': '🌟',
      'i': '🎈',
      'j': '🌈',
      'k': '🌈',
      'l': '💡',
      'm': '🌙',
      'n': '🍎',
      'o': '🍭',
      'p': '🌷',
      'q': '🏰',
      'r': '🌹',
      's': '☀️',
      't': '🌈',
      'u': '🍦',
      'v': '🌟',
      'w': '💛',
      'x': '❌',
      'y': '🎨',
      'z': '💤',
      ' ': '  ',  // adding extra space to separate characters
    };
  
    return text.toLowerCase().split('').map(char => emojiMap[char] || char).join(' ');
  }
  