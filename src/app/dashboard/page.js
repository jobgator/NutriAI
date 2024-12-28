import { currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
    const user = await currentUser();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.firstName}!</p>
                    <p>Email: {user.emailAddresses[0].emailAddress}</p>
                </div>
            ) : (
                <p>Please sign in to view the dashboard</p>
            )}
        </div>
    );
}