import { CiCircleCheck, CiLocationOn } from "react-icons/ci";
import img1 from "../../assets/dream park.jpg";
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "دريم بارك",
    location: "اكتوبر",
    fees: "700 جنيه للفرد",
    check: 9,
    description:
      "دريم بارك هي أكبر مدينة ملاهي في مصر والشرق الأوسط، وتقع في مدينة السادس من أكتوبر. تتميز دريم بارك بتوفير مجموعة متنوعة من الألعاب الترفيهية والمرافق الترفيهية التي تناسب جميع الأعمار، مما يجعلها وجهة مثالية للعائلات والأصدقاء لقضاء وقت ممتع ومليء بالإثارة.",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "دريم بارك",
    location: "اكتوبر",
    fees: "700 جنيه للفرد",
    description:
      "دريم بارك هي أكبر مدينة ملاهي في مصر والشرق الأوسط، وتقع في مدينة السادس من أكتوبر. تتميز دريم بارك بتوفير مجموعة متنوعة من الألعاب الترفيهية والمرافق الترفيهية التي تناسب جميع الأعمار، مما يجعلها وجهة مثالية للعائلات والأصدقاء لقضاء وقت ممتع ومليء بالإثارة.",
  },
  {
    id: 3,
    imgSrc: img1,
    destTitle: "دريم بارك",
    location: "اكتوبر",
    fees: "700 جنيه للفرد",
    check: 9,
    description:
      "دريم بارك هي أكبر مدينة ملاهي في مصر والشرق الأوسط، وتقع في مدينة السادس من أكتوبر. تتميز دريم بارك بتوفير مجموعة متنوعة من الألعاب الترفيهية والمرافق الترفيهية التي تناسب جميع الأعمار، مما يجعلها وجهة مثالية للعائلات والأصدقاء لقضاء وقت ممتع ومليء بالإثارة.",
  },
   {
    id: 4,
    imgSrc: img1,
    destTitle: "دريم بارك",
    location: "اكتوبر",
    fees: "700 جنيه للفرد",
    description:
      "دريم بارك هي أكبر مدينة ملاهي في مصر والشرق الأوسط، وتقع في مدينة السادس من أكتوبر. تتميز دريم بارك بتوفير مجموعة متنوعة من الألعاب الترفيهية والمرافق الترفيهية التي تناسب جميع الأعمار، مما يجعلها وجهة مثالية للعائلات والأصدقاء لقضاء وقت ممتع ومليء بالإثارة.",
  },
   {
    id: 5,
    imgSrc: img1,
    destTitle: "دريم بارك",
    location: "اكتوبر",
    fees: "700 جنيه للفرد",
    description:
      "دريم بارك هي أكبر مدينة ملاهي في مصر والشرق الأوسط، وتقع في مدينة السادس من أكتوبر. تتميز دريم بارك بتوفير مجموعة متنوعة من الألعاب الترفيهية والمرافق الترفيهية التي تناسب جميع الأعمار، مما يجعلها وجهة مثالية للعائلات والأصدقاء لقضاء وقت ممتع ومليء بالإثارة.",
  },
   {
    id: 6,
    imgSrc: img1,
    destTitle: "دريم بارك",
    location: "اكتوبر",
    fees: "700 جنيه للفرد",
    description:
      "دريم بارك هي أكبر مدينة ملاهي في مصر والشرق الأوسط، وتقع في مدينة السادس من أكتوبر. تتميز دريم بارك بتوفير مجموعة متنوعة من الألعاب الترفيهية والمرافق الترفيهية التي تناسب جميع الأعمار، مما يجعلها وجهة مثالية للعائلات والأصدقاء لقضاء وقت ممتع ومليء بالإثارة.",
  },
];

function main() {
  return (
    <section className="main section container">
      <div className="secTitle">
        <h2 className="title">الرحلات المتاحه</h2>
      </div>
      <div className="secContent  flex flexWrap">
        {Data.map((singleData) => {
          return (
            <div key={singleData.id} className="singleDestination ">
              <div className="imageDiv">
                <img src={singleData.imgSrc} alt={singleData.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">
                  {singleData.destTitle ?? "بلا عنوان"}
                </h4>
                <span className="flex continent">
                  <CiLocationOn className="icons" />
                  <span className="name">{singleData.location}</span>
                </span>
                <div className="fess flex">
                  <div>
                    <h4 className="price">{singleData.fees}</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>{singleData.description}</p>
                </div>
                <button
                  style={{ paddingInline: "1rem" }}
                  className="btn flex"
                  disabled={singleData.check === 9}
                >
                  احجز الان <CiCircleCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default main;
