"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

export async function getAllUsers() {
  const session = await auth();
  if (!session || session?.user.role !== "admin") {
    throw new Error("Unauthorized");
  }
  const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  return users;
}

export async function toggleUserRole(userId: string, pathname: string) {
  const session = await auth();
  if (!session || session?.user.role !== "admin") {
    throw new Error("Unauthorized");
  }
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new Error("User not found");
  }
  const userRole = user.role === "admin" ? "user" : "admin";
  await prisma.user.update({ where: { id: userId }, data: { role: userRole } });
  revalidatePath(pathname);
}
