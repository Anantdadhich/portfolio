import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  win?: string;
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
  win,
}: Props) {
  return (
    <li className="relative ml-10 py-4 group">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full ring-2 ring-border group-hover:ring-green-500/80 transition-all duration-300">
        <Avatar className="border size-12 m-auto bg-background">
          <AvatarImage src={image} alt={title} className="object-contain bg-white" />
          <AvatarFallback className="font-bold text-sm bg-muted text-foreground">{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1 p-3 rounded-xl border border-border/40 bg-background/40 backdrop-blur-md hover:border-green-500/30 hover:bg-green-500/[0.03] shadow-sm transition-all duration-300">
        {dates && (
          <time className="text-xs text-muted-foreground font-mono">{dates}</time>
        )}
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="leading-none text-foreground font-bold text-base group-hover:text-green-500 transition-colors">{title}</h3>
          {win && (
            <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 text-[10px] py-0.5 px-2 font-semibold uppercase tracking-wider rounded-md">
              🏆 {win}
            </Badge>
          )}
        </div>
        {location && (
          <p className="text-xs text-muted-foreground font-medium">{location}</p>
        )}
        {description && (
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1 dark:text-gray-300 text-gray-700">
            {description}
          </p>
        )}
        {links && links.length > 0 && (
          <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge key={idx} title={link.title} className="flex gap-1.5 px-2.5 py-1 text-[10px] rounded-md font-medium">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}