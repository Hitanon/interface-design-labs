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

// Settings
export const DEFAULT_TOP_CATEGORIES_COUNT = 5;
export const DEFAULT_TOP_ITEMS_COUNT = 5;

// UI
export const LIST_CATEGORIES_BUTTON_TEXT = "Категории";
export const SEARCH_PRODUCTS_BY_ALL_CATEGORIES_TEXT = "Поиск по всем категориям";
export const ADD_TO_CART_BUTTON_TEXT = "Добавить в корзину";
export const PLACE_AN_ORDER_BUTTON_TEXT = "Оформить заказ";
export const PURCHASE_BUTTON_TEXT = "Оформить";
export const LOGIN_BUTTON_TEXT = "Войти";
export const LOGOUT_BUTTON_TEXT = "Выйти";
export const REGISTRATION_BUTTON_TEXT = "Регистрация";
export const PROFILE_BUTTON_TEXT = "Профиль";
export const HELLO_MESSAGE_TEXT = "Здравствуйте";
export const DOESNT_HAVE_AN_ACCOUNT_BUTTON_TEXT = "Нет аккаунта?";
export const HAVE_AN_ACCOUNT_BUTTON_TEXT = "Есть аккаунт?";
export const EMAIL_FIELD_LABEL = "Электронная почта";
export const USERNAME_FIELD_LABEL = "Имя";
export const PASSWORD_FIELD_LABEL = "Пароль";
export const LOGIN_FORM_TITLE = "Авторизация";
export const REGISTRATION_FORM_TITLE = "Авторизация";
export const EDIT_COMMENT_BUTTON_TEXT = "Изменить комментарий";
export const CREATE_COMMENT_BUTTON_TEXT = "Оставить комментарий";
export const DELETE_COMMENT_BUTTON_TEXT = "Удалить комментарий";
export const TOP_PRODUCTS_LABEL = "Лучшие товары";
export const TOP_CATEGORIES_LABEL = "Лучшие категории";

// Enums
export const ROLE = {
  CUSTOMER: "customer",
  SELLER: "seller",
};
