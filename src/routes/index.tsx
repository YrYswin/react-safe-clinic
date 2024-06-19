import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import {
  AnalyticsPage,
  DoctorsListPage,
  BranchesListPage,
  PatientsListPage,
  ServicesListPage,
  CalendarPage,
  NotificationPage,
  SettingsPage,
  Profile,
} from "../views";
import Auth from "../components/auth/Auth";
import { NavigateList } from "../utils/constant";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "admin",
    element: <Layout navList={NavigateList.admin} />,
    children: [
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "services",
        element: <ServicesListPage />,
      },
      {
        path: "doctors-list",
        element: <DoctorsListPage />,
      },
      {
        path: "patients-list",
        element: <PatientsListPage />,
      },
      {
        path: "branches-list",
        element: <BranchesListPage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "doctor",
    element: <Layout navList={NavigateList.doctor} />,
    children: [
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "patients-list",
        element: <PatientsListPage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "director",
    element: <Layout navList={NavigateList.director} />,
    children: [
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "doctors-list",
        element: <DoctorsListPage />,
      },
      {
        path: "branches-list",
        element: <BranchesListPage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "profile",
        element: <div>Director Profile Page</div>,
      },
    ],
  },
]);
