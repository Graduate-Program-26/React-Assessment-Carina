import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Shadcn/table";

interface EventsTableProps {
  events?: { id: string; type: string; repo: string | null }[];
}

export function EventsTable({ events }: EventsTableProps) {
  return (
    <Table>
      <TableCaption>Recent Events</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Event Type</TableHead>
          <TableHead>Repo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events?.map((event) => (
          <TableRow key={event.id}>
            <TableCell>{event.type}</TableCell>
            <TableCell>{event.repo ?? "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
