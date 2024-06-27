export interface clientNote {
  serviceName: string;
  price: number;
  payment_status: boolean;
  doctor: string;
  comment: string;
  time_of_appointment: string;
  date_of_appointment: string;
}

export const clientsNotes: clientNote[] = [
  {
    serviceName: "Чистка зубов",
    doctor: "Азамат Замиров",
    comment:
      "Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стисканием зубов.",
    time_of_appointment: "16:00",
    date_of_appointment: "22.06.2024",
    price: 1043,
    payment_status: false,
  },
  {
    serviceName: "Чистка зубов",
    doctor: "Азамат Замиров",
    comment:
      "Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стисканием зубов.",
    time_of_appointment: "16:00",
    date_of_appointment: "22.06.2024",
    price: 1043,
    payment_status: true,
  },
  {
    serviceName: "Чистка зубов",
    doctor: "Азамат Замиров",
    comment:
      "Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стисканием зубов.",
    time_of_appointment: "16:00",
    date_of_appointment: "22.06.2024",
    price: 1043,
    payment_status: false,
  },
  {
    serviceName: "Чистка зубов",
    doctor: "Азамат Замиров",
    comment:
      "Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стисканием зубов.",
    time_of_appointment: "16:00",
    date_of_appointment: "22.06.2024",
    price: 1043,
    payment_status: false,
  },
  {
    serviceName: "Чистка зубов",
    doctor: "Азамат Замиров",
    comment:
      "Повреждения зуба, воспаление десен, заболевания корневых каналов, а также проблемы с визгом или стисканием зубов.",
    time_of_appointment: "16:00",
    date_of_appointment: "22.06.2024",
    price: 1043,
    payment_status: true,
  },
];
