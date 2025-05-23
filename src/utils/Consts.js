// Routes
export const MAIN_ROUTE = "/";
export const CATEGORIES_ROUTE = "/categories";
export const PRODUCTS_ROUTE = "/products";
export const SEARCH_PRODUCTS_BY_ALL_CATEGORIES_ROUTE = `${PRODUCTS_ROUTE}/search`;
export const PRODUCT_ROUTE = `${PRODUCTS_ROUTE}/:id`;
export const PROFILE_ROUTE = "/profile";
export const LOGIN_ROUTE = "/login";
export const LOGOUT_ROUTE = "/logout";
export const REGISTRATION_ROUTE = "/registration";
export const SELLERS_ROUTE = "/sellers";
export const SELLER_ROUTE = `${SELLERS_ROUTE}/:id`;
export const PURCHASE_ORDER_ROUTE = "/cart";
export const SEARCH_PRODUCTS_ROUTE = `${PRODUCTS_ROUTE}/search`;
export const EDIT_PRODUCT_ROUTE = `${PRODUCTS_ROUTE}/:id/edit`;
export const CREATE_PRODUCT_ROUTE = `${PRODUCTS_ROUTE}/create`;
export const ABOUT_US_ROUTE = "/about";

// Admin routes
export const ADMIN_ROUTE = "/admin";
export const ADMIN_NEW_PRODUCTS_ROUTE = "/admin/new-products";
export const ADMIN_NEW_PRODUCT_VIEW_ROUTE = "/admin/new-products/:id";
export const ADMIN_USERS_ROUTE = "/admin/users";
export const ADMIN_SELLERS_ROUTE = "/admin/sellers";

// Settings
export const DEFAULT_TOP_CATEGORIES_COUNT = 5;
export const DEFAULT_TOP_PRODUCTS_COUNT = 3;
export const COMMENTS_PER_PAGE = 10;
export const PRODUCTS_PER_PAGE = 8;
export const ORDERS_PER_PAGE = 8;

// UI
export const LIST_CATEGORIES_BUTTON_TEXT = "Категории";
export const SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT = "Поиск";
export const ADD_TO_CART_BUTTON_TEXT = "Добавить в корзину";
export const PLACE_AN_ORDER_BUTTON_TEXT = "Оформить заказ";
export const PURCHASE_BUTTON_TEXT = "Заказать";
export const LOGIN_BUTTON_TEXT = "Войти";
export const LOGOUT_BUTTON_TEXT = "Выйти";
export const REGISTRATION_BUTTON_TEXT = "Зарегистрироваться";
export const PROFILE_BUTTON_TEXT = "Профиль";
export const HELLO_MESSAGE_TEXT = "Здравствуйте";
export const DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT = "Регистрация";
export const HAVE_AN_ACCOUNT_BUTTON_TEXT = "Войти";
export const EMAIL_FIELD_LABEL = "Электронная почта";
export const USERNAME_FIELD_LABEL = "Имя";
export const PASSWORD_FIELD_LABEL = "Пароль";
export const LOGIN_FORM_TITLE = "ВХОД";
export const REGISTRATION_FORM_TITLE = "РЕГИСТРАЦИЯ";
export const EDIT_COMMENT_BUTTON_TEXT = "Изменить отзыв";
export const CREATE_COMMENT_BUTTON_TEXT = "Оставить отзыв";
export const DELETE_COMMENT_BUTTON_TEXT = "Удалить отзыв";
export const TOP_PRODUCTS_LABEL = "Лучшие товары";
export const TOP_CATEGORIES_LABEL = "Лучшие категории";
export const SEARCH_PRODUCTS_LABEL = "Поиск";
export const MOVE_TO_CART_BUTTON_TEXT = "Перейти в корзину";
export const INCREASE_QUANTITY_BUTTON_TEXT = "+";
export const DECREASE_QUANTITY_BUTTON_TEXT = "-";
export const APPLY_FILTERS_BUTTON_TEXT = "Применить";
export const CLEAR_FILTERS_BUTTON_TEXT = "Очистить";
export const CATEGORY_FILTER_LABEL = "Категория";
export const PRICE_FILTER_LABEL = "Цена";
export const LOWER_PRICE_FILTER_LABEL = "Цена от";
export const UPPER_PRICE_FILTER_LABEL = "Цена до";
export const RATING_FILTER_LABEL = "Рейтинг";
export const LOWER_RATING_FILTER_LABEL = "Рейтинг от";
export const UPPER_RATING_FILTER_LABEL = "Рейтинг до";
export const LOGIN_ERROR_MODAL_MESSAGE = "Неверная почта или пароль";
export const REGISTRATION_ERROR_MODAL_MESSAGE = "Ошибка регистрации";

// Enums
export const ROLE = {
  CUSTOMER: "customer",
  SELLER: "seller",
  ADMIN: "admin",
};

export const PRODUCT_ORDERS_OPTIONS = [
  {
    id: 1,
    name: "По рейтингу ↓",
    codename: "desc-rating",
  },
  {
    id: 2,
    name: "По рейтингу ↑",
    codename: "asc-rating",
  },
  {
    id: 3,
    name: "По цене ↓",
    codename: "desc-price",
  },
  {
    id: 4,
    name: "По цене ↑",
    codename: "asc-price",
  },
];

// Mocks
export const MOCK_IMAGE_URL = "https://ir.ozone.ru/s3/multimedia-u/wc1000/6593475438.jpg";
export const BASE_API_URL = process.env.REACT_APP_API_URL || "http://0.0.0.0:8000";
