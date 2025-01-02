"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpUser } from "@/lib/actions/auth.action";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button
        className="w-full bg-cyan-700 hover:bg-cyan-800"
        disabled={pending}
      >
        {pending ? `Submitting...` : `Sign Up`}
      </Button>
    );
  };
  return (
    <form className="space-y-6" action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-2">
        <Label htmlFor="name" className="text-cyan-900">
          Name
        </Label>
        <Input id="name" name="name" type="text" required />
      </div>
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
        <Input id="password" name="password" type="password" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-cyan-900">
          Confirm password
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
        />
      </div>
      <div>
        <SignUpButton />
      </div>
      {data && !data.success && (
        <div className="text-center text-destructive">{data.message}</div>
      )}
      <div className="text-sm text-center text-muted-foreground">
        {`Already have an account?`}{" "}
        <Link href="/sign-in" className="text-cyan-700" target="_self">
          {" "}
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
