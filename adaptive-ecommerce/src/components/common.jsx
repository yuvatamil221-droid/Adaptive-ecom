function Loading({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[250px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />

        <p className="mt-4 text-sm font-semibold text-gray-500">
          {text}
        </p>
      </div>
    </div>
  );
}

function EmptyState({
  icon = "📦",
  title = "Nothing here yet",
  description = "There is nothing to display right now.",
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
      <div className="text-4xl">{icon}</div>

      <h2 className="mt-4 text-xl font-black">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
        {description}
      </p>

      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="mt-6 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-700"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again.",
  buttonText = "Try Again",
  onButtonClick,
}) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center">
      <div className="text-4xl">⚠️</div>

      <h2 className="mt-4 text-xl font-black text-red-700">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-red-600/80">
        {description}
      </p>

      {onButtonClick && (
        <button
          onClick={onButtonClick}
          className="mt-6 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm text-gray-500">
            {description}
          </p>
        )}
      </div>

      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="w-fit rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:bg-gray-50"
        >
          {buttonText} →
        </button>
      )}
    </div>
  );
}

function PageContainer({ children, className = "" }) {
  return (
    <main
      className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </main>
  );
}

export {
  Loading,
  EmptyState,
  ErrorState,
  SectionHeader,
  PageContainer,
};