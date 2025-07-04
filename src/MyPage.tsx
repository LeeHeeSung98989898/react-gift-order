import styled from "@emotion/styled";
import PageContainer from "@/components/PageContainer";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const UserInfo = styled.p`
  ${({ theme }) => theme.typography.body.body1Regular};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Button = styled.button`
  ${({ theme }) => theme.typography.body.body2Regular};
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  color: ${({ theme }) => theme.color.semantic.textDefault};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.semantic.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.semantic.kakaoYellowPressed};
    border: none;
  }
`;

export default function MyPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <PageContainer>
      {user && (
        <>
          <UserInfo>{user.name}님 안녕하세요!<br />이메일 주소는 {user.email}입니다.</UserInfo>
          <Button onClick={handleLogout}>로그아웃</Button>
        </>
      )}
    </PageContainer>
  );
}