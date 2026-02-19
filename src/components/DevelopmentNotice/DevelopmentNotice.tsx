interface DevelopmentNoticeProps {
  message: string;
}

export function DevelopmentNotice({ message }: DevelopmentNoticeProps) {
  return (
    <section className="py-8 bg-yellow-50 border-t border-yellow-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-yellow-800">
          ℹ️ {message}
        </p>
      </div>
    </section>
  );
}
