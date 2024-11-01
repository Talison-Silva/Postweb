import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApplyProviders } from "@/app/contexts/ApplyProviders.tsx";
import { routes } from "@/app/routes/routes.tsx";

export const AppRoutes = ({}) => {
  let apply: any = [];

  routes.map(({ path, element }, key) => {
    apply.push(<Route exact path={String(path)} element={element} key={key} />);
  });

  return (
    <Router>
      <ApplyProviders>
        <Routes children={apply} />
      </ApplyProviders>
    </Router>
  );
};
