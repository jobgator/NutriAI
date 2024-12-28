// Create a component to show sign-in status, e.g., in your navbar
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Header() {
    return (
        <header>
            <SignedIn>
                {/* Only rendered if the user is signed in */}
                <UserButton />
            </SignedIn>
            <SignedOut>
                {/* Only rendered if the user is signed out */}
                <Link href="/sign-in">Sign In</Link>
            </SignedOut>
        </header>
    );
}