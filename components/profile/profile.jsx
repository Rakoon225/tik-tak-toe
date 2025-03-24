import clsx from "clsx";
import avatarSrc from "./avatar.png";
import Image from "next/image";

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatarSrc} alt="avatar" width={48} height={48} unoptimized />
      <div>
        <div className="text-lg leading-tight">Paromovg</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}
