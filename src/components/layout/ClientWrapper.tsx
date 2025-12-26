"use client";
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import { AnimatePresence } from "framer-motion";

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && (
                    <Preloader onComplete={() => setLoading(false)} />
                )}
            </AnimatePresence>

            {!loading && (
                <>
                    <Header />
                    <main className="pt-0">
                        {children}
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
}
