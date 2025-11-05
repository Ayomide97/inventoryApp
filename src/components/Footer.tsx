const Footer = () => {
  return (
    <footer className="footer sticky bottom-0 left-0 right-0 z-50 w-full px-6 py-4 border-t-2 border-gray-200 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200">
      <div className="container mx-auto">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Inventori. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
