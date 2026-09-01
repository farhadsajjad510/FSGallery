import MainLayout from "./layouts/MainLayout";
import PermissionGate from "./components/PermissionGate";
import { SearchProvider } from "./components/SearchContext";

export default function App() {
  return (
    <SearchProvider>
      <PermissionGate />
      <MainLayout />
    </SearchProvider>
  );
}
