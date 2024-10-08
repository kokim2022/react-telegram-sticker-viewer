// src/components/ReactTelegramStickerViewer.tsx
import React, { useEffect, useState } from 'react';
import { ungzip } from 'pako';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

// Define the props interface
interface ReactTelegramStickerViewerProps {
  tgsUrl: string;
  corsProxyServerUrl?: string;
  style?: React.CSSProperties;
}

// Define the default CORS proxy URL
const DEFAULT_CORS_PROXY =
  'https://u60ta2bi82.execute-api.ap-southeast-1.amazonaws.com/cors-server?url=';

const ReactTelegramStickerViewer: React.FC<ReactTelegramStickerViewerProps> = ({
  tgsUrl,
  corsProxyServerUrl = DEFAULT_CORS_PROXY,
  style = { height: '100px', width: '100px' },
}) => {
  const [lottieJson, setLottieJson] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!tgsUrl) {
      setLottieJson(null);
      setError(null);
      return;
    }

    // Reset error and set loading state
    setError(null);
    setLoading(true);

    // Validate URL ends with .tgs
    if (!tgsUrl.endsWith('.tgs')) {
      setError('Invalid URL: The URL does not end with .tgs');
      setLottieJson(null);
      setLoading(false);
      return;
    }

    // Fetch the .tgs file through the CORS proxy
    fetch(corsProxyServerUrl + encodeURIComponent(tgsUrl))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.arrayBuffer();
      })
      .then((buffer) => {
        if (buffer instanceof ArrayBuffer) {
          try {
            const decompressed = ungzip(new Uint8Array(buffer));
            const data = new TextDecoder('utf-8').decode(decompressed);
            const lottieJsonData: object = JSON.parse(data);
            setLottieJson(lottieJsonData);
            console.log('lottieJsonData', lottieJsonData);
          } catch (err) {
            console.log('tgs fetch error', err)
            throw new Error('Error decompressing or parsing the .tgs file.');
          }
        } else {
          throw new Error('Received data is not an ArrayBuffer.');
        }
      })
      .catch((error: Error) => {
        console.error('Error fetching or parsing .tgs file:', error);
        setError(error.message);
        setLottieJson(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tgsUrl, corsProxyServerUrl]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Display Loading Indicator */}
      {loading && <p className="text-blue-500">Loading...</p>}

      {/* Display Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Lottie Player */}
      {lottieJson && (
        <Player autoplay loop src={lottieJson} style={style}>
          <Controls
            visible={false}
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      )}
    </div>
  );
};

export default ReactTelegramStickerViewer;
