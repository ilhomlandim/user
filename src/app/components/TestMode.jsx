function TestMode() {
  return (
    <div className="bg-primary relative z-50  flex gap-5 text-primary-foreground overflow-x-hidden min-h-8 py-2 sm:py-1 sm:min-h-6 mb-2">
      {Array.from({ length: 30 }, (_, index) => {
        return (
          <p
            className="animate-test-mode text-xs whitespace-nowrap"
            key={index}
          >
            Sayt test rejimida ishlamoqda
          </p>
        );
      })}
    </div>
  );
}

export default TestMode;
