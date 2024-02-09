import { SectionBackground } from "@/app/genericComponents/General";
import { Primary500 } from "@/app/genericComponents/tokens";

export default function Footer() {
  return (
    <SectionBackground specialBackground={Primary500}>
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          color: "white",
        }}
      >
        {" "}
        Footer is in progress...{" "}
      </div>
    </SectionBackground>
  );
}
