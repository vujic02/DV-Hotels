// const DefaultUrl = "https://dv-hotels.herokuapp.com/";
const DefaultUrl = "http://localhost:3001/";
const SignUpUrl = DefaultUrl + "api/signup";
const LoginUrl = DefaultUrl + "api/login";

const UserUrl = (userEmail) => {
  return DefaultUrl + `api/users/${userEmail}`;
};

export { DefaultUrl, SignUpUrl, LoginUrl, UserUrl };
