export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center py-1 px-2 text-xs rounded-md bg-primary text-background">
      {children}
    </div>
  );
}
