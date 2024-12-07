# Ascii Animation

## Description

Ascii Animation is a simple web application that allows users to view and control an animated ASCII art. The project demonstrates basic JavaScript animation techniques with interactive controls.

## Features

- Animated ASCII art display
- Interactive controls:
  - Start animation
  - Pause animation
  - Navigate to previous frame
  - Navigate to next frame

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Delmotte-Vincent/ascii-animation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ascii-animation
   ```

3. Open the `index.html` file in a modern web browser
    If you develop with VSCode, open index.html with Livre Server extension

## Usage

- **Start Button**: Begin the automatic animation sequence
- **Pause Button**: Stop the current animation
- **Previous Button**: Navigate to the previous frame
- **Next Button**: Navigate to the next frame

## Project Structure

```
animated-frames/
│
├── index.html                  # Main HTML file
├── styles.css                  # Styling for the application
├── scripts.js                  # Main JavaScript logic
├── frames/
│   └── gymStick.js             # ASCII art frames for the animation
└── utils
    └── generateHtmlFrame.js    # Function that generate HTML frames
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)

## Potential Improvements

- Add more animation sequences
- Implement speed control
- Add responsive design

## License

Distributed under the MIT License. See `LICENSE` for more information.
