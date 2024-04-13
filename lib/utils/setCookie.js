import cookies from 'js-cookie';

function setCookie(name, value, expires, path) {
  cookies.set(name, value, { expires, path });
}

export default setCookie;
