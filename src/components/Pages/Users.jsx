import React from "react";
import styled from "styled-components";
//import { UserContext } from "../../providers/UserProvider";
import { SecoundryButton } from "../atoms/button/SecoundryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `aaaa${val}`,
    email: "nnnn@human.com",
    phone: "1234-567-789",
    factory: {
      name: "DDDDDDdDD!"
    },
    webSite: "https://google.com"
  };
});

export const Users = () => {
  //  const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>USERS Page here</h2>
      <SearchInput />
      <br />
      <SecoundryButton onClick={onClickSwitch}>CHANGE BU~</SecoundryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
