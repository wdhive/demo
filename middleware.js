// import { auth } from "./auth"

import { auth } from "./lib/auth";

export default auth((req) => {

    console.log("mii",req.auth.user)

    
  // req.auth
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
