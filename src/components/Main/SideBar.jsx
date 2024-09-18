import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown, LogOut01 } from "@untitled-ui/icons-react";

import {
  HorizontalDivider,
  VerticalDivider,
  styledIcon,
} from "../../styles/globalStyle";

const SidebarLayout = styled.div`
  height: 100vh;
  min-width: 19.5rem;
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;
`;

const NavHeaderBox = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0 1.5rem;
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray700};
`;

const NavHeaderImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

const NavHeaderText = styled.span`
  ${({ theme }) => theme.texts.textXL};
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray700};
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0rem 1rem;
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray700};
`;

const NavMenuCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme, $focused }) =>
    $focused ? theme.colors.gray50 : null};
  border-radius: ${({ $focused }) => ($focused ? `${6 / 16}rem` : "0")};
  cursor: pointer;
`;

const NavMenuContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const NavMenuContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
`;

const NavItemContentText = styled.span``;

const NavMenuActions = styled.div``;

const NavSubMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? `${8 / 16}rem` : "0")};
  max-height: ${({ $isOpen, $maxHeight }) =>
    $isOpen ? `${$maxHeight / 16}rem` : "0"};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const NavMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem 0.5rem 3rem;
  background-color: ${({ theme, $focused }) =>
    $focused ? theme.colors.gray50 : null};
  border-radius: ${({ $focused }) => ($focused ? `${6 / 16}rem` : "0")};
  cursor: pointer;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem 2rem 1rem;
`;

const FooterNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  ${({ theme }) => theme.texts.textMD}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray700};
`;

const FooterNavItem = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
`;

const FooterNavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FooterAccount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const FooterAccountAvatar = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterAccountAvatarText = styled.span`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.semiBold};
  color: ${({ theme }) => theme.colors.gray900};
`;

const FooterAccountAvatarSupportingText = styled.span`
  ${({ theme }) => theme.texts.textSM}
  font-weight: ${({ theme }) => theme.weights.regular};
  color: ${({ theme }) => theme.colors.gray600};
`;

const LogoutButton = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
`;

const ChevronUpIcon = styledIcon({ icon: ChevronUp });
const ChevronDownIcon = styledIcon({ icon: ChevronDown });
const LogOutIcon = styledIcon({ icon: LogOut01 });

const SideBar = ({
  navMenus,
  navSubMenus,
  footerNavMenus,
  brandIcon,
  title,
  name,
  email,
  logout,
}) => {
  const [selectedNav, setSelectedNav] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  const [navMenuWrapperHeight, setNavMenuWrapperHeight] = useState(0);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navMenuWrapperRef = useRef();

  // Get Nav menu Height
  useLayoutEffect(() => {
    if (navMenuWrapperRef.current)
      setNavMenuWrapperHeight(navMenuWrapperRef.current.scrollHeight);
  }, [selectedNav, isMenuOpened]);

  // Update SideBar
  useEffect(() => {
    const _updateSideBar = () => {
      let newSelectedNav = 0;
      let newSelectedMenu = 0;

      navMenus.forEach((item, index) => {
        if (pathname.startsWith(item.to)) {
          newSelectedNav = index;

          const currentNavMenu = navSubMenus[index];
          if (currentNavMenu.length > 0) {
            currentNavMenu.forEach((menuItem, menuIndex) => {
              if (pathname.startsWith(item.to + menuItem.to)) {
                newSelectedMenu = menuIndex;
              }
            });
          }
        }
      });

      setSelectedNav(newSelectedNav);
      setSelectedMenu(newSelectedMenu);
    };

    _updateSideBar();
  }, [navMenus, navSubMenus, pathname]);

  const _navItemActionsBuilder = (index) => {
    if (navSubMenus[index].length == 0) return null;
    return selectedNav == index && isMenuOpened ? (
      <ChevronUpIcon strokecolor='#98A2B3' />
    ) : (
      <ChevronDownIcon strokecolor='#98A2B3' />
    );
  };

  const _navSubMenuBuilder = (index) => {
    if (navSubMenus[index].length == 0) return null;
    if (selectedNav == index)
      return (
        <NavSubMenuBox
          ref={navMenuWrapperRef}
          $isOpen={isMenuOpened}
          $maxHeight={navMenuWrapperHeight}
        >
          {navSubMenus[index].map((menuItem, menuIndex) => {
            return (
              <NavMenuItem
                key={menuIndex}
                onClick={() => handleClickMenu(menuIndex)}
                $focused={selectedMenu == menuIndex}
              >
                {menuItem.title}
              </NavMenuItem>
            );
          })}
        </NavSubMenuBox>
      );
  };

  const handleClick = (index) => {
    if (selectedNav == index) {
      setIsMenuOpened((prev) => !prev);
    } else {
      navigateTo(index, 0);
      setIsMenuOpened(true);
    }
  };

  const handleClickMenu = (index) => {
    if (selectedMenu != index) navigateTo(selectedNav, index);
  };

  const handleClickFooter = (index) => {
    const newWindowUrl = `${window.location.origin}` + footerNavMenus[index].to;
    window.open(newWindowUrl, "_blank");
  };

  const navigateTo = (nav, menu) => {
    let navigateURL = navMenus[nav].to;
    if (navSubMenus[nav][menu] && navSubMenus[nav][menu].title)
      navigateURL += navSubMenus[nav][menu].to;
    navigate(navigateURL);
  };

  return (
    <SidebarLayout>
      <ContentWrapper>
        <NavSection>
          <NavHeaderBox>
            <NavHeaderImg src={brandIcon}></NavHeaderImg>
            <NavHeaderText>{title}</NavHeaderText>
          </NavHeaderBox>
          <NavBox>
            {navMenus.map((item, index) => {
              return (
                <NavMenuCol key={index}>
                  <NavMenuBox
                    $focused={selectedNav == index}
                    onClick={() => handleClick(index)}
                  >
                    <NavMenuContentBox>
                      <NavMenuContentIcon>{item.icon}</NavMenuContentIcon>
                      <NavItemContentText>{item.title}</NavItemContentText>
                    </NavMenuContentBox>
                    <NavMenuActions>
                      {_navItemActionsBuilder(index)}
                    </NavMenuActions>
                  </NavMenuBox>
                  {_navSubMenuBuilder(index)}
                </NavMenuCol>
              );
            })}
          </NavBox>
        </NavSection>
        <FooterSection>
          <FooterNavigation>
            {footerNavMenus.map((item, index) => {
              return (
                <FooterNavItem
                  key={index}
                  onClick={() => handleClickFooter(index)}
                >
                  <FooterNavItemContent>
                    <NavMenuContentIcon>{item.icon}</NavMenuContentIcon>
                    {item.title}
                  </FooterNavItemContent>
                </FooterNavItem>
              );
            })}
          </FooterNavigation>
          <HorizontalDivider />
          <FooterAccount>
            <FooterAccountAvatar>
              <FooterAccountAvatarText>{name}</FooterAccountAvatarText>
              <FooterAccountAvatarSupportingText>
                {email}
              </FooterAccountAvatarSupportingText>
            </FooterAccountAvatar>
            <LogoutButton onClick={() => logout()}>
              <LogOutIcon
                strokecolor='#667085'
                style={{
                  cursor: "pointer",
                }}
              />
            </LogoutButton>
          </FooterAccount>
        </FooterSection>
      </ContentWrapper>
      <VerticalDivider />
    </SidebarLayout>
  );
};

SideBar.propTypes = {
  navMenus: PropTypes.array.isRequired,
  navSubMenus: PropTypes.array.isRequired,
  footerNavMenus: PropTypes.array.isRequired,
  brandIcon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export { SideBar };
