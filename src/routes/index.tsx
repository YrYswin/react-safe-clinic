import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Auth from "../components/auth/Auth";

const AnalyticsPage = React.lazy(() => import("../views/AnalyticsPage"));
const DoctorsListPage = React.lazy(() => import("../views/DoctorsListPage"));
const BranchesListPage = React.lazy(() => import("../views/BranchesListPage"));
const PatientsListPage = React.lazy(() => import("../views/PatientsListPage"));
const ServicesListPage = React.lazy(() => import("../views/ServicesListPage"));
const CalendarPage = React.lazy(() => import("../views/CalendarPage"));
const NotificationPage = React.lazy(() => import("../views/NotificationPage"));
const SettingsPage = React.lazy(() => import("../views/SettingsPage"));
const ProfilePage = React.lazy(() => import("../views/ProfilePage"));
const MyNotesList = React.lazy(() => import("../views/MyNotesList"));
const MyPaymentsList = React.lazy(() => import("../views/MyPaymentsList"));
const HomePage = React.lazy(() => import("../views/HomePage"));

MyNotesList;
MyPaymentsList;
import { NavigateList } from "../utils/constant";
import NonePage from "../views/NonePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "admin",
    element: <Layout navList={NavigateList.admin} />,
    children: [
      {
        index: true,
        path: "",
        element: <NonePage navArray={NavigateList.admin} />,
      },
      {
        path: "analytics",
        element: (
          <React.Suspense>
            <AnalyticsPage />
          </React.Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <React.Suspense>
            <ServicesListPage />
          </React.Suspense>
        ),
      },
      {
        path: "doctors-list",
        element: (
          <React.Suspense>
            <DoctorsListPage />
          </React.Suspense>
        ),
      },
      {
        path: "patients-list",
        element: (
          <React.Suspense>
            <PatientsListPage />
          </React.Suspense>
        ),
      },
      {
        path: "branches-list",
        element: (
          <React.Suspense>
            <BranchesListPage />
          </React.Suspense>
        ),
      },
      {
        path: "notification",
        element: (
          <React.Suspense>
            <NotificationPage />
          </React.Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <React.Suspense>
            <SettingsPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "doctor",
    element: <Layout navList={NavigateList.doctor} />,
    children: [
      {
        index: true,
        path: "",
        element: <NonePage navArray={NavigateList.doctor} />,
      },
      {
        path: "calendar",
        element: (
          <React.Suspense>
            <CalendarPage />
          </React.Suspense>
        ),
      },
      {
        path: "analytics",
        element: (
          <React.Suspense>
            <AnalyticsPage />
          </React.Suspense>
        ),
      },
      {
        path: "patients-list",
        element: (
          <React.Suspense>
            <PatientsListPage />
          </React.Suspense>
        ),
      },
      {
        path: "notification",
        element: (
          <React.Suspense>
            <NotificationPage />
          </React.Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <React.Suspense>
            <SettingsPage />
          </React.Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <React.Suspense>
            <ProfilePage isDoctor />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "director",
    element: <Layout navList={NavigateList.director} />,
    children: [
      {
        index: true,
        path: "",
        element: <NonePage navArray={NavigateList.director} />,
      },
      {
        path: "analytics",
        element: (
          <React.Suspense>
            <AnalyticsPage />
          </React.Suspense>
        ),
      },
      {
        path: "doctors-list",
        element: (
          <React.Suspense>
            <DoctorsListPage />
          </React.Suspense>
        ),
      },
      {
        path: "branches-list",
        element: (
          <React.Suspense>
            <BranchesListPage />
          </React.Suspense>
        ),
      },
      {
        path: "notification",
        element: (
          <React.Suspense>
            <NotificationPage />
          </React.Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <React.Suspense>
            <SettingsPage />
          </React.Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <React.Suspense>
            <ProfilePage isDirector />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "client",
    element: <Layout navList={NavigateList.client} />,
    children: [
      {
        index: true,
        path: "",
        element: <NonePage navArray={NavigateList.client} />,
      },
      {
        path: "my-notes",
        element: (
          <React.Suspense>
            <MyNotesList />
          </React.Suspense>
        ),
      },
      {
        path: "my-payments",
        element: (
          <React.Suspense>
            <MyPaymentsList />
          </React.Suspense>
        ),
      },
      {
        path: "notification",
        element: (
          <React.Suspense>
            <NotificationPage />
          </React.Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <React.Suspense>
            <SettingsPage />
          </React.Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <React.Suspense>
            <ProfilePage isClient />
          </React.Suspense>
        ),
      },
    ],
  },
]);
