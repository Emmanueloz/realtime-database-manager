import { BrowserRouter, Routes, Route } from "react-router";
import { DataBasesPage } from "../presentation/pages/DataBasesPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataBasesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
