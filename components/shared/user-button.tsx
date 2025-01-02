import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Plus, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { signOutUser } from "@/lib/actions/auth.action";

const UserButton = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button variant="secondary" asChild>
        <Link href="/sign-in">
          <UserIcon /> Sign in
        </Link>
      </Button>
    );
  }

  const firstTwoInitials = session.user?.name
    ? session.user.name.slice(0, 2).toUpperCase()
    : "UN";
  return (
    <div className="flex items-center gap-3">
      <Button variant="secondary" asChild>
        <Link href="/submit-job">
          <Plus /> Post a job
        </Link>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={`https://avatar.vercel.sh/${session?.user?.name}.svg?&rounded=60&text=${firstTwoInitials}`}
            width={35}
            height={35}
            alt="Avatar"
            className="cursor-pointer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.user?.name}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={signOutUser} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant="ghost"
              >
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
