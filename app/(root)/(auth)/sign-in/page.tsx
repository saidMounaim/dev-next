import { auth } from "@/auth";
import SignInForm from "@/components/shared/forms/signin-form";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) redirect("/");
  return (
    <div className="max-w-[340px] w-full px-3 mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-1">
        <h2 className="text-3xl font-bold text-center text-cyan-800">
          Sign In
        </h2>
        <SignInForm />
      </div>
    </div>
  );
}
