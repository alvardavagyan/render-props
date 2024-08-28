import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeSwitcher
      render={({ theme, changeTheme }) => (

        <button onClick={changeTheme}
          style={{
            height: '100vh',
            width: "1396px",
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme === "light" ? 'white' : "#1e1e1e",
            display: 'flex',
            justifyContent: 'center',
            border: 0,
          }}
        >
          {
            theme === 'light' ?
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/994/265/original/sun-icon-simple-design-free-vector.jpg"
                alt="ligth theme"
                width={50}
                height={50}
              />

              :
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjKy3Wvuxm3QqKMqIthM3EbiK13U8R0BtLg&s"
                alt="dark theme"
                width={50}
                height={50}
              />
          }
        </button>
      )}
    />
  );
};

export default App;


