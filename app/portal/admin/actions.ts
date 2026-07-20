"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const accountRoles = new Set(["new", "customer"]);
const projectStatuses = new Set(["planning", "in_progress", "review", "complete"]);

async function getAdminClient() {
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;

  if (!userId) redirect("/portal/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (profile?.role !== "admin") redirect("/portal");

  return supabase;
}

export async function changeAccountType(formData: FormData) {
  const userId = String(formData.get("userId") ?? "");
  const role = String(formData.get("role") ?? "");

  if (!userId || !accountRoles.has(role)) return;

  const supabase = await getAdminClient();
  await supabase.from("profiles").update({ role }).eq("id", userId);

  revalidatePath("/portal");
  revalidatePath("/portal/admin");
}

export async function assignSampleProject(formData: FormData) {
  const userId = String(formData.get("userId") ?? "");
  if (!userId) return;

  const supabase = await getAdminClient();
  const { data: sampleOrganization } = await supabase
    .from("organizations")
    .select("id")
    .eq("slug", "sample-client")
    .single();

  if (!sampleOrganization) return;

  await supabase
    .from("organization_members")
    .upsert({ organization_id: sampleOrganization.id, user_id: userId });
  await supabase.from("profiles").update({ role: "customer" }).eq("id", userId);

  revalidatePath("/portal");
  revalidatePath("/portal/admin");
}

export async function changeProjectStatus(formData: FormData) {
  const projectId = String(formData.get("projectId") ?? "");
  const status = String(formData.get("status") ?? "");
  const progress = Number(formData.get("progress"));

  if (
    !projectId ||
    !projectStatuses.has(status) ||
    !Number.isInteger(progress) ||
    progress < 0 ||
    progress > 100
  ) {
    return;
  }

  const supabase = await getAdminClient();
  await supabase.from("projects").update({ status, progress }).eq("id", projectId);

  revalidatePath("/portal");
  revalidatePath("/portal/admin");
}
