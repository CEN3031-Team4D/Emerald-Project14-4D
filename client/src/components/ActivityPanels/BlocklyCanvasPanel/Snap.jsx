import React, { useEffect } from 'react';

export default function Snap() {
  useEffect(() => {
    const initializeSnap = () => {
      const iframe = document.getElementById('snap-iframe');
      iframe.addEventListener('load', () => {
        const ide = iframe.contentWindow.world.children[0];
        console.log('ide:', ide);
      });
    };

    initializeSnap();
  }, []);

  return (
    <iframe
      id="snap-iframe"
      title="Snap! Canvas"
      width="95%"
      height="650px"
      position="relative"
      flex="6"
      margin="auto"
      src="https://snap.berkeley.edu/snap/snap.html"
    />
  );
}
