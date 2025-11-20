import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="app-shell">
            {/* Top bar (mobile-first) */}
            <header className="app-shell__topbar">
                <button
                    className="app-shell__menu-button"
                    onClick={() => setSidebarOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>
                <span className="app-shell__brand">Code Projects</span>
            </header>

            <div className="app-shell__body">
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <main className="app-shell__content">{children}</main>
            </div>
        </div>
    );
}
