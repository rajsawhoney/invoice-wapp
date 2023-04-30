export default function Header() {
  return (
    <div className="flex items-center justify-between h-10">
      <img
        className="header-link w-[122px]"
        src="https://aspired.io/themes/aspired/assets/img/aspired-logowhite.svg"
        alt="logo"
      />
      <span className="header-link">Services</span>
      <span className="header-link">About</span>
      <span className="header-link">Success Stories</span>
      <span className="header-link">Contact</span>
      <span className="header-link">📞 +1-800-973-0714</span>
      <div className="bg-white py-3 px-4 text-blue-600">Hire Developers →</div>
    </div>
  );
}
