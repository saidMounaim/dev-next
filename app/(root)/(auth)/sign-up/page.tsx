import { auth } from "@/auth";
import SignUpForm from "@/components/shared/forms/signup-form";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await auth();
  if (session) redirect("/");
  return (
    <div className="max-w-[340px] w-full px-3 mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-1">
        <h2 className="text-3xl font-bold text-center text-cyan-800">
          Sign Up
        </h2>
        <SignUpForm />
      </div>
    </div>
  );
}
