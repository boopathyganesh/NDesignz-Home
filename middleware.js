import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = function (req) {
  const { pathname } = req.nextUrl;
  const maintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  // Exclude /maintenance and static assets from middleware logic
  const isMaintenancePage = pathname === "/maintenance";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return NextResponse.next(); // Auth will be checked in authorized()
  }

  if (maintenanceMode && !isMaintenancePage) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
};

export default withAuth(middleware, {
  callbacks: {
    authorized: ({ token, req }) => {
      const pathname = req.nextUrl.pathname;
      if (pathname.startsWith("/admin")) {
        return !!token;
      }
      return true; // All others allowed
    },
  },
});

export const config = {
  matcher: ["/((?!_next|favicon.ico|api/auth|maintenance|images/*).*)"], // Skip static assets & /maintenance
};
