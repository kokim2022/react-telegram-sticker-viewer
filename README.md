# react-telegram-sticker-viewer

[![React Telegram Sticker Viewer](https://img.youtube.com/vi/aAvJIkxAPSE/0.jpg)](https://youtu.be/aAvJIkxAPSE "React Telegram Sticker Viewer")

## Install

```bash
$ npm install react-telegram-sticker-viewer
```

## Usage

For a live demo, visit: [https://kokim2022.github.io/react-telegram-sticker-viewer/](https://kokim2022.github.io/react-telegram-sticker-viewer/)

### Example

```tsx
import React, { useState } from 'react';
import ReactTelegramStickerViewer from 'react-telegram-sticker-viewer';

const App: React.FC = () => {
  const [tgsUrl, setTgsUrl] = useState<string>(
    'https://cdn.chatapi.net/stickers/telegram/1c49672ec5dbeef5cfd517996acf2bac/file_10.tgs'
  );

  return (
    <ReactTelegramStickerViewer
      tgsUrl={tgsUrl}
      // Optional: You can pass a custom CORS proxy URL if needed
      // corsProxyServerUrl="https://your-custom-cors-proxy.com/?url="
      style={{ height: '300px', width: '300px' }}
    />
  );
};

export default App;
```

## Props of Component

- **`tgsUrl`** *(required, string)*  
  The URL of the Telegram Sticker (TGS file) to be displayed.

- **`style`** *(optional, object)*  
  The style of the sticker viewer. Default is `{ height: '100px', width: '100px' }`.

- **`corsProxyServerUrl`** *(optional, string)*  
  You can provide a custom CORS proxy URL if needed. This is useful if you're encountering CORS issues when accessing the TGS URL.

## LICENSE

MIT @ [kokim2020](https://github.com/kokim2022).