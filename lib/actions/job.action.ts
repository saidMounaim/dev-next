"use server";

import { prisma } from "../prisma";

export async function getFeaturedJobs() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
    where: { approved: true },
  });
  return jobs;
}

export async function getAllApprovedJobs() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: "desc" },
    where: { approved: true },
  });
  return jobs;
}
