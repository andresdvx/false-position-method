# False Position Method

## Overview
The **False Position Method** (also known as the *Regula Falsi Method*) is a numerical method used to solve equations of the form `f(x) = 0`. It is an iterative root-finding algorithm that combines the concepts of the bisection method and linear interpolation to approximate the roots of a function.

This repository contains an implementation of the False Position Method, primarily written in **TypeScript**, with supplementary **CSS** and **HTML** for any associated UI or frontend components.

## Features
- Efficient root-finding algorithm implementation.
- TypeScript codebase for type safety and maintainability.
- User-friendly frontend interface powered by HTML and CSS.
- Modular and reusable code structure.

## Usage
### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/andresdvx/false-position-method.git
   cd false-position-method
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
To start the project locally:
```bash
npm start
```

### Example
Provide an example of how to use the method in your project. For instance:
```typescript
import { falsePosition } from './path-to-your-method';

// Define the function and the interval
const f = (x: number) => Math.pow(x, 2) - 4; // Example function: f(x) = x^2 - 4
const root = falsePosition(f, 0, 3);
console.log("Root found:", root);
```

## File Structure
- **`src/`**: Contains the TypeScript implementation of the False Position Method.
- **`public/`**: Contains the HTML and CSS files for the frontend interface.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git commit -m "Add your message"
   git push origin feature/your-feature-name
   ```
4. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
