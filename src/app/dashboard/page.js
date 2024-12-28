import { auth } from "@clerk/nextjs";

export default function Page() {
    const { userId } = auth();
    // Use userId to fetch user-specific data
}