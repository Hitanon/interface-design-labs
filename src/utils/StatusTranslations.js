const statusTranslations = {
  "CREATED": "Создан",
  "ACCEPTED": "Принят",
  "PACKED": "Упакован",
  "SENT": "Отправлен",
  "RECEIVED": "Получен",
};

export const translateStatus = (status) => {
  return statusTranslations[status];
};
