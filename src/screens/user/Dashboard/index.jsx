import Dashboard from "src/components/Dashboard";
import { userDashboardMenu } from "src/helpers/constant";

function UserDashboard() {
  return <Dashboard role="Admin" menu={userDashboardMenu} />;
}

export default UserDashboard;
