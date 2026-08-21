import * as htmlToImage from 'html-to-image';
import confetti from 'canvas-confetti';

export interface ExportOptions {
  pixelRatio?: number;
  quality?: number;
  filename?: string;
}

export async function exportFrameToPng(
  element: HTMLElement,
  options: ExportOptions = {}
): Promise<string> {
  const pixelRatio = options.pixelRatio || 2;
  
  try {
    const dataUrl = await htmlToImage.toPng(element, {
      pixelRatio,
      quality: options.quality || 0.95,
      cacheBust: true,
      skipAutoScale: false,
      filter: (node) => {
        // filter out any controls marked with no-export class
        if (node instanceof HTMLElement && node.classList.contains('no-export')) {
          return false;
        }
        return true;
      }
    });

    return dataUrl;
  } catch (error) {
    console.error('Failed to export image with html-to-image:', error);
    throw error;
  }
}

export async function downloadFrameImage(
  element: HTMLElement,
  filename = 'snapframe_screenshot.png',
  pixelRatio = 2
): Promise<void> {
  const dataUrl = await exportFrameToPng(element, { pixelRatio, filename });
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  try {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#a855f7', '#ec4899', '#3b82f6', '#10b981']
    });
  } catch {
    // Ignore confetti errors
  }
}

export async function copyFrameToClipboard(
  element: HTMLElement,
  pixelRatio = 2
): Promise<boolean> {
  try {
    const dataUrl = await exportFrameToPng(element, { pixelRatio });
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#10b981', '#3b82f6', '#8b5cf6']
      });
      return true;
    }
    return false;
  } catch (err) {
    console.error('Clipboard write failed:', err);
    return false;
  }
}
