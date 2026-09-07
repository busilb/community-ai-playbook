import { getRoleById } from "@/lib/roles";
import { getScenariosByRole } from "@/lib/scenarios";
import RolePage from "@/components/RolePage";
import { notFound } from "next/navigation";

export default function KidsPage() {
  const role = getRoleById("kids");
  if (!role) return notFound();
  const scenarios = getScenariosByRole("kids");
  return <RolePage role={role} scenarios={scenarios} />;
}
