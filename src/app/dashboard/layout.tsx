import Link from "next/link";
import { ReactNode } from "react";
import {
    LayoutDashboard,
    Users,
    Building2,
    CalendarDays,
    CreditCard,
} from "lucide-react";

const navLinks = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/dashboard/leads",
        label: "Leads",
        icon: Users,
    },
    {
        href: "/dashboard/properties",
        label: "Properties",
        icon: Building2,
    },
    {
        href: "/dashboard/appointments",
        label: "Appointments",
        icon: CalendarDays,
    },
    {
        href: "/dashboard/payments",
        label: "Payments",
        icon: CreditCard,
    },
];

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-100 flex">
            <aside className="w-72 bg-slate-900 text-white p-6 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold">Real Estate CRM</h2>
                    <p className="text-slate-400 text-sm mt-1">
                        Internal sales management system
                    </p>
                </div>

                <nav className="space-y-3">
                    {navLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-800 transition"
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
