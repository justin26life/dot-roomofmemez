import { House, Search, Plus, MessageCircle, User } from "lucide-react";

export type Tab = "home" | "search" | "post" | "chats" | "profile";

const tabs = [
  { id: "home", label: "Home", Icon: House },
  { id: "search", label: "Search", Icon: Search },
  { id: "post", label: "Post", Icon: Plus },
  { id: "chats", label: "Chats", Icon: MessageCircle },
  { id: "profile", label: "Profile", Icon: User },
] as const;

type Props = {
  active: Tab;
  onChange: (tab: Tab) => void;
};

export function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center justify-around border-t border-white/10 bg-bg">
      {tabs.map(({ id, label, Icon }) => {
        const isActive = id === active;

        // The middle "Post" button looks different: a lime rounded square
        if (id === "post") {
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              aria-label={label}
              className="flex h-10 w-14 items-center justify-center rounded-xl bg-accent text-bg"
            >
              <Icon size={24} strokeWidth={3} />
            </button>
          );
        }

        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            aria-label={label}
            className={`flex flex-1 flex-col items-center gap-1 ${
              isActive ? "text-accent" : "text-white/60"
            }`}
          >
            <Icon size={24} />
            <span className="text-[10px]">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}