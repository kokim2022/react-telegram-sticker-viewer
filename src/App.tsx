// src/App.tsx
import React, { useState, ChangeEvent } from 'react';
import ReactTelegramStickerViewer from './components/ReactTelegramStickerViewer';

// Define the structure of a predefined sticker URL
interface PredefinedSticker {
  label: string;
  url: string;
}

const App: React.FC = () => {
  const [tgsUrl, setTgsUrl] = useState<string>(
    'https://cdn.chatapi.net/stickers/telegram/1c49672ec5dbeef5cfd517996acf2bac/file_10.tgs'
  );

  // Predefined TGS URLs
  const predefinedUrls: PredefinedSticker[] = [
    {
      label: 'Sticker 3',
      url: 'https://api.telegram.org/file/bot8187950645:AAG5Q9Wq6sZQUMsphXP3lvM8k-ooKZ11w9Q/stickers/file_3.tgs',
    },
    {
      label: 'Sticker 4',
      url: 'https://api.telegram.org/file/bot8187950645:AAG5Q9Wq6sZQUMsphXP3lvM8k-ooKZ11w9Q/stickers/file_4.tgs',
    },
    {
      label: 'Sticker 5',
      url: 'https://api.telegram.org/file/bot8187950645:AAG5Q9Wq6sZQUMsphXP3lvM8k-ooKZ11w9Q/stickers/file_5.tgs',
    },
    {
      label: 'Sticker 6',
      url: 'https://api.telegram.org/file/bot8187950645:AAG5Q9Wq6sZQUMsphXP3lvM8k-ooKZ11w9Q/stickers/file_6.tgs',
    },
    {
      label: 'Sticker 7',
      url: 'https://api.telegram.org/file/bot8187950645:AAG5Q9Wq6sZQUMsphXP3lvM8k-ooKZ11w9Q/stickers/file_7.tgs',
    },
  ];

  // Handler for input change
  const handleTgsUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTgsUrl(event.target.value);
  };

  // Handler for select change
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTgsUrl(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5 p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl italic text-blue-600 dark:text-blue-400">
        Welcome To React Telegram Sticker Viewer
      </h1>

      {/* ReactTelegramStickerViewer Component */}
      <ReactTelegramStickerViewer
        tgsUrl={tgsUrl}
        // Optional: You can pass a custom CORS proxy URL if needed
        // corsProxyServerUrl="https://your-custom-cors-proxy.com/?url="
        style={{ height: '300px', width: '300px' }}
      />

      {/* Input for Custom TGS URL */}
      <div className="w-3/4 space-y-3">
        <label
          htmlFor="tgsUrl"
          className="block font-medium text-gray-700 dark:text-gray-300"
        >
          Please insert your TGS URL below:
        </label>
        <input
          type="text"
          id="tgsUrl"
          value={tgsUrl}
          onChange={handleTgsUrlChange}
          placeholder="Enter TGS file URL"
          className="bg-white dark:bg-gray-800 border border-gray-300 text-gray-900 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      {/* Dropdown for Selecting Predefined TGS URLs */}
      <div className="w-full max-w-md space-y-3">
        <label
          htmlFor="tgsUrls"
          className="block font-medium text-gray-700 dark:text-gray-300"
        >
          Select Telegram Stickers (TGS URLs)
        </label>
        <select
          id="tgsUrls"
          value={tgsUrl}
          onChange={handleSelectChange}
          className="bg-white dark:bg-gray-800 border border-gray-300 text-gray-900 dark:text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">-- Select a Sticker --</option>
          {predefinedUrls.map((sticker, index) => (
            <option key={index} value={sticker.url}>
              {sticker.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
