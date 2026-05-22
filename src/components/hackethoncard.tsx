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
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center  rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1 text-black">
        {dates && (
          <time className="text-xs   dark:text-white text-black font-semibold ">{dates}</time>
        )}
        <div className="flex flex-wrap items-center gap-2">
          <h2 className=" leading-none text-black dark:text-white font-bold">{title}</h2>
          {win && (
            <Badge className="bg-green-700 hover:bg-green-700 text-white border-none text-[10px] py-0.5 px-2 font-semibold uppercase tracking-wider rounded">
              {win}
            </Badge>
          )}
        </div>
        {location && (
          <p className="text-sm text-black dark:text-white font-semibold">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm  text-black dark:text-white">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}