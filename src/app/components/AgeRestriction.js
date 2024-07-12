import Link from "next/link";

const AgeRestrictionBanner = () => {
  return (
    <div style={styles.container}>
      {/* <div style={styles.card}>
        <div style={styles.weCardText}>We Card</div>
        <div style={styles.under21Text}>
          Under 21
          <br />
          No Tobacco
          <br />
          No Vapor
        </div>
      </div> */}
      <div style={styles.textContainer}>
        <h1 style={styles.heading} className="text-blue-100">
          FEDERAL LAW: 21 YEAR MINIMUM AGE FOR ALL OUR PRODUCTS
        </h1>
        <p style={styles.paragraph}>
          A federal law establishes 21 years old as the minimum-age for tobacco
          and vapor products. It became effective on December 20, 2019. This is
          a national law in effect in all states and U.S. territories. BY
          ACCESSING THIS WEBSITE YOU AGREE THAT YOU ARE AT LEAST 21 YEARS OLD.
        </p>
        <Link href="/terms" className="text-yellow-500">
          <div>View Terms & Conditions</div>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0e1c35",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  card: {
    display: "inline-block",
    backgroundColor: "#f7d917",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "20px",
    position: "relative",
  },
  weCardText: {
    backgroundColor: "#e33434",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    padding: "5px 10px",
    position: "absolute",
    top: "-25px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "5px",
  },
  under21Text: {
    color: "black",
    fontWeight: "bold",
    fontSize: "1rem",
    padding: "10px",
  },
  textContainer: {
    marginTop: "20px",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1rem",
    marginTop: "10px",
    marginBottom: "10px",
  },
  link: {
    display: "inline-block",
    marginTop: "20px",
    fontSize: "1rem",
    color: "#f7d917",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default AgeRestrictionBanner;
