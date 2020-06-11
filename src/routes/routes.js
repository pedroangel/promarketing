import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/games",
    children: [
      {
        path: "games",
        name: "Promarketing-Chile: Games",
        component: Dashboard
      }
    ]
  }
];

export default routes;
