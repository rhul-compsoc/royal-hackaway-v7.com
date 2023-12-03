interface Props {

}

export const Map: React.FC<Props> = (): JSX.Element => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.1766894739376!2d-0.5660060974886063!3d51.425979890481884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487679fe3fa3405d%3A0xa003506a0321e2e0!2sWindsor%20Building%2C%20Egham%20Hill%2C%20Egham%20TW20%200EX!5e0!3m2!1sen!2suk!4v1701614787886!5m2!1sen!2suk"
        width="720"
        height="450"
        loading="lazy"
        className="rounded-lg mt-8 mb-8"
      >
      </iframe>
    </div>
  );
};
