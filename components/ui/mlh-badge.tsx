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
      href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
        alt="Major League Hacking 2024 Hackathon Season"
        style={{ width: '100%' }}
      />
    </a>
  );
};
