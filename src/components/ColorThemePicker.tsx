
interface ColorThemePickerProps {
  currentTheme: 'blue' | 'pink' | 'purple';
  onThemeChange: (theme: 'blue' | 'pink' | 'purple') => void;
  sectionTheme: 'light' | 'dark';
}

const ColorThemePicker = ({ currentTheme, onThemeChange, sectionTheme }: ColorThemePickerProps) => {
  const themes = [
    { name: 'blue', colors: ['#b3e5fc', '#81d4fa'], label: 'Ocean' },
    { name: 'pink', colors: ['#f8bbd0', '#f48fb1'], label: 'Blossom' },
    { name: 'purple', colors: ['#e1bee7', '#ce93d8'], label: 'Lavender' }
  ] as const;

  return (
    <div className="flex flex-col items-center space-y-3">
      <p className={`text-sm font-medium transition-colors duration-1000 ${
        sectionTheme === 'light' ? 'text-gray-600' : 'text-gray-400'
      }`}>
        Cursor Theme
      </p>
      <div className="flex space-x-3">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => onThemeChange(theme.name)}
            className={`w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg border-2 ${
              currentTheme === theme.name 
                ? 'border-gray-800 scale-110' 
                : 'border-transparent hover:border-gray-400'
            }`}
            style={{
              background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`
            }}
            title={theme.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorThemePicker;
