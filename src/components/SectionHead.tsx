import { GoldRule } from "./Decor";

type Props = {
  kicker: string;
  title: string;
  dark?: boolean;
};

export function SectionHead({ kicker, title, dark }: Props) {
  return (
    <div className={`section__head classical-head${dark ? " classical-head--dark" : ""}`}>
      <p className={dark ? "eyebrow eyebrow--gold" : "eyebrow"}>{kicker}</p>
      <h2 className="serif">{title}</h2>
      <GoldRule className={dark ? "gold-rule--on-dark" : ""} />
    </div>
  );
}
