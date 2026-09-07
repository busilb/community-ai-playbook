import { getRoleById } from "@/lib/roles";
import { getScenariosByRole } from "@/lib/scenarios";
import RolePage from "@/components/RolePage";
import { notFound } from "next/navigation";

export default function SeniorPage() {
  const role = getRoleById("senior");
  if (!role) return notFound();
  const scenarios = getScenariosByRole("senior");
  return <RolePage role={role} scenarios={scenarios} />;
}
