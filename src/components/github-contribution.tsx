"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GithubContribution() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [blockSize, setBlockSize] = useState(10);
    const [blockMargin, setBlockMargin] = useState(3);
    const [fontSize, setFontSize] = useState(12);

    useEffect(() => {
        setMounted(true);

        const updateSizes = () => {
            const width = window.innerWidth;

            if (width < 640) {
                // Mobile
                setBlockSize(6);
                setBlockMargin(2);
                setFontSize(9);
            } else if (width < 768) {
                // Small tablet
                setBlockSize(8);
                setBlockMargin(2);
                setFontSize(10);
            } else if (width < 1024) {
                // Tablet
                setBlockSize(9);
                setBlockMargin(3);
                setFontSize(11);
            } else {
                // Desktop - smaller sizes
                setBlockSize(10);
                setBlockMargin(3);
                setFontSize(12);
            }
        };

        updateSizes();
        window.addEventListener("resize", updateSizes);

        return () => window.removeEventListener("resize", updateSizes);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-4 w-full px-4">
            <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Proof of Work
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                    Commit. Push. Repeat
                </h2>
            </div>

            <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
                <div className="overflow-x-auto w-full">
                    <div className="inline-block min-w-full p-3 sm:p-4 dark:bg-[#080808] rounded-xl border border-white/10 backdrop-blur-sm shadow-xl">
                        <Link href="https://github.com/Anantdadhich" target="_blank">
                            <GitHubCalendar
                                username="Anantdadhich"
                                blockSize={blockSize}
                                blockMargin={blockMargin}
                                colorScheme={theme === "dark" ? "dark" : "light"}
                                fontSize={fontSize}
                                style={{
                                    color: theme === "dark" ? "white" : "black",
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
