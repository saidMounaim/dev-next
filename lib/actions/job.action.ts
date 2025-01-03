"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { addJobProps } from "../types";
import { revalidatePath } from "next/cache";

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

export async function getJobDetailsBySlug(slug: string) {
  const job = await prisma.job.findUnique({ where: { slug } });
  return job;
}

export async function addJob(values: addJobProps) {
  const session = await auth();
  try {
    const job = await prisma.job.create({
      data: { ...values, userId: session?.user?.id as string },
    });
    return {
      success: true,
      message: "Your job posting has been submitted and is pending approval.",
      job,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong please try again",
      error,
    };
  }
}

export async function getJobsCurrentUserId() {
  const session = await auth();
  const jobs = await prisma.job.findMany({
    where: { userId: session?.user?.id as string },
    orderBy: { createdAt: "desc" },
  });
  return jobs;
}

export async function deleteJob(
  jobId: string,
  pathname: string,
  userId: string
) {
  const session = await auth();
  if (session?.user?.id !== userId) {
    throw new Error("Unauthorized");
  }
  const job = await prisma.job.findUnique({ where: { id: jobId } });
  if (!job) {
    throw new Error("Job not found");
  }
  await prisma.job.delete({ where: { id: job.id } });
  revalidatePath(pathname);
}
