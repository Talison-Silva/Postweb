import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "@/UI/components/show/input/index.jsx";
import Description from "@/UI/components/show/description/index.jsx";
import Photo from "@/UI/components/show/photo/index.jsx";

import PhotoClient from "@/UI/components/photo-client/";

import { AuthContext } from "@/app/contexts/AuthContext.tsx";
import { useContext } from "react";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background-color: #080808;
`;

const Rows = styled.div`
  width: 100%;
  min-height: min-content;

  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 0px;
`;

const Columns = styled.div`
  width: 100%;
  min-height: min-content;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Badge = styled.div`
  width: 600px;
  height: 400px;
  background-color: #0b0d0d;
  color: white;
  //border: 4px dashed #cf084e;
  border: 1px solid #2e2e2e;
  border-radius: 20px;
  overflow: hidden;
  //user-select:none;
  display: grid;

  grid-template-columns: 35% 65%;
  grid-template-rows: 100%;
`;

export const BadgeLeft = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BadgeRight = styled.div`
  //position:relative;
  padding: 0 20px 0 20px;
  width: 100%;
  height: 100%;

  //display:grid;
  //grid-template-columns:60% 40%;
  //grid-template-rows:30% 70%;
`;

// w-full h-full .bg-green-500 flex flex-col justify-center
export const BadgeRightInfors = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
// w-full h-full .bg-purple-500 flex justify-center items-center
export const BadgeRightPhoto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// py-2 w-full h-full .bg-pink-500' style={{gridColumn:'1/3'}}
// w-full h-full bg-transparent text-[12px] resize-none .bg-red-500 outline-none break-all pr-2
export const BadgeRightDescription = styled.textarea`
  width: 100%;
  height: 95%;
  font-size: 12px;
  word-break: break-all;
  background-color: #0b0d0d;

  outline: 2px solid transparent;
  outline-offset: 2px;

  resize: none;
  padding: 6px;
  grid-column: 1/3;
`;

export const PhotoSRS = styled.div`
  width: 100px;
  height: 100px;
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

export default () => {
  const { isClient } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("::", isClient);

  return (
    <Badge className="animate-arriving">
      <BadgeLeft>
        <div className="flex flex-col items-center">
          <p className="mt-1 uppercase text-[20px] font-[900] text-[#084CCF] tracking-[.1125rem]">
            badge
          </p>
          <PhotoClient
            client={isClient.photo}
            classN="mt-3 w-[110px] h-[110px] border-2 border-solid border-[#2e2e2e] rounded-full"
          />

          <div className="w-full min-h-min">
            <h1 className="mt-2 font-bold text-xl uppercase">
              {isClient.username}
            </h1>
            <p className="mt-1 text-[10px]">{isClient.email}</p>
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/postweb/posts/");
          }}
          type="button"
          className="w-full h-[30px] text-[10px] font-[600] rounded-[5px] bg-[#084CCF] text-white uppercase"
        >
          proceed?
        </button>
      </BadgeLeft>
      <BadgeRight>
        <div className="w-full .bg-red-500 flex justify-between items-end">
          <div className="min-w-min min-h-min">
            <h1 className="mt-2 font-[900] text-[26px] tracking-[.1125rem] uppercase">
              {isClient.username}
            </h1>
            <p className="mt-1 text-[12px]">{isClient.email}</p>
          </div>

          <PhotoClient
            client={isClient.photo}
            classN="mt-3 w-[90px] h-[90px] border-2 border-solid border-[#2e2e2e] rounded-full"
          />
        </div>

        <p className="mt-3 text-[26px] font-[900] text-white tracking-[.1125rem]">
          Biography
        </p>
        <BadgeRightDescription readOnly>
          {isClient.biography}
        </BadgeRightDescription>
      </BadgeRight>
    </Badge>
  );
};
