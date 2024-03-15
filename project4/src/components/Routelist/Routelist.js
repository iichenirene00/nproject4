import Analytic from "../../pages/Analytic";
import Sign from "../../pages/Sign";
import CRM from "../../pages/CRM";
import Create from "../../pages/Create";
import { useRoutes } from "react-router-dom";
const route = [
  { path: "/", element: <Analytic /> },
  { path: "/CRM", element: <CRM /> },
  { path: "/Sign", element: <Sign /> },
  { path: "/Create", element: <Create /> },
];

export default function Wraprouter() {
  const element = useRoutes(route);
  return element;
}
