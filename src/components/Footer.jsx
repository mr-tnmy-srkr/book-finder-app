const Footer = ({ booksLength }) => {
  const year = new Date().getFullYear();
  return (
    <footer className={`py-6 md:py-8 ${booksLength === 0 && "mt-[260px]"}`}>
      <div className="container mx-auto">
        <p className="text-center text-sm lg:text-base">
          Copyright @{year} | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
};
export default Footer;
