"use client";

import { useEffect, useRef } from "react";

export default function QRGenerator({ value,width,height }) {
  const containerRef = useRef(null);
  const qrCodeRef = useRef(null);

  useEffect(() => {
    async function loadQR() {
      const { default: QRCodeStyling } = await import("qr-code-styling");

      qrCodeRef.current = new QRCodeStyling({
        width: width,
        height: height,
        data: value,
      });

      qrCodeRef.current.append(containerRef.current);
    }

    loadQR();
  }, []);

  useEffect(() => {
    qrCodeRef.current?.update({
      data: value,
    });
  }, [value]);


  

  return <div ref={containerRef} />;
}