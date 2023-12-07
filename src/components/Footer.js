export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen)
    <p>
      We are happy to welcome you between {openHour}:00- {closeHour}:00.
    </p>;
  return (
    <footer className="footer">
      <p>
        We are happy to welcome you between {openHour}:00- {closeHour}:00
      </p>
      <p>© 2023 by ArsaGallery. All rights reserved.</p>
      <p>Made by Negar Maleki</p>
    </footer>
  );
}
