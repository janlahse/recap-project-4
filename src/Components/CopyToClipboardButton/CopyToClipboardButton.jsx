import { useEffect, useState } from "react";

export function CopyToClipboardButton({ text }) {
  const [confirmCopy, setConfirmCopy] = useState(false);

  async function CopyToClipboard() {
    await navigator.clipboard.writeText(text);
    setConfirmCopy(true);
  }

  useEffect(() => {
    let timerID;
    if (confirmCopy) {
      setTimeout(() => {
        timerID = setConfirmCopy(false);
      }, 3000);
    }
    return clearTimeout(timerID);
  }, [confirmCopy]);

  return confirmCopy ? (
    <button>Copied to clipboard!</button>
  ) : (
    <button onClick={CopyToClipboard}>Copy</button>
  );
}
