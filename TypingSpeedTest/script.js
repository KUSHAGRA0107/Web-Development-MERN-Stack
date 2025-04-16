const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.content .result-details .time');
const mistake = document.querySelector('.content .result-details .mistake');
const wpm = document.querySelector('.content .result-details .wpm');
const cpm = document.querySelector('.content .result-details .cpm');
const button = document.querySelector('.button');

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakeCount = 0;
let isTyping = false;

function loadParagraph() {
    const paragraph = [
        "The city hums with a vibrant energy, a constant pulse of activity that never seems to cease.",
        "In stark contrast to the city's clamor, nature offers a sanctuary of peace and tranquility.",
        "Friendship is a bond that transcends time and distance, a source of comfort and support in times of need.",
        "The pursuit of knowledge is a journey that never ends, a constant exploration of the unknown.",
        "Family is the foundation upon which our lives are built, a source of love, support, and belonging.",
        "Art has the power to move us, to inspire us, and to challenge our perceptions of the world.",
        "Nature's beauty is a constant source of wonder and inspiration.",
        "Life is filled with challenges and obstacles, but it is through perseverance that we can overcome them.",
        "Kindness is a simple act that can have a profound impact on the world."
    ];

    const size = paragraph.length;
    const index = Math.floor(Math.random() * size);
    const paragraphText = paragraph[index];

    typingText.innerHTML = '';

    for (const char of paragraphText) {
        typingText.innerHTML += `<span>${char}</span>`;
    }

    // Highlight the first character
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', () => input.focus());
    typingText.addEventListener('click', () => input.focus());


}

function initTyping() {
    const charElements = typingText.querySelectorAll('span');
    const typedCharacter = input.value.charAt(charIndex);

    if (charIndex < charElements.length && timeLeft > 0) {
        if (charElements[charIndex].innerHTML === typedCharacter) {
            charElements[charIndex].classList.add('correct');
        } else {
            mistakeCount++;
            charElements[charIndex].classList.add('incorrect');
        }
        charIndex++;
        mistake.textContent = mistakeCount; // Ensure mistake count updates properly
    }
}


input.addEventListener("input", initTyping);
loadParagraph();
