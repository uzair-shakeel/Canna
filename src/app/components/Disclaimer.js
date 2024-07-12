import Link from "next/link";

const ExternalLinksDisclaimer = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading} className="text-center">
        EXTERNAL LINKS DISCLAIMER
      </h2>
      <p style={styles.paragraph} className="text-justify">
        The Site may contain (or you may be sent through the Site) links to
        other websites or content belonging to or originating from third parties
        or links to websites and features in banners or other advertising. Such
        external links are not investigated, monitored, or checked for accuracy,
        adequacy, validity, reliability, availability, or completeness by us.
        <span style={styles.boldText}>
          {" "}
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
          THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY
          WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN
          ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY
          WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
          THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "left",
    // boxShadow: "0 14px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  boldText: {
    fontWeight: "bold",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default ExternalLinksDisclaimer;
