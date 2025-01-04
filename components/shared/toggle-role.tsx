"use client";

import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { formatError } from "@/lib/utils";
import { toggleUserRole } from "@/lib/actions/user.action";
import { usePathname } from "next/navigation";

const ToggleRole = ({
  userId,
  userRole,
}: {
  userId: string;
  userRole: string;
}) => {
  const pathname = usePathname();

  const handleUserRole = async (id: string) => {
    try {
      await toggleUserRole(id, pathname);
      toast.success("User role has been successfully updated");
    } catch (error) {
      toast.error(formatError(error));
    }
  };

  return (
    <Button
      onClick={() => handleUserRole(userId)}
      variant="outline"
      className={
        userRole === "Admin"
          ? "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
          : "bg-cyan-600 text-white hover:bg-cyan-700"
      }
    >
      {userRole === "admin" ? "Make User" : "Make Admin"}
    </Button>
  );
};

export default ToggleRole;
