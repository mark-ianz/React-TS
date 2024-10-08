import { Outlet } from "react-router-dom";

type LayoutProps = {};

export default function DefaultLayout({}: LayoutProps) {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
