import { Dropdown } from "primereact/dropdown";
import { useTranslation } from "react-i18next";
import { enFlag, viFlag } from "../assets/icons";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { name: "Tiếng Việt", code: "vi", flag: viFlag },
    { name: "English", code: "en", flag: enFlag },
  ];

  const selectedCountryTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex items-center align-middle gap-2">
          <img
            alt={String(option.name)}
            src={option.flag}
            className="w-6 h-4 object-cover rounded-sm"
          />
          <span className="font-semibold text-sm">
            {option.code.toUpperCase()}
          </span>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: any) => {
    return (
      <div className="flex items-center align-middle gap-3 py-1">
        <img
          alt={String(option.name)}
          src={option.flag}
          className="w-8 h-5 object-cover shadow-sm rounded-sm"
        />
        <span className="text-gray-700 dark:text-gray-200">{option.name}</span>
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={languages.find((l) => l.code === i18n.language) || languages[1]} // Tìm ngôn ngữ hiện tại
        onChange={(e) => i18n.changeLanguage(e.value.code)}
        options={languages}
        optionLabel="name"
        placeholder="Select Language"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
        // Styling để phù hợp với Header tối màu (Slate-900)
        className="w-full md:w-32 bg-transparent border-slate-600 text-gray-200 dark:bg-slate-800 focus:ring-0"
        // Styling cho panel xổ xuống
        panelClassName="bg-white dark:bg-slate-800 border dark:border-slate-700 shadow-lg"
        // Bỏ viền mặc định của PrimeReact nếu muốn nó trông giống nút bấm hơn
        pt={{
          root: {
            className:
              "border-none ring-0 hover:bg-slate-800 rounded-md transition-colors",
          },
          input: { className: "pl-2 pr-1 py-1.5 text-gray-300" },
          trigger: { className: "w-8 text-gray-400" },
          panel: { className: "bg-white dark:bg-slate-800" },
        }}
      />
    </div>
  );
};

export default LanguageSelector;
