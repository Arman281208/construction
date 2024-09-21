import "./header.css";
import "./media.css";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

const Example = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{t("Real Estate")}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const Example2 = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{t("Services")}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const Example3 = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const changeLang = (lang) => {
    console.log(`Changing language to ${lang}`);
    i18n.changeLanguage(lang);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        <img src="./public/assets/img/ph_globe (1).png" alt="img" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => changeLang("en")}>Eng</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => changeLang("ru")}>Ru</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => changeLang("am")}>Am</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

Example.propTypes = {
  direction: PropTypes.string,
};

Example2.propTypes = {
  direction: PropTypes.string,
};

Example3.propTypes = {
  direction: PropTypes.string,
};

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="header">
      <header>
        <Row>
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li>
                <a className="menu__item" href="#">
                  {t("Real Estate")}
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  {t("Aksen Exclusive")}
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  {t("Services")}
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  {t("About Us")}
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  {t("Blog")}
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  {t("Contact")}
                </a>
              </li>
              <li>
                <a className="menu__item" href="#">
                  {t("Compare")}
                </a>
              </li>
              <li id="globus">
                <a className="menu__item" href="#">
                  <Example3 />
                </a>
              </li>
            </ul>
          </div>
          <Col lg={2}>
            <div className="logo">
              <Link to="/">
                <img src="./assets/img/logo.png" alt="logo" />
              </Link>
            </div>
          </Col>
          <Col lg={10}>
            <nav>
              <ul>
                <li>
                  <Example />
                </li>
                <li>
                  <Link to="/aksenExclusive">{t("Aksen Exclusive")}</Link>
                </li>
                <li>
                  <Example2 />
                </li>
                <li>
                  <Link to="/about">{t("About Us")}</Link>
                </li>
                <li>
                    <Link to="/blog">{t("Blog")}</Link>
                </li>
                <li>
                  <Link to="/contact">{t("Contact")}</Link>
                </li>
                <li>{t("Compare")}</li>
                <li className="globus">
                  <Example3 />
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </header>
    </div>
  );
};

export default Header;
