"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import MatrixRain from "@/components/ui/matrix-bg";

const BLUR_FADE_DELAY = 0.5;

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <MatrixRain />
            <section id="projects">
                <div className="space-y-12 w-full py-12">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                    All Projects
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Project Archive
                                </h2>
                                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    A complete list of my projects, experiments, and open source
                                    contributions.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {DATA.projects.map((project, id) => (
                            project ? (
                                <BlurFade
                                    key={project.title}
                                    delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                                >
                                    <ProjectCard
                                        href={project.href}
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        dates={project.dates}
                                        tags={project.technologies}
                                        links={project.links}
                                        image={project.image}
                                    />
                                </BlurFade>
                            ) : null
                        ))}
                    </div>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="flex justify-center mt-8">
                            <Link href="/">
                                <Button variant="outline" className="gap-2">
                                    <ChevronLeft className="h-4 w-4" /> Back to Home
                                </Button>
                            </Link>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
