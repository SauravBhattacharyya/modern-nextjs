import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Live demo: rename this file to proxy.ts and export function proxy() instead of middleware()

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-demo-proxy", "active");
  return response;
}

export const config = {
  matcher: "/proxy/destination",
};
