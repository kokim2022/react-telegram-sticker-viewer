# React Telegram Sticker Viewer
<!-- 
[![React Telegram Sticker Viewer](https://img.youtube.com/vi/8WAD7H5ApeA/0.jpg)](https://www.youtube.com/watch?v=8WAD7H5ApeA "React Telegram Sticker Viewer") -->

## Install

```bash
$ npm install react-telegram-sticker-viewer
```

## Usage

For Demo, you can see: [https://kokim2022.github.io/react-telegram-sticker-viewer](https://kokim2022.github.io/react-telegram-sticker-viewer)

```tsx
import React, { useState } from 'react';
import ReactTelegramStickerViewer from 'react-telegram-sticker-viewer';
import 'react-telegram-sticker-viewer/style.css';

const App: React.FC = () => {
  const [tgsUrl, setTgsUrl] = useState<string>('https://path-to-default.tgs');

  return (
    <div>
      <ReactTelegramStickerViewer tgsUrl={tgsUrl} style={{ height: '300px', width: '300px' }} />
      <input 
        type="text" 
        value={tgsUrl} 
        onChange={(e) => setTgsUrl(e.target.value)} 
        placeholder="Enter TGS URL" 
      />
    </div>
  );
};

export default App;
```

## Predefined Stickers Example

```tsx
const predefinedUrls = [
  { label: 'Sticker 1', url: 'https://path-to-sticker-1.tgs' },
  { label: 'Sticker 2', url: 'https://path-to-sticker-2.tgs' },
];

<select onChange={(e) => setTgsUrl(e.target.value)}>
  {predefinedUrls.map((sticker, index) => (
    <option key={index} value={sticker.url}>
      {sticker.label}
    </option>
  ))}
</select>
```

## Interfaces

```ts
interface PredefinedSticker {
  label: string;
  url: string;
}
```

## LICENSE

MIT@[kokim2020](https://github.com/kokim2020).
