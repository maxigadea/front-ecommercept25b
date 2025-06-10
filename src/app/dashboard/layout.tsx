import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section><Link href="/dashboard">Profile</Link><Link href="/dashboard/orders">Orders</Link>{children}</section>;
}
