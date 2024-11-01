import styled from "styled-components";

// ---| Header |-------------------------------------------

export const ContainerHDR = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 40px;
  padding: 18px 40px 18px 40px;
  background-color: #070808;
  //background-color:rgba(7, 8, 8,.0125);
  //backdrop-filter:blur(15px);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// flex gap-5 items-center select-none
export const LogoHDR = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;
// w-7 h-7 border-white border-solid border-8 rounded-full
export const LogoCircleHDR = styled.button`
  width: 16px;
  height: 16px;
  border: 6px solid white;
  border-radius: 50%;
`;
// font-ubuntuMono text-white uppercase font-bold text-2xl
export const LogoTitleHDR = styled.p`
  font-family: "Ubuntu Mono", monospace;
  text-transform: uppercase;
  font-style: bold;
  font-size: 18px;
  color: white;
`;
// relative min-w-40 h-12 select-none
export const ActionsHDR = styled.div`
  position: relative;
  min-width: min-content;
  height: min-content;
  user-select: none;
`;

// min-w-min min-h-min flex gap-3
export const NavigationHDR = styled.div`
  min-width: min-content;
  min-height: min-content;
  display: flex;
  align-items: center;
  gap: 3;
`;
// p-2.5 w-40 bg-white rounded-full uppercase font-bold
export const DinamicButtonHDR = styled.button`
  padding: 9px;
  width: 160px;
  background: linear-gradient(
    45deg,
    transparent,
    #262b2b,
    transparent,
    #262b2b
  );
  border: 1px solid #262b2b;
  color: #d9d9d9;
  letter-spacing: 0.125rem;
  border-radius: 15px;
  text-transform: uppercase;
  font-family: "Ubuntu Mono", monospace;
  font-style: bold;
`;
// flex justify-center items-center gap-3
export const AccountHDR = styled.div`
  min-width: min-content;
  min-height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
//z-50 min-w-min min-h-min
export const AccountInforHDR = styled.article`
  min-width: min-content;
  min-height: min-content;
`;
// style={{clipPath:"circle(40%)"}} className="z-50 cursor-pointer"
export const AccountPhotoHDR = styled.img`
  width: 48px;
  height: 48px;
  clip-path: circle(40%);
  cursor: pointer;
`;
// ---| Footer |-------------------------------------------

export const FooterInfors = styled.footer`
  min-height: 64px;
  padding: 40px;

  background-color: #084ccf;
  color: white;

  font-family: "Roboto Mono", monospace;
  font-size: 20px;

  display: flex;
  justify-content: space-between;
`;

export const FooterLine = styled.div`
  width: 0;
  height: 50px;
  border-right: 3px solid white;
`;

export const FooterInforsCategories = styled.div`
  width: 700px;
  height: min-content;

  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export const FooterInforsCategory = styled.div`
  position: relative;
  min-width: 200px;
  height: min-content;

  overflow-wrap: break-word;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterInforsPostweb = styled.div`
  position: relative;
  width: 500px;
  height: min-content;

  overflow-wrap: break-word;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterGithub = styled.div`
  width: 100%;
  height: min-content;
  padding: 10px;

  background-color: #084ccf;
  color: white;

  font-family: "Roboto Mono", monospace;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GroupFTR = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemFTR = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// ---| Navigate |-----------------------------------------

export const NavigationNVGT = styled.div`
  min-width: min-content;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SeparateNVGT = styled.div`
  width: 0px;
  height: 16px;

  border-left: 2px solid white;
  border-radius: 5px;
`;

export const RedirectNVGT = styled.button`
  text-transform: uppercase;
  outline: none;
  color: white;
  font-family: "Roboto Mono", monospace;
  font-size: 14px;
  letter-spacing: 0.125rem;

  &:hover {
    color: #00ff89;
  }
`;

export const ActionNVGT = styled(RedirectNVGT)`
  color: #8f8f8f;

  &:hover {
    color: #ffbb00;
  }
`;
// ---| Users |--------------------------------------------

export const ContainerSRS = styled.div`
  //width:600px;min-height:144px;
  width: 600px;
  height: 350px;
  background-color: #0b0d0d;
  //border: 4px dashed #cf084e;
  border: 1px solid #2e2e2e;
  border-radius: 20px;
  overflow: hidden;
  user-select: none;
  display: grid;

  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
`;

export const LeftSRS = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: #084ccf;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RightSRS = styled.div`
  //position:relative;
  padding: 0 20px 0 20px;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 30% 70%;
`;

export const PhotoSRS = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

export const InformationsSRS = styled.article`
  margin-top: 24px;
  color: white;
  font-family: "Roboto mono", monospace;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DateSRS = styled.p`
  position: absolute;
  right: 0;
  width: min-content;
  height: 100%;
  font-family: "Ubuntu mono", monospace;
  font-size: 11px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  color: #303838;
  padding: 0 4px 0 4px;
  writing-mode: vertical-lr;
  text-orientation: upright;
`;

// ---| Postagens |----------------------------------------

export const ContainerPTS = styled.section`
  position: relative;
  width: 600px;
  height: 330px;
  overflow: hidden;

  background-color: #0b0d0d;
  border: 2px solid #141717;
  border-radius: 30px;

  display: grid;
  grid-template-columns: 40% 60%;
`;

export const LeftPTS = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0b0d0d;
`;

export const LeftBlur = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2125);
  backdrop-filter: blur(5px);
`;

export const RightPTS = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InformationsPTS = styled.article`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #090a0a;
  color: white;
  user-select: none;
  letter-spacing: 0.025em;
  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AreaButtonPTS = styled.div`
  width: 100%;
  height: 36px;

  border-radius: 0 0 27px 0;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonPTS = styled.button`
  width: 100%;
  height: 100%;

  background-color: #101212;
  color: white;

  font-family: "Ubuntu Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  user-select: none;
`;

export const ClosePTS = styled.button`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 18px;
  left: 18px;
  background-color: #dc2626;
  border-radius: 50%;
`;

export const AccountPTS = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  min-width: min-content;
  min-height: min-content;
  padding: 18px;

  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AccountPhotoPTS = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  user-select: none;
`;

export const AccountInforPTS = styled.article`
  color: white;
  user-select: none;
  min-width: min-content;
  font-family: "Ubuntu Mono", monospace;
`;

export const AccountInforSpanPST = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
