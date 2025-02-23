'use client';

import { DashboardContent } from './components/DashboardContent';

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardContent>{children}</DashboardContent>;
} 