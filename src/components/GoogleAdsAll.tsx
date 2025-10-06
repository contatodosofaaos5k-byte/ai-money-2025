import GoogleAd from "@/components/GoogleAd";

/**
 * 🔹 Componente que exibe 3 blocos do AdSense na página
 */
const GoogleAdsAll = () => {
  return (
    <>
      {/* Topo */}
      <GoogleAd slot="6612452569" />

      {/* Meio */}
      <GoogleAd slot="6612452569" />

      {/* Rodapé */}
      <GoogleAd slot="6612452569" />
    </>
  );
};

export default GoogleAdsAll;
