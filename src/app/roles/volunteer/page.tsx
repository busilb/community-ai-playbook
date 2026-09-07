import { getRoleById } from "@/lib/roles";
import { getScenariosByRole } from "@/lib/scenarios";
import RolePage from "@/components/RolePage";
import { notFound } from "next/navigation";

export default function VolunteerPage() {
  const role = getRoleById("volunteer");
  if (!role) return notFound();
  const scenarios = getScenariosByRole("volunteer");
  return <RolePage role={role} scenarios={scenarios} />;
}
