"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import BlurFade from "./magicui/blur-fade";
import RevealAnimation from "./ui/reveal-animation";
interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  skills?: string[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  skills,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link href={href || "#"} className="block group" onClick={handleClick}>
      <Card className="flex bg-background/40 backdrop-blur-md border border-border/40 hover:border-green-500/30 hover:bg-green-500/[0.04] p-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground ring-1 ring-border group-hover:ring-green-500/50 transition-all duration-300">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain bg-white"
            />
            <AvatarFallback className="font-bold text-sm bg-muted text-foreground">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 flex flex-col justify-center">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center gap-x-2 font-semibold leading-none text-xs sm:text-sm flex-wrap">
                <span>{title}</span>
                {badges && badges.length > 0 && (
                  <span className="inline-flex gap-x-1.5 items-center">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[10px] sm:text-xs px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-md font-medium"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-40 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 text-green-500",
                      isExpanded ? "rotate-90 opacity-100" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right shrink-0">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs text-green-500 mt-1 font-medium">{subtitle}</div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm overflow-hidden"
            >
              <AnimatePresence>
                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs sm:text-sm text-muted-foreground leading-relaxed dark:text-gray-300 text-gray-700"
                  >
                    {description}
                  </motion.p>
                )}
              </AnimatePresence>

              {skills && (
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap gap-1 mt-3"
                    >
                      {skills.map((skill, index) => (
                        <RevealAnimation
                          key={index}
                          className="bg-white px-2 py-0.5 text-green-800 text-xs rounded border border-green-200 font-medium"
                          delay={index * 0.05}
                        >
                          {skill}
                        </RevealAnimation>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};