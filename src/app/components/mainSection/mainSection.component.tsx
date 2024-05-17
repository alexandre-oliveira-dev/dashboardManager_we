import React, {ReactNode} from "react";
import "./style.css";

interface Props {
  components: JSX.Element;
}

export default function MainSectionComponent({components}: Props) {
  return <section className="main-container">{components}</section>;
}
