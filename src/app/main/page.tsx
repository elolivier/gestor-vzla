import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "../../components/SignOutButton";

export default async function MainPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    // not logged in → redirect to the built-in sign-in page
    redirect("/api/auth/signin");
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Protected Main Page</h1>
      <p>Welcome, {session.user?.name}!</p>
      <SignOutButton />
    </main>
  );
}
