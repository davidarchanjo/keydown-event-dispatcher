# Keydown Event Dispatcher
A utility module for dispatching keydown events in web applications. Provides predefined key codes and a function to simulate keydown events programmatically. Compatible with JavaScript and TypeScript projects.

## Installation
You can install the Keydown Event Dispatcher module via:
- `npm`
```bash
npm install keydown-event-dispatcher
```
- `pnpm`
```bash
pnpm install keydown-event-dispatcher
```
- `yarn`
```bash
yarn add keydown-event-dispatcher
```



## Usage
- In projects using the CommonJS module system
```javascript
const { triggerKeyboardEvent, KeyCodes } = require('keydown-event-dispatcher');

// Trigger an Enter key event on the document
triggerKeyboardEvent(document.body, KeyCodes.Enter);
```

- In projects using the ES6 module system
```typescript
import { triggerKeyboardEvent, KeyCodes } from 'keydown-event-dispatcher';

// Trigger an Enter key event on the document
triggerKeyboardEvent(document.body, KeyCodes.Enter);
```

## Key Codes
The module provides predefined key codes for common keyboard keys. Here are some examples:
- `KeyCodes.Enter`: Enter key
- `KeyCodes.ArrowUp`: Arrow Up key
- `KeyCodes.ArrowDown`: Arrow Down key
- ...<br>

For the full list of key codes, please refer to the source code.


## Contributing
Contributions are welcome! If you find a bug or want to suggest a feature, please open an issue on GitHub or submit a pull request.


## License
This project is licensed under the [ISC License](https://opensource.org/license/isc-license-txt).
