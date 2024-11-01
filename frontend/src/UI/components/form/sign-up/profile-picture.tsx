import { ProfilePicture } from "../styled.ts";
import { useField } from "formik";
import { useRef } from "react";

export default ({}) => {
  const upload = (e) => {
    if (e.target.files[0] && e.target.files[0].size < 52428840) {
      helpers.setValue(e.target.files[0]);

      let leitor = new FileReader();

      leitor.onload = (e) => {
        imageRef.current.style.backgroundImage = `url(${e.target.result})`;
      };

      leitor.readAsDataURL(e.target.files[0]);
    }
  };

  const [field, meta, helpers] = useField({ name: "profile-picture" });
  const picture = useRef(null);
  const imageRef = useRef(null);

  return (
    <ProfilePicture>
      <div ref={imageRef} />
      <input
        id="profile-picture"
        type="file"
        accept=".png, .jpeg, .jpg"
        onChange={upload}
      />
    </ProfilePicture>
  );
};
