import { TechStackCardProps } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function TechStackCard({ title, stack }: TechStackCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4 items-center">
        {stack.map((stackItem, index) => (
          <Badge variant="secondary" className="py-1 px-2 text-sm" key={index}>
            {stackItem}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
