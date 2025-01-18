import { IconType } from "react-icons";

export interface NavbarListsTypes {
  id: string;
  text: string;
  icon: IconType;
  path?: string;
  type: "link" | "modal";
}
