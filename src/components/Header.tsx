import { useNotificationContext } from "../contexts/notification";
import { useThemeContext } from "../contexts/theme";
import { useUserContext } from "../contexts/user";
import { renderLog } from "../utils";

const LogoutButton = () => {
  const { user, logout } = useUserContext();
  const { addNotification } = useNotificationContext();

  const handleLogout = () => {
    logout();
    addNotification("로그아웃되었습니다", "info");
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">{user?.name}님 환영합니다!</span>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        로그아웃
      </button>
    </div>
  );
};

const LoginButton = () => {
  const { login } = useUserContext();
  const { addNotification } = useNotificationContext();

  const handleLogin = () => {
    login("user@example.com", "password");
    addNotification("성공적으로 로그인되었습니다", "success");
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      로그인
    </button>
  );
};

// Header 컴포넌트
export const Header: React.FC = () => {
  renderLog("Header rendered");
  const { user } = useUserContext();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            {theme === "light" ? "다크 모드" : "라이트 모드"}
          </button>

          {user ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </header>
  );
};