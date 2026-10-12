export type Category = { id: string; name: string; icon: string };

// "All" is not stored in the database, it is always the first circle.
const ALL: Category = { id: "all", name: "All", icon: "🔥" };

type Props = {
  categories: Category[];
  selected: string;
  onSelect: (id: string) => void;
};

export function CategoryBubbles({ categories, selected, onSelect }: Props) {
  return (
    <div className="no-scrollbar sticky top-0 z-30 flex gap-4 overflow-x-auto border-b border-white/5 bg-bg px-4 py-3">
      {[ALL, ...categories].map((c) => {
        const active = c.id === selected;
        return (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="flex shrink-0 flex-col items-center gap-1"
          >
            <span
              className={`rounded-full p-[3px] ${
                active
                  ? "bg-[linear-gradient(45deg,#C6FF3D,#FF3D81)]"
                  : "bg-white/20"
              }`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-bg bg-surface text-3xl">
                {c.icon}
              </span>
            </span>

            <span
              className={`text-xs ${active ? "text-accent" : "text-white/70"}`}
            >
              {c.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}