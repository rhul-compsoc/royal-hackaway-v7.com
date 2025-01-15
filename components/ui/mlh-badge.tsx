// This is the 2024 version, please update to 2025 version!
export const MLHBadge = (): JSX.Element => {
  return (
    <a
      id="mlh-trust-badge"
      style={{
        display: 'block',
        maxWidth: '100px',
        minWidth: '60px',
        position: 'fixed',
        right: '50px',
        top: '0',
        width: '10%',
        zIndex: '10000',
      }}
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=red"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-red.svg"
        alt="Major League Hacking 2025 Hackathon Season"
        style={{ width: '100%' }}
      />
    </a>
  );
};
