"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/auth.action";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button
        className="w-full bg-cyan-700 hover:bg-cyan-800"
        disabled={pending}
      >
        {pending ? `Signing in...` : `Sign In`}
      </Button>
    );
  };

  return (
    <form className="space-y-6" action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-2">
        <Label htmlFor="email" className="text-cyan-900">
          Email
        </Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-cyan-900">
          Password
        </Label>
        <Input id="password" name="password" type="password" />
      </div>
      <div>
        <SignInButton />
      </div>
      {data && !data.success && (
        <div className="text-sm text-center text-destructive">
          {data.message}
        </div>
      )}
      <div className="text-sm text-center text-muted-foreground">
        {`Don't have an account?`}{" "}
        <Link href="/sign-up" className="text-cyan-700" target="_self">
          {" "}
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
