import { cn } from "@/lib/utils";
import { ExternalLink, Instagram } from "lucide-react";

type LinkTitleProps = {
  location: string;
  url?: string;
  instagram?: string;
};

export function InfoLinks({ location, url, instagram }: LinkTitleProps) {
  return (
    <div className="flex items-center justify-between mt-3 text-muted-foreground">
      <p className={cn("leading-7 inline-flex font-bold")}>{location}</p>
      <div className="flex gap-4">
        {url ? (
          <a href={url} target="_blank" rel="noreferrer">
            <ExternalLink className="h-6 w-6" />
          </a>
        ) : null}
        {instagram ? (
          <a href={instagram} target="_blank" rel="noreferrer">
            <Instagram className="h-6 w-6" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
