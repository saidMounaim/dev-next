import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/lib/actions/user.action";
import ToggleRole from "@/components/shared/toggle-role";

export default async function AdminAllJobsPage() {
  const session = await auth();
  if (session?.user?.role !== "admin") redirect("/sign-in");
  const users = await getAllUsers();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-cyan-800 mb-8">All Users</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <ToggleRole userId={user.id} userRole={user.role} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
