import cookie from "cookie";

export default function cookieParser(req: { headers: { cookie: any } }) {
  return cookie.parse(req ? req.headers.cookie || "" : "");
}
