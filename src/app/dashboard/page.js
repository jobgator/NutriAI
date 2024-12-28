import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
    const user = await currentUser();

    return (
        <main className="p-8">
            <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.firstName}!</h1>
                    <p className="text-gray-600">What would you like to do today?</p>
                </div>

                {/* Main Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Add features specific to your app here */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Feature 1</h2>
                        <p className="text-gray-600">Description of your first feature</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Feature 2</h2>
                        <p className="text-gray-600">Description of your second feature</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Feature 3</h2>
                        <p className="text-gray-600">Description of your third feature</p>
                    </div>
                </div>
            </div>
        </main>
    );
}