import Dashboard from "src/components/Dashboard";
import { adminDashboardMenu } from "src/helpers/constant";

function AdminDashboard() {
  return <Dashboard menu={adminDashboardMenu} />;
}

export default AdminDashboard; 
