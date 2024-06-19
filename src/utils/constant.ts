import {
  NavigateListState,
  searchParamsState,
  tagState,
  HourState,
} from "./types";

export const NavigateList: NavigateListState = {
  admin: [
    {
      pathname: "analytics",
      name: "Аналитика",
      icon: "/icon/navigateIcon/analytics.svg",
    },
    {
      pathname: "services",
      name: "Услуги",
      icon: "/icon/navigateIcon/services.svg",
    },
    {
      pathname: "doctors-list",
      name: "Список Врачей",
      icon: "/icon/navigateIcon/doctors.svg",
    },
    {
      pathname: "patients-list",
      name: "Список пациентов",
      icon: "/icon/navigateIcon/patients.svg",
    },
    {
      pathname: "branches-list",
      name: "Филиалы",
      icon: "/icon/navigateIcon/branches.svg",
    },
    {
      pathname: "notification",
      name: "Уведомления",
      icon: "/icon/navigateIcon/notification.svg",
    },
    {
      pathname: "settings",
      name: "Настройки",
      icon: "/icon/navigateIcon/settings.svg",
    },
  ],
  doctor: [
    {
      pathname: "calendar",
      name: "Календарь",
      icon: "/icon/navigateIcon/calendarPageIcon.svg",
    },
    {
      pathname: "analytics",
      name: "Аналитика",
      icon: "/icon/navigateIcon/analytics.svg",
    },
    {
      pathname: "patients-list",
      name: "Список пациентов",
      icon: "/icon/navigateIcon/patients.svg",
    },
    {
      pathname: "notification",
      name: "Уведомления",
      icon: "/icon/navigateIcon/notification.svg",
    },
    {
      pathname: "settings",
      name: "Настройки",
      icon: "/icon/navigateIcon/settings.svg",
    },
  ],
  director: [
    {
      pathname: "analytics",
      name: "Аналитика",
      icon: "/icon/navigateIcon/analytics.svg",
    },
    {
      pathname: "doctors-list",
      name: "Список Врачей",
      icon: "/icon/navigateIcon/doctors.svg",
    },
    {
      pathname: "branches-list",
      name: "Филиалы",
      icon: "/icon/navigateIcon/branches.svg",
    },
    {
      pathname: "notification",
      name: "Уведомления",
      icon: "/icon/navigateIcon/notification.svg",
    },
    {
      pathname: "settings",
      name: "Настройки",
      icon: "/icon/navigateIcon/settings.svg",
    },
  ],
};
export const doctorsSearch: searchParamsState[] = [
  {
    key: "1",
    label: "Пол",
    children: [
      {
        key: "1-1",
        label: "Мужской",
      },
      {
        key: "1-2",
        label: "Женский",
      },
    ],
  },
  {
    key: "2",
    label: "Теги",
    children: [
      {
        key: "2-1",
        label: "Директор",
      },
      {
        key: "2-2",
        label: "Администратор",
      },
      {
        key: "2-3",
        label: "Стаматолог",
      },
      {
        key: "2-4",
        label: "Рентгенолог",
      },
      {
        key: "2-5",
        label: "Педиатор",
      },
      {
        key: "2-6",
        label: "Хирург",
      },
      {
        key: "2-7",
        label: "Пациент",
      },
    ],
  },
  {
    key: "3",
    label: "Возраст",
    children: [
      {
        key: "3-1",
        label: "от  20 до 30",
      },
      {
        key: "3-2",
        label: "от 30 до 40",
      },
      {
        key: "3-3",
        label: "от  40 до 50",
      },
    ],
  },
];
export const patinetsSearch: searchParamsState[] = [
  {
    key: "1",
    label: "Пол",
    children: [
      {
        key: "1-1",
        label: "Мужской",
      },
      {
        key: "1-2",
        label: "Женский",
      },
    ],
  },
  {
    key: "3",
    label: "Возраст",
    children: [
      {
        key: "3-1",
        label: "до 20",
      },
      {
        key: "3-2",
        label: "от 20 до 30",
      },
      {
        key: "3-3",
        label: "от 30 до 40",
      },
      {
        key: "3-4",
        label: "от 40 до 50",
      },
      {
        key: "3-5",
        label: "от 50",
      },
    ],
  },
];
export const tagArray: tagState[] = [
  { id: 1, name: "Директор", label: "2-1" },
  { id: 2, name: "Администратор", label: "2-2" },
  { id: 3, name: "Стаматолог", label: "2-3" },
  { id: 4, name: "Рентгенолог", label: "2-4" },
  { id: 5, name: "Педиатор", label: "2-5" },
  { id: 6, name: "Хирург", label: "2-6" },
  { id: 7, name: "Пациент", label: "2-7" },
];
export const Time_POINT: string[] = [
  "08:00-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
];
export const HourArray: HourState[] = [
  {
    id: 1,
    time: "09:00",
    duration: 30,
  },
  {
    id: 2,
    time: "09:30",
    duration: 30,
  },
  {
    id: 3,
    time: "10:00",
    duration: 30,
  },
  {
    id: 4,
    time: "10:30",
    duration: 30,
  },
  {
    id: 5,
    time: "11:00",
    duration: 30,
  },
  {
    id: 6,
    time: "11:30",
    duration: 30,
  },
  {
    id: 7,
    time: "12:00",
    duration: 30,
  },
  {
    id: 8,
    time: "12:30",
    duration: 30,
  },
  {
    id: 9,
    time: "13:00",
    duration: 30,
  },
  {
    id: 10,
    time: "13:30",
    duration: 30,
  },
  {
    id: 11,
    time: "14:00",
    duration: 30,
  },
  {
    id: 12,
    time: "14:30",
    duration: 30,
  },
  {
    id: 13,
    time: "15:00",
    duration: 30,
  },
  {
    id: 14,
    time: "15:30",
    duration: 30,
  },
  {
    id: 15,
    time: "16:00",
    duration: 30,
  },
  {
    id: 16,
    time: "16:30",
    duration: 30,
  },
  {
    id: 17,
    time: "17:00",
    duration: 30,
  },
  {
    id: 18,
    time: "17:30",
    duration: 30,
  },
  {
    id: 19,
    time: "18:00",
    duration: 30,
  },
  {
    id: 20,
    time: "18:30",
    duration: 30,
  },
  {
    id: 21,
    time: "19:00",
    duration: 30,
  },
  {
    id: 22,
    time: "19:30",
    duration: 30,
  },
];
export const weekArray: string[] = ["Пн", "ВТ", "Ср", "Чт", "Пт", "Сб"];
