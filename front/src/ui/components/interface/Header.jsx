export default function Header({ children }) {
  return (
    <div className="grow bg-brand rounded-lg flex justify-between items-center max-h-[70px] px-3 ">
      {children}
    </div>
  );
}
