import "./Header.css";

interface HeaderExampleProps {
  title: string;
  username: string;
}

export const Header = (props: HeaderExampleProps) => {
  return (
    <div className="header-container">
      <h1>{props.title}</h1>
      <p>{props.username}</p>
    </div>
  );
};
