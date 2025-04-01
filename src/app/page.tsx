import Home from "@/components/layouts/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Petlyfe Indonesia`,
  description: `Beranda Landing Page Petlyfe Indonesia`,
  openGraph: {
    title: `Petlyfe Indonesia`,
    description: `Beranda Landing Page Petlyfe Indonesia`,
    authors: `Arnawa Digital`,
  },
};

export default function HomePage() {
  return <Home />;
}
