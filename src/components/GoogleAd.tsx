import { useEffect } from "react";

interface GoogleAdProps {
  slot: string;
  className?: string;
}

const GoogleAd = ({ slot, className = "" }: GoogleAdProps) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Erro ao carregar o AdSense:", err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{
        display: "block",
        margin: "40px 0",
        textAlign: "center",
      }}
      data-ad-client="ca-pub-6354449398755891"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAd;
