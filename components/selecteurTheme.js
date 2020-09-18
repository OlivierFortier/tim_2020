export default function SelecteurTheme() {
  return (
    <>
      <button aria-label="Changer theme"></button>;
      <style jsx>{`
        button {
          margin-left: 30px;
          margin-right: 15px;
          height: 1rem;
          width: 1rem;
          background-color: #fff;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
