import styles from "../BubbleText/BubbleText.module.css";

export const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText text={"hey"} />
    </div>
  );
};

export const BubbleText = ({ text }: { text: any }) => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <h2 className="text-center text-5xl font-thin text-indigo-300">
        {text.split("").map((child: string, idx: number) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    </div>
  );
};
