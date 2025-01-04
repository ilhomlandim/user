import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function MaterialCard({ info }) {
  const { cover, title, summary } = info;
  return (
    <Card className="overflow-hidden">
      <div className="bg-primary-foreground">
        <Image
          className="object-cover w-full"
          alt={title}
          src={cover}
          width={230}
          height={325}
          priority
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{summary}</CardDescription>
      </CardHeader>
    </Card>
  );
}
