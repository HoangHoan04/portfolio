import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="transition-colors duration-300 border-t bg-slate-900 dark:bg-gray-900 border-slate-700 dark:border-gray-700">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025 Hoanghoan. {t("footer.rights")}
          </p>
          <p className="mt-2 text-sm text-gray-400 md:mt-0">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
