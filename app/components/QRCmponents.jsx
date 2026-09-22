"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const QRGenerator = forwardRef(function QRGenerator(
  { value, width, height },
  ref
) {
  const containerRef = useRef(null);
  const qrCodeRef = useRef(null);

  useEffect(() => {
    async function loadQR() {
      const { default: QRCodeStyling } = await import("qr-code-styling");

      qrCodeRef.current = new QRCodeStyling({
        width,
        height,
        data: value,
      });

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        qrCodeRef.current.append(containerRef.current);
      }
    }

    loadQR();
  }, []);

  useEffect(() => {
    qrCodeRef.current?.update({
      data: value,
      width,
      height,
    });
  }, [value, width, height]);

  useImperativeHandle(ref, () => ({
    download(name = "my-qr-code", extension = "png") {
      qrCodeRef.current?.download({
        name,
        extension,
      });
    },

    async copy() {
      if (!qrCodeRef.current) return;

      try {
        const blob = await qrCodeRef.current.getRawData("png");

        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);

        return true;
      } catch (error) {
        console.error("Failed to copy QR code:", error);
        return false;
      }
    },
  }));

  return <div ref={containerRef} />;
});

export default QRGenerator;